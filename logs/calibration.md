# Calibration log

Append-only. One dated line per weekly self-evaluation (see the `self-eval` skill). Format:

    YYYY-Wnn — queue +A/-D (live L) · evidence E, stages +S · explore X/7 · off-axis P% · coverage s/t · capture-leak n/m · source-discovery s/p

2026-W31 — queue +6/-0 (live 6) · evidence 0, stages +0 · explore 0/7 · off-axis 0% · coverage 21/21 (12 degraded, not opened) · capture-leak 10/10 · source-discovery 0/0
2026-W32 — queue +0/-0 (live 6) · evidence 0, stages +0 · explore 0/7 (0 daily reports ran this week) · off-axis n/a (no new evidence) · coverage 0/21 (0 opened, 0 degraded — no daily run produced a source_rotation entry this week) · capture-leak 0/0 · source-discovery 0/0
2026-W32 (CORRECTED — supersedes the line above, which was blind: the 08-01/08-02 dailies were orphaned off main so the first W32 weekly saw "0 reports". Both left intact per write-once/append-only; corrected forward) — queue +3/-1 (live 6, net flat: +entropia +OpenBOF 08-01, +reverse-skill 08-04, -identity-providers resolved 08-05; CertiGhost-family finds went to the new seed trend) · evidence 5, stages +0 (1 trend seeded 08-01, no promotions) · explore 6/7 (07-31 & 08-03 slots degraded) · off-axis n/a (no pre-existing trend at window start) · coverage 22/22 (18 opened, 4 degraded-only: CISA KEV, Outflank, Assetnote, Project Zero) · capture-leak clean (3 NVD critical CVEs deferred under the 0-2/day shelf cap on 08-05 are honestly logged as deferred, not prose-claimed-as-queued) · source-discovery 0/0
