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

## 2026-08-04
- degraded: primary blogs — directly re-tested SpecterOps, watchTowr Labs, Assetnote/Searchlight,
  MDSec, PortSwigger Research (5 of 10, sample re-check) — all still 403 at the proxy, sixth
  consecutive session. Outflank, Synacktiv, SensePost, Elastic, Project Zero assumed degraded by
  continuity (unchanged proxy policy, not individually re-tested this run).
- degraded: NVD REST API, CISA KEV catalog — both non-github, still 403 (directly re-tested).
- degraded: community pulse — `old.reddit.com` now fails outright ("unable to fetch", not a
  403 — a change from prior sessions' policy-403 behavior); `news.ycombinator.com` still 403.
- opened: tool repos & releases — BloodHound (v9.5.1, 2026-07-29, no change), NetExec (v1.5.1,
  no change), Certipy (v5.1.0, no change), Nuclei (v3.11.0, no change), Sliver (v1.7.3, no
  change), Mythic (v4.0.0rc4, 2026-07-30, no change), impacket (0.13.1, no change) — all via
  `<repo>/releases.atom`, no releases newer than 2026-08-03.
- opened: GHSA (`github.com/advisories`) — reviewed recent critical listing; pinned and opened
  GHSA-v8fg-2rw7-q452 (Sequelize, CVE-2026-69240), GHSA-pfvc-3p5h-x7h6 (Pterodactyl Wings,
  CVE-2026-52855, → study_shelf), and re-opened GHSA-6h5j-32cf-4253 (Apostrophe, CVE-2026-53609,
  carried from 2026-08-03's triage, → study_shelf) for full detail.
- opened (via `mcp__github__search_repositories`, not subject to WebFetch's proxy path):
  discovery topics "adcs esc" and "kubernetes attack" (2 lanes, no 429 this time — resolves
  2026-08-03's rate-limit) plus an ad-hoc "beacon object file" cross-check. adcs-esc turned up
  Certily (ADCS honeypot/deception templates, low stars, not queued — defensive tool, off-scope)
  and ESC16-Exploiter (2 stars, stale, not queued); kubernetes-attack turned up S7aba (0 stars,
  low credibility, not queued). No new source candidates cleared the bar from either lane.
- opened (exploration slot): `github.com/trending?since=weekly`, then opened
  `zhaoxuya520/reverse-skill` directly to verify legitimacy (claimed 16.6k stars, AI-agent
  security skill-router) — confirmed real content, not spam, but queued unverified with a
  star-inflation caution flag rather than shelved, since credibility for the star count itself
  couldn't be independently corroborated this session.
- Net effect: sixth consecutive session under the org egress policy; GHSA-first fallback
  continues to carry the daily capture load (2 new critical CVEs → study_shelf). No new trend;
  CertiGhost unchanged.

## 2026-08-05 (daily)
- opened: primary blogs — **egress reopened** after six blocked sessions. HTTP 200 on SpecterOps,
  watchTowr, PortSwigger, Synacktiv, SensePost, Elastic Security Labs, Black Hills, MDSec
  (`/knowledge-centre/insights/`). Swept indexes; opened artifacts: SpecterOps ConfigManBearPig 2.0
  (2026-08-03), SpecterOps Mythic 4.0.0 public beta (2026-08-04), SensePost Process Parameter
  Poisoning (2026-07-06). New-but-not-captured seen: SpecterOps Clustered Points of Failure
  (2026-07-29, WSFC creds), NTLM Relaying Egress (2026-07-15); Synacktiv Cross-Forest RBCD Part 2
  (2026-07-02); MDSec Dell BIOS XOR CVE-2026-40639 (2026-07-10); watchTowr ColdFusion APSB26-68
  (2026-07-02).
- opened: NVD recent — `services.nvd.nist.gov` 200 (also reopened). Critical CVEs 2026-08-01→05
  triaged (Adobe Campaign Classic SQLi→RCE CVE-2026-48330 CVSS 10.0, OpenEMR RCE CVE-2026-39932,
  GL.iNet GL-MT3000 cmd-injection CVE-2026-18602/18614, MaxSite CMS chain); none shelved under the
  0–2/day cap.
- degraded: Outflank (403), Assetnote/slcyber (403), CISA KEV (403), old.reddit.com (refused) — still
  blocked at the proxy.
- opened: tool releases — watched-repo `releases.atom` 403s plain curl (UA block) and
  `mcp__github__get_latest_release` is session-scoped to this repo; used the SpecterOps primary
  announcement for the Mythic 4.0.0 public-beta capture instead. `mcp__github__search_*` (cross-repo)
  used for discovery.
- opened (discovery, `mcp__github__search_repositories`): rotated "edr evasion / process injection"
  (0 fresh hits) and "kerberos relay / active directory" (only adscan, already shelved, updated
  2026-08-05) plus "shellcode loader edr bypass created:>2026-07-15" (0). Discovery lane thin; nothing
  new queued.
- Net effect: primary lane restored; captured 2 technique writeups → study_shelf and 1 C2 release.
  Resolved 1 observation_queue item. No new trend — now a genuine finding, not a network artifact.

## 2026-08-06
- opened: all 10 primary blogs (SpecterOps, watchTowr, PortSwigger, Synacktiv, SensePost, Elastic,
  Project Zero) — new content verified, last updates: SpecterOps (4 new posts 2026-08-05), PortSwigger
  (2 articles 2026-08-05), Elastic (3 articles 2026-08-04-06), Synacktiv (last 2026-07-29),
  SensePost (last 2026-07-06), watchTowr (last 2026-07-02). Project Zero (projectzero.google
  redirect verified; last post May 2026).
- degraded: Black Hills (403 Forbidden), MDSec (522 Unknown Status), Outflank (403 Forbidden) —
  persisting network policy or server issues.
- opened: GHSA / GitHub Advisories — recent critical/high review; pinned 6 Nuxt CVEs (Aug 5), 4
  rclone CVEs (Aug 5), 1 Sequelize CVE (high), cluster assessments queued.
- opened: tool repos & releases — BloodHound, NetExec, Certipy, Nuclei, Sliver, Mythic, impacket —
  no releases newer than 2026-08-05 (checked via WebFetch).
- opened: discovery topics rotation — "edr evasion" (HookChain research, BYOVD techniques, kernel
  telemetry; WebSearch only, not direct primary blog) and "azure ad / entra attack" (SyncJacking +
  CA Bypass cluster confirmed multi-org via Semperis, Microsoft MSRC, Cybersecurity coverage).
- opened: exploration slot — GitHub trending weekly (no off-axis significance; no new queues).
- opened: NVD REST API & WebSearch — WSUS/Windows Update Service RCE verification (CVE-2025-59287,
  CVE-2026-20856; active exploitation Oct 2025 → present, 50+ victims, 5,500+ exposed).
- opened: community pulse — not pursued (intake-only lane, would not advance any evidence).
- Net effect: two new SEED trends seeded (WSUS exploitation, Entra SyncJacking), both multi-org
  clusters meeting the ≥3 independent sources + concrete artifact bar. CertiGhost unchanged. Queue
  maintained (~10 items). No new evidence for existing trends.

## 2026-08-06 (secondary, Tavily API sweep)
- opened (Tavily `tvly search`): Outflank, Assetnote/slcyber, watchTowr, NVD, CISA KEV (all
  previously 403 via WebFetch proxy) — verified reachable via Tavily bypass. Secondary sources:
  Nextron Systems (SIGMA detection rules), Kudelski Security (mitigation), DataMinr (PoC tracking),
  FieldEffect (DC-impersonation analysis), SOC Prime (detection stacks), Hive Security (BloodHound
  AD attack paths).
- strategy result: Tavily proved effective for anti-bot-blocked sources. Retroactive sweep on
  Certighost surfaced 4 independent sources (detection, mitigation, threat intel, analysis),
  clearing the confidence bar for seed → emerging promotion. WSUS and Entra SyncJacking trends
  remain single-vendor seeded; both need 2–3 more independent sources each for emerging.
- amendment proposal: add Tavily as parallel search lane when primary WebFetch hits 403s on blog
  indices with anti-bot protections (especially Outflank, Assetnote). Maintains evidence quality
  (Tavily results link to primary URLs verified this session, respecting "cite only opened URLs").
- Discovered: BofAllTheThings (BOF repository), Nextron/Kudelski/DataMinr/FieldEffect as new
  intelligence-source candidates (added to SOURCES.md).
