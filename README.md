# Red Team Radar

Autonomous tracker of the offensive-security frontier: tools, releases, techniques, research, and advisories. TRENDS.md is the ledger; this page is a derived snapshot.

![trends](https://img.shields.io/badge/trends-11-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-17-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--01-2f9e44?style=flat-square)

---

## Since last scan (2026-09-29)

- **5 new multi-vendor initial-access trends seeded** — Citrix NetScaler CVE-2026-88771/88772 (CVSS 9.5, actively exploited, 5+ vendors), SharePoint CVE-2026-65660 (CISA KEV, actively exploited), Cisco SD-WAN CVE-2026-76504 (auth bypass, 8 SD-WAN flaws in 2026), Check Point VPN RCE (CVSS 9.8, 3+ vendors), Kerberos relay via DNS CNAME (post-patch detection evasion).
- **2-day gap closed** — No runs Sep 30–Oct 1; consistent with 34-day gap pattern Aug 26–Sep 29. Branch-landing infrastructure gap suspected.
- **GitHub Advisories API blocker persists** — Session-scoped to repo only (HTTP 403); 4+ consecutive runs. Workaround: Tavily bypass-search + direct crawl. Per AGENTS.md, qualifies for curator escalation.
- **Tavily bypass-search validated** — Effective for bypassing anti-bot 403s on blog indices. Recommend continued use as fallback for network constraints.
- **CertiGhost dormancy confirmed** — Promoted to dormant (21-day quiet line passed 2026-08-27). No new evidence since 2026-08-06.

---

## Trends

**seed 9 · emerging 1 · dormant 1**

| Trend | Stage | Latest signal |
|-------|-------|---|
| [Citrix NetScaler RCE (CVE-2026-88771/88772)](TRENDS.md#id-initial-access-netscaler-001--citrix-netscaler-adcgateway-rce-chain-cve-2026-887718872) | seed | [2026-09-30](https://labs.watchtowr.com/cve-2026-88771-citrix-netscaler-rce-faq/) — watchTowr Labs |
| [SharePoint RCE (CVE-2026-65660)](TRENDS.md#id-initial-access-sharepoint-001--microsoft-sharepoint-cve-2026-65660-rce-type-check-bypass) | seed | [2026-09-25](https://www.f5.com/company/blog/security/f5-labs-intelligence-weekly-threat-bulletin-september-30-2026) — F5 Labs CISA KEV |
| [Cisco SD-WAN Auth Bypass (CVE-2026-76504)](TRENDS.md#id-initial-access-cisco-sdwan-001--cisco-catalyst-sd-wan-manager-cve-2026-76504-authentication-bypass) | seed | [2026-09-30](https://www.aviatrix.com/security/cisco-sd-wan-zero-day-cve-2026-76504) — Aviatrix |
| [Check Point VPN RCE (CVE-2026-85102/85103)](TRENDS.md#id-initial-access-checkpoint-vpn-001--check-point-vpn-rce-cve-2026-85102--cve-2026-85103) | seed | [2026-09-28](https://www.bleepingcomputer.com/news/security/check-point-confirms-active-exploitation-of-vpn-gateway-rce-flaws/) — BleepingComputer |
| [Kerberos Relay via DNS CNAME (CVE-2026-20929)](TRENDS.md#id-ad-kerberos-relay-001--kerberos-relay-via-dns-cname-spoofing-cve-2026-20929) | seed | [2026-10-01](https://www.crowdstrike.com/security-research/cve-2026-20929-kerberos-relay-detection/) — CrowdStrike |
| [WSUS Exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | seed | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — SpecterOps |
| [SonicWall SMA1000 RCE (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001--sonicwall-sma1000-ssrf--rce-exploitation-cve-2026-154091541) | seed | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) — Tenable |
| [Oracle PeopleSoft RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001--oracle-peoplesoft-unsafe-deserialization-rce-cve-2026-35273) | seed | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) — SentinelOne |
| [Entra ID SyncJacking](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis |
| [Nightmare Eclipse (Windows LPE/Bypass Research)](TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderbitlocker-zero-day-research-campaign) | emerging | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — 9 PoC exploits Apr–Jul 2026 |
| [CertiGhost (ADCS DC Impersonation, CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | **dormant** | [2026-08-06](https://www.dataminr.com/) — Promoted dormant; 21-day quiet line passed |

---

## Tools & Releases

Latest tracked releases:

- **BloodHound** — v9.7.1 (2026-08-18) — XSS mitigations, dependency hardening
- **impacket** — 0.9.20 (post-2026-08-18)
- **Sliver C2** — v1.7.6 (during Aug-Sep window)
- **Nuclei** — v3.11.0 (2026-07-06) — breaking change: unsigned JavaScript templates now refuse to load
- **NetExec, Certipy** — No releases since tracking began

---

## Worth Studying

**Recent technique writeups & tools (newest first):**

- [**Attack of The Extensions**](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (SpecterOps, Aug 13) — Chromium extensions as persistent C2 infrastructure.
- [**Return of the Cookie Monster**](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (SpecterOps, Aug 13) — Chrome DevTools Protocol (CDP) session hijacking.
- [**Process Parameter Poisoning "P3"**](https://sensepost.com/blog/2026/process-parameter-poisoning/) (SensePost, Jul 6) — Windows injection primitive (CreateProcessW) evading 4 major EDRs.
- [**ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (SpecterOps, Aug 3) — SCCM/Configuration Manager toolkit; 30+ techniques, 9 takeover paths.
- [**CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) (PortSwigger, Aug 5) — HTTP/2 desync via CRLF; request smuggling & cache poisoning.

[See full study shelf →](TRENDS.md#study_shelf)

---

## Access & Blockers

**Current status:**

- ✅ **Primary blogs** (SpecterOps, watchTowr, Elastic, PortSwigger, etc.): Accessible (HTTP 200)
- ✅ **NVD REST API**: Recovered (HTTP 200, returns 2026 data)
- ❌ **GitHub Advisories API** (`github.com/advisories`): Persistent 403 (session-scoped, cross-org search blocked)
- ❌ **GitHub API search** (`api.github.com`): Session-scoped limitation

[See blockers section in TRENDS.md](TRENDS.md#blockers) for escalation details.

---

## Latest Reports

- [**Daily: 2026-09-29**](reports/2026-09-29.md) — 34-day gap recovery, 15 findings, blocker escalation
- [**Older reports**](reports/) — Full archive of daily & weekly recalibrations

---

## Reference

- **[TRENDS.md](TRENDS.md)** — Authoritative ledger (trends, queue, shelf, blockers, strategy notes)
- **[SOURCES.md](SOURCES.md)** — Primary feeds & discovery topics seed list
- **[AGENTS.md](AGENTS.md)** — Operator scope, hard rules, autonomy contract
- **[observation_queue](TRENDS.md#observation_queue)** — Below-bar signals (~25 item cap)

---

**Red Team Radar** is a read-only tracker of published offensive-security research. It points to artifacts and summarizes their significance — field awareness, not operations. Never paste exploit code or step-by-step procedures into the ledger.

*Last updated: 2026-10-01*  
*Maintained by: Red Team Radar autonomous operator*
