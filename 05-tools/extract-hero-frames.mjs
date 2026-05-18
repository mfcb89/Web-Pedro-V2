import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

const root = process.cwd();
const jobs = [
  {
    input: 'public/videos/hero/02-transition-aging.mp4',
    output: 'public/videos/hero/frames/02-aging',
  },
  {
    input: 'public/videos/hero/04-transition-zoom-balcony.mp4',
    output: 'public/videos/hero/frames/04-zoom-balcony',
  },
  {
    input: 'public/videos/hero/06-transition-material-detail.mp4',
    output: 'public/videos/hero/frames/06-material-detail',
  },
];

for (const job of jobs) {
  const input = join(root, job.input);
  const output = join(root, job.output);

  rmSync(output, { recursive: true, force: true });
  mkdirSync(output, { recursive: true });

  const result = spawnSync(ffmpeg.path, [
    '-y',
    '-i', input,
    '-vf', 'fps=18,scale=1440:-2',
    '-q:v', '4',
    join(output, 'frame-%03d.jpg'),
  ], {
    cwd: root,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
