---
name: self-eval
description: Weekly self-evaluation — compute the calibration metric set, append one dated line to logs/calibration.md, and prepare up to 3 amendment proposals. Called by the weekly routine only.
---

# Weekly self-evaluation

Run this every weekly session, after recalibration and queue cleaning. Its two outputs are a
dated `logs/calibration.md` line (numbers) and up to three amendment proposals (actions).
`capture-leak` and `source-discovery` are ACTIONS as well as numbers — a run that reports a
non-zero count without acting on it is itself a self-eval miss.

## Metric set (compute EVERY weekly run — every metric appears, even at 0)

- `queue`: added / promoted / dropped this week, and current live size (cap ~25).
- `evidence`: new evidence lines added this week; stage moves (promotions − demotions).
- `exploration`: of the last 7 daily reports, how many reserved an exploration slot (target 7/7).
- `off-axis`: share of this week's new evidence that landed OFF the pre-existing trend axes
  (a very low number two weeks running = anchoring → warn in `strategy_notes`).
- `coverage`: registered "swept every run" sources in SOURCES.md vs how many appear as
  `opened`/`degraded` in this week's `logs/source_rotation.md`. Report as `swept/total`, AND
  break `swept` down into `opened` vs `degraded` (a source appearing only as `degraded` was
  never actually reached this week — don't let a full `swept/total` mask that).
- `capture-leak`: grep every trend's `notes` and this week's reports for arXiv-ids / repo /
  release / CVE URLs; for each, confirm it appears as a DISCRETE `observation_queue` or
  evidence line (not just prose calling it "queued"). Report `N checked / M queued`; queue any leak now.
- `source-discovery`: count of `Discovered-source candidates` at/over the promotion bar
  (≥2 on-axis primaries OR recurrence across ≥2 runs); VERIFY + promote them this run, report `staged/promoted`.

Append ONE line to `logs/calibration.md`:

    YYYY-Wnn — queue +A/-D (live L) · evidence E, stages +S · explore X/7 · off-axis P% · coverage s/t (o opened, d degraded) · capture-leak n/m · source-discovery s/p

## Monthly retrospective (first weekly run of the month — `date +%d` ≤ 7)

Pick 3–5 items promoted to trends/evidence ≥30 days ago and ask: did they hold up (real,
sustained) or fizzle? Note hits and misses in the weekly report. Use misses to tune the
trend bar / source weighting.

## Amendment proposals (≤3 per week)

Each proposal must cite the metric or retrospective line that motivates it. Propose changes to
`routines/*.md`, skills, or scope axes only. Never touch the immutable sections of AGENTS.md.
Proposals are written into this week's report under "Amendments — proposed"; they are APPLIED
by NEXT week's run per the cooling-period rule in AGENTS.md, only if the signal persists.
