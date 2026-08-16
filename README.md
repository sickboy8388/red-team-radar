# Red Team Radar

Persistent tracker of the offensive-security frontier — tools, releases, techniques, research and advisories — curated for red team operators.

![trends](https://img.shields.io/badge/trends-4-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-26-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--16-2f9e44?style=flat-square)

---

## Since last scan (2026-08-16)

- **No new trends seeded.** Existing 4 trends stable (CertiGhost, WSUS, Entra SyncJacking, Nightmare Eclipse all quiet).
- [**Microsoft August 2026 Patch Tuesday**](https://www.tenable.com/blog/microsofts-august-2026-patch-tuesday-addresses-398-cves-cve-2026-68820) — 400 CVEs, 3 zero-days (1 actively exploited). Multi-vendor analyses from Tenable, CrowdStrike, Rapid7, ZDI, Qualys. Framework-level patching; no novel red-team-specific attack-chain research yet.
- **14 HIGH-severity single-vendor GHSA advisories** (Aug 12-14) — All awaiting independent researcher corroboration. No CRITICAL advisories this period.
- [**Citrix NetScaler CVE-2026-8452**](https://labs.watchtowr.com/youre-back-in-the-room-citrix-netscaler-pre-auth-rce-cve-2026-8452/) (watchTowr, Aug 14) — Pre-authentication RCE on edge devices. Single vendor; queued for secondary corroboration.
- **Dormancy watch for CertiGhost:** 2026-08-21 (5 days remaining). Automatic promotion to dormant if no new independent evidence surfaces.

---

## Trends

**Status tally:** emerging 2 · seed 2 · accelerating 0

| Trend | Stage | Latest signal |
|-------|-------|---|
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | emerging | [2026-08-06](https://kudelskisecurity.com/) — Kudelski Security mitigation guidance |
| [Nightmare Eclipse Windows zero-day research](TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderblockerbitlocker-zero-day-research-campaign) | emerging | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — 9 PoC exploits; historical campaign (Jul 31) |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | seed | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — SpecterOps comprehensive writeup |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis guidance |

**Dormancy watch:** CertiGhost (emerging) → automatic promotion to dormant on 2026-08-21 if no new evidence (6 days remaining).

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

[26 below-bar items](TRENDS.md#observation_queue) — awaiting 2nd independent source or burndown by age (checked 2026-08-15).

**Multi-vendor escalations:**
- **Microsoft August 2026 Patch Tuesday** (400+ CVEs, 3 zero-days; multi-org analyst coverage)
- **TeamCity CVE-2026-63077** (6 independent sources; CISA KEV; watch for attack-chain research)
- **Langflow CVE-2026-9198** (5 independent sources; CISA KEV; watch for post-compromise analysis)

**Single-vendor signals (awaiting corroboration):**
- **Citrix NetScaler CVE-2026-8452** (watchTowr Aug 14; pre-auth RCE)
- **ARM64 Stack Obfuscation Research** (MDSec Aug 2026; EDR evasion on Apple Silicon)
- **GHSA Advisory Stream** (13 HIGH-severity CVEs, Aug 14; all single-vendor)

---

## Resources

- **[TRENDS.md](TRENDS.md)** — full ledger with evidence & stage history
- **[Observation queue](TRENDS.md#observation_queue)** — 26 items awaiting promotion or age-based burndown
- **[Strategy notes](TRENDS.md#strategy_notes)** — coverage decisions & calibration history
- **[Reports](reports/)** — daily & weekly recalibrations
- **[Latest daily](reports/2026-08-16.md)** — 2026-08-16
- **[Latest weekly](reports/weekly/2026-W33.md)** — 2026-W33
- **[Source registry](SOURCES.md)** — primary feeds & discovery topics

---

*Red Team Radar is a tracker of published offensive-security artifacts and situational awareness signals. Pointers only; no operational payloads or step-by-step attack procedures.*
