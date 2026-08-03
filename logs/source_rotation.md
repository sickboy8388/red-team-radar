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

## 2026-08-01
- degraded: all 10 primary blogs (SpecterOps, Project Zero, watchTowr, Assetnote, Outflank,
  MDSec, Synacktiv, PortSwigger, SensePost, Elastic) — org egress policy still 403s every
  non-github.com host, third session running.
- opened: tool repos & releases — BloodHound (new: v9.5.1, 2026-07-29), NetExec (no change),
  Certipy (no change), Nuclei (no change), Sliver (no change), Mythic (new: v4.0.0rc4,
  2026-07-30), impacket (no change), Havoc (still archived, unchanged) — all via
  `<repo>/releases.atom`.
- opened: GHSA (`github.com/advisories`) — reviewed recent critical/high listing; pinned and
  opened GHSA-p849-8hwh-84j9 (NocoBase, CVE-2026-52887) and GHSA-vvp7-h4fj-m28w (FileBrowser
  Quantum) in passing, and GHSA-64qv-2ffq-h4w6 (CertiGhost, CVE-2026-54121) via targeted lookup.
- opened (via `mcp__github__search_repositories`/`search_code`, not subject to WebFetch's
  proxy path): discovery topics "process injection" and "beacon object file" (2 lanes rotated
  as required) plus one curated awesome-list check (`awesome-red-team` family, 5 results, no
  new source candidates). Surfaced and opened: entropia, OpenBOF, SliverC2-Evasion-Suite,
  certighost-bof (which led to the CertiGhost CVE cluster: aniqfakhrul's PoC, the h0j3n/
  aniqfakhrul gist writeup, and nafiez's Metasploit module).
- opened (re-verify from queue): mkPIVM, Phantom-Evasion-Loader — both GitHub repo URLs were
  never actually blocked (queued "not opened" in error on 2026-07-31, a labeling slip); opened
  and confirmed this session, queue lines updated with real content.
- degraded: NVD REST API, CISA KEV catalog — both non-github, still 403.
- degraded: community pulse — Reddit (`www.reddit.com` fetch refused outright, not just 403),
  Hacker News front page — both non-github, policy 403.
- opened (exploration slot): `github.com/trending?since=weekly` — reviewed for off-axis
  significance; nothing offensive-relevant found (one defensive code-review tool, not queued).
- Net effect: unlike 2026-07-31 and 2026-W31, GitHub-native sources alone (GHSA + gist +
  repo/code search) carried enough independent-source diversity to clear the trend bar —
  see `TRENDS.md → strategy_notes` (2026-08-01 entry).
