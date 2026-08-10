# Red Team Radar

Persistent state for the offensive-security frontier — tools, releases, techniques, research and advisories — curated for red team operators. Track published artifacts and situational awareness signals.

![trends](https://img.shields.io/badge/trends-3-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-22-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--10-2f9e44?style=flat-square)

---

## Since last scan (2026-08-08)

- [**CHAINDROP worm hits 400+ npm packages**](https://www.elastic.co/security-labs/shai-hulud-chaindrop) — Shai-Hulud threat actors compromised npm maintainer; 1.3B monthly downloads affected. Supply-chain attack → initial access.
- [**TeamCity CVE-2026-63077**](https://github.com/advisories/GHSA-6fbw-r78c-m4j8) — Unauthenticated deserialization RCE (CVSS 9.8). CISA KEV listed; federal deadline Aug 10. Active exploitation suspected.
- [**Langflow CVE-2026-9198**](https://github.com/advisories/GHSA-4m9g-p5wq-r8v3) — Unauthenticated code injection RCE (CVSS 9.8). CISA KEV listed; federal deadline Aug 7 (passed). Active exploitation suspected.
- **Egress block lifted:** primary blogs reopened 08-05 after 6 blocked sessions; 18/22 sources opened this week (coverage restored). Tavily secondary sweep promoted 4 new intelligence sources (Nextron, Kudelski, DataMinr, FieldEffect).
- **Trends stable**: CertiGhost emerging (dormancy watch 2026-08-21); WSUS & Entra SyncJacking seed (young, <3 days old evidence). Queue ~40 items, cap ~25; burndown due 2026-08-14.

---

## Trends

**Status tally:** emerging 1 · seed 2

| Trend | Stage | Latest signal |
|-------|-------|---|
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | emerging | [2026-08-06](https://fieldeffect.com/) — FieldEffect DC impersonation analysis |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis re-confirmation & guidance |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | seed | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — SpecterOps comprehensive chain writeup |

---

## Worth studying

Current study shelf — technique writeups, novel primitives, and published research of immediate red-team relevance:

- [**Elastic: Living off the coding agent**](https://www.elastic.co/security-labs) (Aug 7, 2026) — LaunchAgent + reverse-tunnel abuse for autonomous agent C2 persistence; detection evasion in real-time.
- [**Elastic: npm cooldown removals**](https://www.elastic.co/security-labs) (Aug 7, 2026) — Supply-chain attack detection via npm metadata manipulation.
- [**PortSwigger: CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5, 2026) — HTTP/2 desynchronization via header CRLF injection; request smuggling & cache poisoning.
- [**SpecterOps: ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3, 2026) — SCCM/Configuration Manager attack-collection tool; 30+ techniques, 9 takeover paths.
- [**SensePost: Process Parameter Poisoning**](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6, 2026) — Novel injection primitive using `CreateProcessW` + thread-context manipulation; EDR evasion.
- [**ADscan**](https://github.com/ADScanPro/adscan) (2026) — Linux-native AD attack-chain consolidation; 104 techniques; Docker-based, no Windows infra required.
- [**SpecterOps: Mythic 4.0.0 public beta**](https://specterops.io/blog/2026/08/04/introducing-mythic-4-0-0/) (Aug 4, 2026) — C2 framework release.

[See full study shelf →](TRENDS.md#study_shelf)

---

## Tools & releases

Latest tracked releases (checked 2026-08-08):

- **Nuclei** v3.11.0 (July 6, 2026) — JavaScript-protocol template signing enforcement (breaking change)
- **Mythic** v4.0.0 public beta (Aug 4, 2026) — C2 framework
- **Sliver** v1.7.3 (Feb 2026)
- **BloodHound** v9.5.1 (July 29, 2026)
- **NetExec**, **Certipy**, **impacket** (pre-2025, no recent updates)

---

## Watchlist & queue

[22 below-bar items in observation_queue](TRENDS.md#observation_queue) — awaiting 2nd independent source or concrete evidence.

**Highlights (awaiting secondary coverage):**
- **TeamCity CVE-2026-63077** (CRITICAL, CVSS 9.8, CISA KEV, federal deadline Aug 10)
- **Langflow CVE-2026-9198** (CRITICAL, CVSS 9.8, CISA KEV, federal deadline Aug 7 passed)
- **CodeIgniter 4 cluster** (3 CRITICAL/HIGH, Aug 7)
- **GitPython batch** (5 HIGH, Aug 7)
- **CHAINDROP npm worm** (400+ packages, 1.3B downloads, Elastic single-vendor)
- **Nuxt 6-CVE cluster** (RCE, auth bypass, cache disclosure)
- **rclone batch** (command execution, auth bypass, path traversal)

---

## Resources

- **[TRENDS.md](TRENDS.md)** — full ledger
- **[Observation queue](TRENDS.md#observation_queue)** — 22 items awaiting promotion or burndown
- **[Reports](reports/)** — daily & weekly recalibrations
- **[Latest report](reports/2026-08-08.md)** — daily summary for 2026-08-08
- **[Latest weekly](reports/weekly/2026-W33.md)** — weekly recalibration for 2026-W33
- **[Source registry](SOURCES.md)** — primary feeds & discovery lanes

---

*Red Team Radar tracks and points to published offensive-security artifacts. It is a tracker, not a runbook — links only, no operational payloads.*
