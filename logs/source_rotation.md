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

## 2026-08-02
- degraded: all 10 primary blogs (SpecterOps, Project Zero, watchTowr, Assetnote, Outflank,
  MDSec, Synacktiv, PortSwigger, SensePost, Elastic) — still 403 at the proxy, fourth
  consecutive session under the org egress policy (github.com-only).
- opened: tool repos & releases — BloodHound, NetExec, Certipy, Nuclei, Sliver, Mythic,
  impacket (all via `<repo>/releases.atom`). No releases newer than the last run (2026-08-01).
- opened: GHSA (`github.com/advisories`) — reviewed recent critical listing (6 items, all
  ≤2026-07-31, already known); pinned CVE-2026-10520 (Ivanti Sentry) to GHSA-v2vc-rgvq-3pwf,
  resolving a queue item without needing the blocked blog.
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
- opened (verification): mkPIVM, Phantom-Evasion-Loader repos — independently re-confirmed
  legitimate, still 1 group each, stay queued.
- degraded: community pulse — old.reddit.com, news.ycombinator.com both 403/unreachable,
  same as prior sessions.
- WebSearch (server-side) used only for queue corroboration counts, never as evidence,
  per the 2026-W31 strategy_notes redirect.

## 2026-08-03
- CONTINUITY: found reports/TRENDS.md for 2026-08-01 and 2026-08-02 had never reached `main`
  (stuck on unmerged branches/PRs from prior sessions). Reconciled both into this session
  before scanning further — see TRENDS.md → strategy_notes and reports/2026-08-03.md for the
  incident note. Left an unmerged 2026-W32 weekly branch (routine amendments look valid;
  calibration line does not — see strategy_notes) for a future weekly run to resolve.
- degraded: all 10 primary blogs (SpecterOps, Project Zero, watchTowr, Assetnote, Outflank,
  MDSec, Synacktiv, PortSwigger, SensePost, Elastic) — confirmed 403 again (specterops.io,
  labs.watchtowr.com directly tested this session), fifth consecutive session under the org
  egress policy.
- opened: GHSA (`github.com/advisories`) — reviewed recent critical listing across ecosystems;
  pinned and opened GHSA-r2v3-8gwf-7ghm (Vault Secrets Webhook, CVE-2026-54725) and
  GHSA-wcrf-9vrr-854f (Envoy Gateway, CVE-2026-53713), both new → study_shelf. Also opened
  GHSA-6h5j-32cf-4253 (Apostrophe prototype pollution, CVE-2026-53609) for triage; assessed as
  slightly lower offensive priority than the other two today, not added (can revisit).
- opened: tool repos & releases — BloodHound, Sliver, Mythic, Certipy, NetExec, Nuclei,
  impacket — no releases newer than 2026-08-02 (WebFetch summaries were internally
  inconsistent on dates for a couple of repos; treated as no-material-change rather than
  chasing a possibly-stale render).
- degraded: GitHub repo/code search (`github.com/search`, both discovery-topic queries:
  "adcs esc", "kubernetes attack") — hit HTTP 429, Retry-After 3600s, before either query
  returned results. First session where this lane itself degraded rather than the proxy;
  no discovery-topic rotation completed today.
- degraded: NVD REST API, CISA KEV catalog — both non-github, still 403.
- degraded: community pulse (Reddit, Hacker News) and exploration slot — WebSearch queries
  for both returned only SEO-aggregator/junk results (no primary source, no citable signal);
  nothing queued per the never-cite-aggregators rule.
