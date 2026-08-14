# Red Team Radar

Persistent state for the offensive-security frontier — tools, releases, techniques, research and advisories — curated for red team operators. Track published artifacts and situational awareness signals.

![trends](https://img.shields.io/badge/trends-5-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-26-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--14-2f9e44?style=flat-square)

---

## Since last scan (2026-08-13)

- [**SpecterOps: Attack of The Extensions**](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) — Chromium extensions as persistent C2 infrastructure; malicious extensions silently install and serve as command-and-control. C2/evasion axis.
- [**SpecterOps: Return of the Cookie Monster**](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) — Chrome DevTools Protocol (CDP) session hijacking and cookie theft. Web/evasion axis post-exploitation.
- [**BloodHound v9.6.0-rc4**](https://github.com/SpecterOps/BloodHound/releases) (2026-08-13) — Security fixes: XSS vulnerability mitigation (CVE-2026-67213 via nanoid/dompurify updates).
- **No new trends**: All existing trends (CertiGhost emerging, WSUS seed, Entra SyncJacking seed, Nightmare Eclipse emerging) unchanged. Dormancy watch for CertiGhost remains 2026-08-21 (7 days to promotion).

---

## Trends

**Status tally:** emerging 3 · seed 2 · accelerating 0

| Trend | Stage | Latest signal |
|-------|-------|---|
| [ADCS abuse & escalation](TRENDS.md#id-ad-adcs-001--adcs-abuse--escalation) | emerging | — |
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | emerging | [2026-08-06](https://www.fieldeffect.com/) — FieldEffect DC certificate impersonation analysis |
| [Nightmare Eclipse Windows zero-day research](TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderblockerbitlocker-zero-day-research-campaign) | emerging | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — 9 PoC exploits; historical campaign (no new evidence since Jul 31) |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | seed | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — SpecterOps comprehensive chain writeup (9 days quiet) |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis re-confirmation & guidance (8 days quiet) |

**Dormancy watch:** CertiGhost (emerging) scheduled for automatic promotion to dormant on 2026-08-21 if no new independent evidence arrives (7 days remaining).

---

## Worth studying

Current study shelf — technique writeups, novel primitives, and published research of immediate red-team relevance:

- [**SpecterOps: Attack of The Extensions**](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (Aug 13, 2026) — Chromium extensions as persistent C2 infrastructure; silently install extensions for command-and-control.
- [**SpecterOps: Return of the Cookie Monster**](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (Aug 13, 2026) — Chrome DevTools Protocol (CDP) session hijacking and cookie theft; authenticated browser abuse.
- [**PortSwigger: CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5, 2026) — HTTP/2 desynchronization via header CRLF injection; request smuggling & cache poisoning.
- [**SpecterOps: ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3, 2026) — SCCM/Configuration Manager attack-collection tool; 30+ techniques, 9 takeover paths.
- [**SensePost: Process Parameter Poisoning**](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6, 2026) — Novel injection primitive using `CreateProcessW` + thread-context manipulation; EDR evasion.
- [**ADscan**](https://github.com/ADScanPro/adscan) (2026) — Linux-native AD attack-chain consolidation; 104 techniques; Docker-based, no Windows infra required.
- [**Elastic: Living off the coding agent**](https://www.elastic.co/security-labs) (Aug 7, 2026) — LaunchAgent + reverse-tunnel abuse for autonomous agent C2 persistence.

[See full study shelf →](TRENDS.md#study_shelf)

---

## Tools & releases

Latest tracked releases (checked 2026-08-14):

- **BloodHound** v9.6.0-rc4 (Aug 13, 2026) — Security release: XSS vulnerability fixes (CVE-2026-67213 via nanoid/dompurify updates), dependency hardening
- **BloodHound** v9.6.0-rc3 (Aug 12, 2026) — XSS fixes, database query improvements
- **Nuclei** v3.11.0 (July 6, 2026) — JavaScript-protocol template signing enforcement (breaking change)
- **Sliver** v1.7.3 (Feb 2026)
- **NetExec**, **Certipy**, **impacket** (pre-2026, no recent updates)

---

## Watchlist & queue

[26 below-bar items in observation_queue](TRENDS.md#observation_queue) — awaiting 2nd independent source, trend-bar evidence, or burndown by age (checked 2026-08-14).

**Multi-vendor coverage ongoing:**
- **Microsoft August 2026 Patch Tuesday** (400+ CVEs, 3 zero-days; Qualys, CrowdStrike, ZDI, Talos, Rapid7 analysis)
- **TeamCity CVE-2026-63077** (6 independent sources; CISA KEV listed; watch for attack-chain research)
- **Langflow CVE-2026-9198** (5 independent sources; CISA KEV listed; watch for post-compromise analysis)

**Single-vendor awaiting secondary coverage:**
- **CodeIgniter 4 cluster** (3 CRITICAL/HIGH, Aug 7)
- **GitPython batch** (5 HIGH, Aug 7)
- **CHAINDROP npm worm** (400+ packages, 1.3B downloads; Elastic Security Labs discovery)
- **Nuxt 6-CVE cluster** (RCE, auth bypass, cache disclosure)
- **rclone batch** (command execution, auth bypass, path traversal)

---

## Resources

- **[TRENDS.md](TRENDS.md)** — full ledger
- **[Observation queue](TRENDS.md#observation_queue)** — 26 items awaiting promotion or burndown
- **[Reports](reports/)** — daily & weekly recalibrations
- **[Latest report](reports/2026-08-14.md)** — daily summary for 2026-08-14
- **[Latest weekly](reports/weekly/2026-W33.md)** — weekly recalibration for 2026-W33
- **[Source registry](SOURCES.md)** — primary feeds & discovery lanes

---

*Red Team Radar tracks and points to published offensive-security artifacts. It is a tracker, not a runbook — links only, no operational payloads.*
