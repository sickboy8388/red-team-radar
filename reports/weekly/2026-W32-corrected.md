# Weekly recalibration — 2026-W32 (CORRECTED)

This supersedes the first W32 weekly (`reports/weekly/2026-W32.md`, commit 8251d10) **going
forward only** — that report and its calibration line are preserved untouched (write-once history).
The original recalibrated **blind**: it ran on a false "zero daily reports 08-01→03" premise because
the 08-01/08-02 dailies were orphaned on un-merged branches, invisible from `main` until the 08-03
continuity repair. The 08-03 and 08-05 daily notes both asked a future weekly to redo W32 with
accurate history; this is that redo, against all 6 daily reports (07-31→08-05).

## Recalibration — hold everything
- **`ad-certighost-001` (CertiGhost, CVE-2026-54121):** stays `seed`. Its 5-artifact cluster
  (Microsoft/GHSA advisory + original researchers' PoC + independent Metasploit module + independent
  Mythic BOF + technical writeup, ≥4 independent groups) is real and comfortably past the trend bar,
  but **zero new independent evidence arrived this week** (last evidence 2026-07-31). The ledger rule
  is "one stage up only on NEW independent evidence" — none came, so no promotion. Velocity is flat.
- **Dormancy:** 5 days quiet, well short of the 21-day line → not dormant. **Watch:** if nothing
  lands by ~2026-08-21 it becomes a demotion/dormancy candidate.
- **Merges / archivals:** none (only one trend exists).
- **Strongest:** CertiGhost — still the only trend and well-corroborated. **Weakest:** the four
  1-group EDR-evasion queue items (mkPIVM, Phantom-Evasion-Loader, entropia, OpenBOF) — they hit the
  14-day mark (seeded 07-31 / 08-01) next week; drop unless a 2nd independent group appears.

## Queue & study_shelf
- Live queue **6**, all <14 days → no forced burndown. study_shelf 13 picks, all <30 days → no
  pruning. No duplicates to merge.
- **No new-trend anchoring risk, and the inverse of over-anchoring:** the one trend received *none*
  of this week's captures — everything landed in queue/shelf. With ~8 primary orgs swept on 08-05 and
  still no ≥3-org cluster on a single fresh sub-theme, "no new trend" is now a genuine finding, not a
  network artifact. The EDR-evasion volume (mkPIVM, Phantom, entropia, P3, SliverC2 suite, OpenBOF)
  spans **distinct mechanisms** — polymorphic-VM, SROP loader, PIC language, process-param poisoning,
  sleep masking — too broad to be one trend. Hold the bar; don't let volume masquerade as a trend.

## Source strategy (first real diff — the blind W32 had no logs to check)
- **Coverage 22/22, but 18 opened vs 4 degraded-only.** Egress **reopened on 08-05** after six
  consecutive blocked sessions: 8/11 blogs + NVD came back to HTTP 200, joining GHSA (the week's
  workhorse — nearly every capture) and the tool-release lane.
- **The 4 sources never opened all week:** CISA KEV, Outflank, Assetnote/slcyber, Google Project
  Zero. CISA KEV is the standout — blocked all 6 sessions *including* 08-05 when NVD and 8 blogs
  reopened, and 0 evidence for the project's whole life. Flagged as a mirror target below.
- **No source added or dropped:** the blocked sources are policy-gated, not dead (NVD + 8 blogs just
  proved that by reopening). Discovered-source candidates: 0/0.

## Forward-looking bets (next 1–2 weeks)
1. **Confirm the reopening holds.** If blogs stay reachable, multi-org blog diversity can finally
   clear the trend bar — SCCM abuse (SpecterOps) and novel EDR-evasion injection are the two
   sub-themes closest, each still single-org today.
2. **CertiGhost decides its own fate:** one new independent artifact → emerging; another 2 quiet
   weeks → dormancy watch fires.
3. **CISA KEV needs a GitHub-native mirror** — it's the one swept source still fully blocked.
4. **Deferred on 08-05 under the shelf cap** (revisit as daily picks, strongest first): Adobe
   Campaign Classic SQLi→RCE (CVE-2026-48330, CVSS 10.0), OpenEMR RCE (CVE-2026-39932), GL.iNet
   GL-MT3000 cmd-injection (CVE-2026-18602/18614).

## Calibration
`2026-W32 (CORRECTED) — queue +3/-1 (live 6, net flat) · evidence 5, stages +0 (1 trend seeded) ·
explore 6/7 (07-31 & 08-03 degraded) · off-axis n/a · coverage 22/22 (18 opened, 4 degraded-only:
CISA KEV, Outflank, Assetnote, Project Zero) · capture-leak clean · source-discovery 0/0`
- **capture-leak clean:** the 3 NVD CVEs deferred on 08-05 are honestly logged as *deferred under the
  0–2/day cap*, not prose-claimed-as-queued — not leaks. Queued as next-daily shelf candidates above.
- Monthly retrospective: none due (nothing promoted ≥30 days ago; project is 5 days old).

## Amendments
- **Applied this run:** none. The three W31→W32 routine amendments already landed (commit 8251d10);
  W32's own proposals are due W33, not now.
- **Rollback check:** none — no valid two-week regression (the prior W32 line was blind, not a real
  data point to compare against).
- **Withdrawn:** the W32-proposed "daily-cadence gap" check — its motivating signal ("0 dailies
  08-01→03") was a **misdiagnosis**; the dailies ran and were orphaned off `main`, not missing.
  Replaced by proposal #1 below.

### Amendments — proposed (apply 2026-W33 only if the signal persists)
1. **`routines/weekly.md` — add a "trailing-7-days landed on main" check.** Before recalibrating, run
   `git log --oneline origin/main -- reports/` and confirm each of the last 7 days has a daily report
   *on main*; if any is missing, hunt for orphaned branches first. *Cites:* the blind-W32 incident —
   orphaned dailies caused a weekly to recalibrate on a false 0-reports premise.
2. **`routines/daily.md` / `source_rotation` — log the GitHub *sub-surface* used** (web vs API vs raw
   vs `mcp__github__*`). *Cites:* 08-05 — `releases.atom` UA-blocked while `mcp__github__search_*`
   worked; "GitHub reachable" hid a real split. (Carried from the prior W32; signal persists.)
3. **Reassess the degraded-network fallback lane at W33.** If egress stays open ≥5/7 days, reframe the
   `routines/daily.md` fallback as explicitly *fallback-only* (blogs are primary again). *Cites:*
   coverage jumped from 6 blocked sessions to 18/22 opened this window.

## Persisted
`TRENDS.md` (one `strategy_notes` entry — no trend/queue/shelf moved, so `README.md` is unchanged and
already current from the 08-05 daily), `logs/calibration.md` (+1 corrected line, blind line intact),
this report. Committed as `radar: weekly recalibration 2026-W32`.
