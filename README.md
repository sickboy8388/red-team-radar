# Red Team Radar — Offensive Security Trend Tracker

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-13-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-20-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--04-2f9e44?style=flat-square)

---

## Since 2026-10-27

- **Quiet period (Oct 28 – Nov 3)** — No new CRITICAL multi-vendor CVE clusters. Primary blogs (11/13 reachable) show no new posts since Oct 27. NVD API returns historical data (parameter degradation). Tavily + WebSearch fallback functional.
- **Dormancy transitions applied** — PaperCut (24 days quiet) and Apex Accelerator (23 days quiet) moved from seed → dormant. PHP2Shell remains active seed (13 days quiet). Leaves 1 active seed trend.
- **Observation queue at capacity** — 20 items; oldest entries (Oct 14–15, 21 days old) at burndown threshold. Eligible for resolution if no secondary sources surface by 2026-11-11.
- **Tool releases unchanged** — Sliver v1.7.8 (Oct 3) and BloodHound v9.6.0 (Aug 18) remain latest. No new releases this period.
- **Access status** — Outflank 403 persistent. NVD API degraded. GHSA API 403-scoped. GitHub tool repos reachable. Tavily + WebSearch fallback effective.

---

## Trends

**seed 1 · dormant 12** (13 total: 1 seed, 0 emerging, 0 accelerating, 0 mainstreaming, 12 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | seed | [2026-10-22](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://github.com/advisories/GHSA-64qv-2ffq-h4w6) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-09-08](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-09-29](https://labs.watchtowr.com/here-we-go-again-citrix-netscaler-dtls-preauth-memory-overflow-cve-2026-88772/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-01](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | dormant | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | dormant | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |

---

## Tools & Releases

- **BloodHound** v9.6.0 (Aug 18, 2026) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound) — Active Directory attack-path analysis.
- **Sliver C2** v1.7.8 (Oct 3, 2026) — [BishopFox/sliver](https://github.com/BishopFox/sliver) — Lightweight command-and-control framework.
- **Nuclei** v3.11.1 (Aug 8, 2026) — [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) — Template-driven vulnerability scanner.
- **Certipy** v5.1.0 (Jun 23, 2026) — [ly4k/Certipy](https://github.com/ly4k/Certipy) — AD CS exploitation tool.
- **impacket** v0.9.20 (Sep 2026) — [fortra/impacket](https://github.com/fortra/impacket) — Python network protocol library.

---

## Worth Studying

Recent research, technique writeups, and secondary analysis on the radar:

- **Attack of The Extensions** (SpecterOps, Aug 13) — Chromium extensions as persistent C2 infrastructure; silently install and serve as command-and-control on compromised systems. https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/
- **Return of the Cookie Monster** (SpecterOps, Aug 13) — Authenticated browser session compromise via Chrome DevTools Protocol; cookie-theft techniques and modern protections. https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/
- **ConfigManBearPig 2.0** (SpecterOps, Aug 3) — SCCM/Configuration Manager attack-collection tool covering 30+ lateral-movement, priv-esc, and takeover paths; Linux support, proxy/alt-auth OPSEC. https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/
- **Process Parameter Poisoning "P3"** (SensePost, Jul 6) — Novel code-injection via process startup fields + CreateProcessW, reducing EDR footprint against four major vendors. https://sensepost.com/blog/2026/process-parameter-poisoning/
- **CRLF-Powered Desync Attacks** (PortSwigger Research, Aug 5) — HTTP/2 desynchronization via CRLF injection in header values; cache poisoning and request smuggling. https://portswigger.net/research/crlf-powered-desync-attacks

---

## References

- **Full ledger:** [TRENDS.md](TRENDS.md) (primary source of truth; all trend definitions, evidence, and stage definitions)
- **Observation queue** ([unverified / single-vendor signals](TRENDS.md#observation_queue)) — Items pending independent verification or below trend bar
- **Study shelf** ([secondary research & technique writeups](TRENDS.md#study_shelf)) — Strong research artifacts not yet forming trends
- **Daily reports:** [reports/](reports/) (scan logs with findings, source status, and blockers)
- **Weekly recalibrations:** [reports/weekly/](reports/weekly/) (trend velocity, stage moves, amendments)
- **Latest:** [2026-11-04 daily](reports/2026-11-04.md) · [2026-W45 weekly](reports/weekly/2026-W45.md)

---

*Autonomous Red Team Radar. Curated for operators. No runbooks, no PoCs — pointers to primary artifacts, verified evidence, and evolving attacks.*
