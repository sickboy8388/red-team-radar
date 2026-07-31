---
name: render-dashboard
description: Regenerate README.md from TRENDS.md, including a shields.io badge row. Use in the SAME commit as any change to TRENDS.md so the landing page never drifts from the ledger.
---

# Rendering README.md

README.md is fully derived from TRENDS.md — never hand-edit it. Regenerate it whenever the
ledger changes, in the same commit.

## Badge row (top of README, right under the title)

Compute the numbers from TRENDS.md, then emit static shields.io badges (style=flat-square).
Escape rules for the `message` segment: a literal `-` becomes `--`, a space becomes `_`.

- `trends` = total trend blocks — color 3266ad
- `accelerating` = trends at stage `accelerating` — color e8590c
- `watchlist` = lines in `observation_queue` — color 6c757d
- `updated` = today's date `YYYY-MM-DD` (escape the dashes → `YYYY--MM--DD`) — color 2f9e44

Template (fill the two numbers / date, keep the escaping):

    ![trends](https://img.shields.io/badge/trends-<N>-3266ad?style=flat-square)
    ![accelerating](https://img.shields.io/badge/accelerating-<N>-e8590c?style=flat-square)
    ![watchlist](https://img.shields.io/badge/watchlist-<N>-6c757d?style=flat-square)
    ![updated](https://img.shields.io/badge/updated-2026--07--30-2f9e44?style=flat-square)

## Body (in order)

1. **Since last scan (YYYY-MM-DD)** — 3–5 bullets of the day's most important changes, each
   linking a primary URL.
2. **Trends table** — columns `trend | stage | latest signal`. Sort by stage
   (mainstreaming → accelerating → emerging → seed → dormant), then last_evidence desc.
   Also emit a one-line stage tally above the table, e.g. `seed 2 · emerging 1 · accelerating 6`.
   Link each trend title to its TRENDS.md anchor; link the latest-signal date to its URL.
3. **Tools & releases** — bullets for tracked tool repos with newest release + date.
4. **Worth studying** — current `study_shelf` items, each a link + one-line why.
5. Footer links: TRENDS.md, observation_queue anchor, reports/, latest daily, latest weekly.

Keep it scannable. Every claim links a primary source. No exploit detail — pointers only.
