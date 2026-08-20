# Red Team Radar

Persistent tracker of the offensive-security frontier — tools, releases, techniques, research and advisories — curated for red team operators.

![trends](https://img.shields.io/badge/trends-6-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-28-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--20-2f9e44?style=flat-square)

---

## Since last scan (2026-08-19)

- [**SpecterOps AWSHound**](https://specterops.io/blog/2026/08/19/awshound-an-opensource-aws-opengraph-collector/) (Aug 19) — AWS OpenGraph collector for BloodHound; enables attack-path analysis for AWS infrastructure. Cloud/identity axis; single vendor.
- [**13 HIGH-severity CVEs published**](https://github.com/advisories) (GHSA, Aug 19) — GeoServer SSTI, Document Merge SSTI→RCE, MCP command injection; all single-vendor, no critical this run.
- [**BloodHound CE v9.6.0 stable**](https://github.com/SpecterOps/BloodHound/releases) (2026-08-18) — First stable after RC cycle; XSS fix + dependency hardening.
- **CertiGhost dormancy watch begins today** — Last evidence 2026-08-06 (14 days quiet); dormancy line 2026-08-27 (21-day threshold).

---

## Trends

**Status tally:** emerging 2 · seed 4 · accelerating 0

| Trend | Stage | Latest signal |
|-------|-------|---|
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | emerging | [2026-08-06](https://www.dataminr.com/) — DataMinr PoC tracking; dormancy watch 2026-08-21 |
| [Nightmare Eclipse Windows zero-day research](TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderblockerbitlocker-zero-day-research-campaign) | emerging | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — 9 PoC exploits (Apr–Jul 2026) |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001--sonicwall-sma1000-ssrf--rce-exploitation-cve-2026-15409-15410) | seed | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) — Tenable; CVSS 10.0; active exploitation |
| [Oracle PeopleSoft deserialization RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001--oracle-peoplesoft-unsafe-deserialization-rce-cve-2026-35273) | seed | [2026-08-17](https://www.rapid7.com/blog/post/etr-active-exploitation-of-oracle-peoplesoft-zero-day-cve-2026-35273/) — Rapid7; CVSS 9.8; UNC6240 |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | seed | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — SpecterOps; 50+ victims |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis & MSRC confirmation |

**Dormancy watch:** CertiGhost (emerging) → watch 2026-08-21 (tomorrow); automatic promotion to dormant on 2026-08-27 if no new evidence (13 days quiet since 2026-08-06).

---

## Worth studying

Technique writeups, novel primitives, and published research of immediate red-team relevance:

- [**SpecterOps: Attack of The Extensions**](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (Aug 13) — Chromium extensions as persistent C2; silent installation for command-and-control.
- [**SpecterOps: Return of the Cookie Monster**](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (Aug 13) — Chrome DevTools Protocol (CDP) session hijacking and cookie theft.
- [**SpecterOps: ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3) — SCCM/Configuration Manager attack toolkit; 30+ techniques, 9 takeover paths.
- [**SensePost: Process Parameter Poisoning**](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6) — Novel injection primitive using `CreateProcessW`; EDR evasion.
- [**PortSwigger: CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5) — HTTP/2 desync via CRLF; request smuggling & cache poisoning.

[See full study shelf →](TRENDS.md#study_shelf)

---

## Tools & releases

Latest tracked releases (checked 2026-08-15):

- **BloodHound** v9.6.0-rc5 (Aug 14) — Go 1.26.6 dependency upgrade
- **BloodHound** v9.6.0-rc4 (Aug 13) — XSS vulnerability fixes (CVE-2026-67213)
- **Sliver** v1.7.3 (Feb 2026)
- **Nuclei**, **NetExec**, **Certipy**, **impacket** (no recent updates)

---

## Observation queue

[28 below-bar items](TRENDS.md#observation_queue) — awaiting 2nd independent source or burndown by age (checked 2026-08-20).

**Multi-vendor escalations:**
- **Microsoft August 2026 Patch Tuesday** (400+ CVEs, 3 zero-days; multi-org analyst coverage; on-axis: Azure Service Bus RCE, Azure SQL EoP, Windows AD CS RCE)
- **TeamCity CVE-2026-63077** (6 independent sources; CISA KEV; watch for attack-chain research)
- **Langflow CVE-2026-9198** (5 independent sources; CISA KEV; watch for post-compromise analysis)

**Single-vendor signals (awaiting corroboration):**
- **Citrix NetScaler CVE-2026-8452** (watchTowr Aug 14; pre-auth SAML RCE; queued for secondary)
- **ARM64 Stack Obfuscation Research** (MDSec Aug 15; EDR evasion on Apple Silicon)
- **Cisco Firewall CVE-2026-20349** (unauthenticated RCE; awaiting PoC/secondary analysis)
- **GHSA Advisory Stream** (13+ HIGH-severity CVEs, Aug 14–15; all single-vendor)

---

## Resources

- **[TRENDS.md](TRENDS.md)** — full ledger with evidence & stage history
- **[Observation queue](TRENDS.md#observation_queue)** — 28 items awaiting promotion or age-based burndown
- **[Strategy notes](TRENDS.md#strategy_notes)** — coverage decisions & calibration history
- **[Reports](reports/)** — daily & weekly recalibrations
- **[Latest daily](reports/2026-08-20.md)** — 2026-08-20
- **[Latest weekly](reports/weekly/2026-W33.md)** — 2026-W33
- **[Source registry](SOURCES.md)** — primary feeds & discovery topics
- **[Source rotation log](logs/source_rotation.md)** — session-by-session coverage tracking

---

*Red Team Radar is a tracker of published offensive-security artifacts and situational awareness signals. Pointers only; no operational payloads or step-by-step attack procedures.*
