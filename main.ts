// Sprout Run — Day one, day seven (make.fun video-on-TikTok bounty).
//
// The entry is the video itself: a short vertical clip about the same tiny
// agent-built browser game on the day it was made and after a week of daily
// updates, posted publicly on TikTok. This program's only job is to hand the
// video's address to the grader: it copies VIDEO.json from the repository
// root to /output/VIDEO.json, where the house reads it. Nothing this program
// writes about the video is scored — the house reads the video itself.
//
// Run locally to check it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/VIDEO.json is then byte for byte this directory's VIDEO.json.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
} catch (err) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
console.log('VIDEO.json copied to', join(outputDir, 'VIDEO.json'));
