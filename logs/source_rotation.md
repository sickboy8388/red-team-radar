# Source rotation log

Append-only. One dated line per run: which sources were `opened` or `degraded: <reason>`.

## 2026-07-31 (first run)
- degraded: all 10 primary blogs (SpecterOps, Project Zero, watchTowr, Assetnote, Outflank,
  MDSec, Synacktiv, PortSwigger, SensePost, Elastic) — org egress policy 403'd every
  non-github.com host this session (confirmed via proxy status: `connect_rejected` on
  example.com and labs.watchtowr.com CONNECTs alike).
- opened: tool repos & releases — BloodHound, NetExec, Certipy, Nuclei, Sliver, Mythic,
  impacket (all via `<repo>/releases.atom`, dates cross-checked against raw XML). Havoc:
  opened, found archived 2026-02-20 with no releases.
- opened: GHSA (`github.com/advisories`) — reviewed recent critical/high listing, pinned
  one exact advisory (GHSA-xr9x-r78c-5hrm).
- degraded: NVD REST API, CISA KEV catalog — both non-github, policy 403.
- opened (partial): discovery topics — GitHub repo search for "kerberos relay", "adcs esc",
  "edr evasion" (2 lanes rotated as required, did a 3rd since search was cheap).
- degraded: community pulse — r/redteamsec (old.reddit.com fetch failed), Hacker News
  front page — both non-github, policy 403.
- degraded: exploration slot — no non-GitHub listing reachable to browse off-axis; skipped
  rather than fabricate.
- WebSearch (server-side tool, not subject to the same egress policy) still worked and
  surfaced blog leads, queued unverified since the underlying pages couldn't be opened.

## 2026-08-02
- degraded: all 10 primary blogs (SpecterOps, Project Zero, watchTowr, Assetnote, Outflank,
  MDSec, Synacktiv, PortSwigger, SensePost, Elastic) — still 403 at the proxy, third
  consecutive session under the org egress policy (github.com-only).
- opened: tool repos & releases — BloodHound, NetExec, Certipy, Nuclei, Sliver, Mythic,
  impacket (all via `<repo>/releases.atom`). No releases newer than the last run (2026-07-31).
- opened: GHSA (`github.com/advisories`) — reviewed recent critical listing (6 items, all
  ≤2026-07-31, already known); pinned CVE-2026-10520 (Ivanti Sentry) to GHSA-v2vc-rgvq-3pwf,
  resolving a 2-run-old queue item without needing the blocked blog.
- opened: CVEProject/cvelistV5 (github.com) — confirmed reachable as a GitHub-native CVE
  feed alternative to NVD; not yet used for a specific pull this run.
- degraded: NVD REST API, CISA KEV catalog — both non-github, policy 403 (tested directly
  this run, not just assumed from prior sessions).
- opened: discovery topics — GitHub repo search for "kerberos relay", "c2 framework",
  "azure ad / entra attack" (3 lanes rotated, ≥2 required). Surfaced ADScanPro/adscan
  (new, 506 stars, AD attack-chain CLI) as the standout; several other "C2 framework"
  hits looked like low-credibility/malware-marketing repos and were deliberately not
  queued.
- opened: one curated awesome-list (yeyintminthuhtut/Awesome-Red-Teaming) — confirmed
  stale/no-longer-updated, kept as historical only.
- opened: exploration slot — github.com/trending (weekly) — nothing on-axis this run.
- opened (verification): mkPIVM, Phantom-Evasion-Loader repos (queued 2026-07-31,
  not opened until today) — both confirmed legitimate, still 1 group each, stay queued.
- degraded: community pulse — old.reddit.com, news.ycombinator.com both 403/unreachable,
  same as prior sessions.
- WebSearch (server-side) used only for queue corroboration counts, never as evidence,
  per the 2026-W31 strategy_notes redirect.
