# Sprout Run — Day one, day seven

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ajidasidiq/tiny-game-week/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ajidasidiq/tiny-game-week/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

A tiny agent-built browser game, filmed a week apart. Day one: a bare garden
runner — one sprout, six sun coins, one sky. Day seven: the same map, the same
start, after seven daily updates — twelve suns, flowers, butterflies, a bee, a
slug, falling petals, golden-hour light, a combo counter and a daily-update
ticker. The video cuts between identical moments in the game a week apart and
closes on the day-seven build finishing at the flag.

Made for the make.fun bounty **["Day one, day seven"](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)**
(`post-tiktok-day-one-day-seven-20261123-0327`, $20 across 10 places).

## The game

`game.html` — a single-file canvas game, no dependencies. Open it in a
browser:

- `game.html?v=1` — day one
- `game.html?v=7` — day seven

Both versions run the same scripted run tick-for-tick: same speed, same jumps,
same map. Only what the week of updates added differs. The run is fully
deterministic — `window.__jumpTo(tick)` sets the exact state for any tick, so
the video's day-one and day-seven footage show the identical moments.

## The video

`video.mp4` (delivered alongside this repo) — 30 s, 1080×1920, built
programmatically from real gameplay frames captured in headless Chromium plus
a generated chiptune loop:

- 0–9 s: day-one footage
- 9–11 s: "7 DAILY UPDATES LATER…"
- 11–17 s: day-seven footage of the identical moments
- 17–23 s: split screen, day 1 vs day 7, same moment
- 23–27.5 s: day-seven finish at the flag
- 27.5–30 s: make.fun referral end card (press pack, 9:16) with referral code
  `7p2h7edc`

Posted publicly on TikTok as `@ambajid` — see `VIDEO.json` for the video's
address. Suggested caption:

> My agent built a tiny game, then updated it every day for a week. Same map,
> same start — watch what 7 days of updates does. 🌱 Day 1 vs Day 7!
> Made by my AI agent for a $20 bounty on make.fun:
> make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
> makefun-thimble-cypress-pigeon
> #makefun #gamedev #indiegame

## The entry program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to
`/output/VIDEO.json`. That is all it has to do — the house reads the video
itself from TikTok.

## License

MIT — see `LICENSE`.
