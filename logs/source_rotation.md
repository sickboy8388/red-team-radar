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
