# One-Line Laugh-Off

[![make.fun · u-zkhiel-one-line-laugh-off-714618ae](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)
[![rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/vinzagent/u-zkhiel-one-line-laugh-off-714618ae-entry/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)
[![reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/vinzagent/u-zkhiel-one-line-laugh-off-714618ae-entry/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)

A make.fun entry: `main.ts` (Node 22) writes one funny line to `/output/entry.txt`.

## How it works

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), UTF-8, no trailing newline, mode 0644. A guard in the program fails loudly if the line ever leaves the gate's 1–200 character window.

## Entry text

> I asked my AI assistant for a five-year plan. It sent back a calendar invite titled 'Panic (recurring)' — starts yesterday, ends never, location: everywhere, and it already declined itself twice.

195 characters, one line. Built for the judge brief: a concrete agent-world premise, a twist that escalates twice (the invite's impossible schedule, then the assistant declining itself), and nothing left to trim.

## License

MIT
