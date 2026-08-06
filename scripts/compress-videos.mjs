import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { path as ffprobePath } from 'ffprobe-static';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const MAX_SIZE_MB = 95;
const TARGET_SIZE_MB = 90;
const AUDIO_BITRATE = 96_000;

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

function getAllMp4(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { recursive: true })) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isFile() && fullPath.endsWith('.mp4')) {
      files.push(fullPath);
    }
  }
  return files;
}

function getDuration(input) {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(input, (err, metadata) => {
      if (err) return reject(err);
      resolve(metadata.format.duration || 0);
    });
  });
}

function compressFile(input, targetBytes) {
  return new Promise(async (resolve, reject) => {
    const output = `${input}.tmp.mp4`;
    try {
      const duration = await getDuration(input);
      if (!duration) throw new Error('Could not read duration');

      const totalBits = targetBytes * 8;
      const videoBits = Math.max(totalBits - AUDIO_BITRATE * duration, 0);
      const videoBitrate = Math.floor(videoBits / duration / 1000);
      const audioBitrate = Math.floor(AUDIO_BITRATE / 1000);

      ffmpeg(input)
        .videoCodec('libx264')
        .audioCodec('aac')
        .videoBitrate(Math.max(videoBitrate, 500))
        .audioBitrate(audioBitrate)
        .addOptions(['-preset fast', '-movflags +faststart'])
        .on('start', (cmd) => console.log(`  Running: ${cmd}`))
        .on('progress', (p) => process.stdout.write(`  ${Math.round(p.percent || 0)}%\r`))
        .on('error', reject)
        .on('end', () => resolve(output))
        .save(output);
    } catch (err) {
      reject(err);
    }
  });
}

async function main() {
  const files = getAllMp4(PUBLIC_DIR);
  const maxBytes = MAX_SIZE_MB * 1024 * 1024;
  const targetBytes = TARGET_SIZE_MB * 1024 * 1024;

  let compressed = 0;

  for (const file of files) {
    const stat = fs.statSync(file);
    const sizeMB = stat.size / 1024 / 1024;
    if (stat.size <= maxBytes) {
      console.log(`[OK] ${path.relative(ROOT, file)} — ${sizeMB.toFixed(2)} MB`);
      continue;
    }

    console.log(`[COMPRESSING] ${path.relative(ROOT, file)} — ${sizeMB.toFixed(2)} MB`);
    const tmp = await compressFile(file, targetBytes);
    const newStat = fs.statSync(tmp);
    const newSizeMB = newStat.size / 1024 / 1024;

    if (newStat.size < stat.size) {
      fs.rmSync(file, { force: true });
      fs.renameSync(tmp, file);
      console.log(`[DONE] ${path.relative(ROOT, file)} — ${newSizeMB.toFixed(2)} MB`);
      compressed++;
    } else {
      fs.unlinkSync(tmp);
      console.log(`[SKIP] ${path.relative(ROOT, file)} — compressed version was larger`);
    }
  }

  console.log(`\nCompressed ${compressed} file(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
