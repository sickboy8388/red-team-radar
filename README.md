# Red Team Radar — Offensive Security Trend Tracker

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-15-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-25-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--28-2f9e44?style=flat-square)

---

## Since 2026-10-27

- **Node2Shell (CVE-2026-111497) seeded** — Brotli decoder RCE affecting Node.js, Bun, Python, Envoy (CVSS 9.2). Disclosed Oct 21, PoC Oct 22. Six vendor coverage (Sysdig, Akamai, Imperva, Wiz, HeroDevs, NVD) clears trend bar. https://www.akamai.com/us/en/research/threat-intelligence/cve-2026-111497-node2shell-brotli-rce/
- **GitLab RCE (CVE-2026-110264) seeded** — Regex compiler integer overflow enabling unauthenticated RCE on self-managed instances 7.0+ (CVSS 10.0). Disclosed Oct 21. Six vendor coverage (SOC Prime, Aviatrix, Brandefense, Konfirmity, Beazley, Upwind) clears trend bar. Fourth regex RCE in 30 days (joaxcar/HackerOne). https://about.gitlab.com/releases/2026/10/21/critical-security-release-18-11-13-released/
- **PHP2Shell stable** — CISA added CVE-2026-109618/109619 to KEV Oct 26 (CVSS 9.2). 6+ vendor analysis ongoing.
- **Collabora Online added to CISA KEV** — CVE-2026-110447 (OS command injection pre-auth, CVSS 9.2). Single vendor; queued for corroboration.
- **Scan context** — Tavily + WebFetch effective for CVE/advisory discovery. NVD API parameter issues persist; GHSA/CISA KEV blocked but fallbacks functional.

---

## Trends

**seed 5 · dormant 10** (15 total: 5 seed, 0 emerging, 0 accelerating, 0 mainstreaming, 10 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [Node2Shell: Brotli Decoder RCE (CVE-2026-111497)](#web-node2shell-001) | seed | [2026-10-28](https://www.wiz.io/blog/node2shell-brotli-cve-2026-111497) |
| [GitLab Regex Compiler RCE (CVE-2026-110264)](#web-gitlab-rce-001) | seed | [2026-10-28](https://www.ruby-lang.org/en/news/2026/10/23/ruby-fixes-regex-bugs/) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | seed | [2026-10-22](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | seed | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | seed | [2026-10-09](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://github.com/advisories/GHSA-64qv-2ffq-h4w6) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-10-03](https://labs.watchtowr.com/here-we-go-again-citrix-netscaler-dtls-preauth-memory-overflow-cve-2026-88772/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-03](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Tools & Releases

- **BloodHound CE** v9.6.0 (2026-08-18) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound) — Stable release; AD attack-path analysis. XSS fix CVE-2026-67213.
- **Sliver C2** v1.7.8 (2026-10-03) — [BishopFox/sliver](https://github.com/BishopFox/sliver) — Lightweight command-and-control framework.
- **Nuclei** v3.11.0 (2026-07-06) — [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) — Breaking change: unsigned JavaScript templates now blocked.
- **Kali Linux** 2026.3 (2026-10-27) — [Offensive Security](https://www.offensive-security.com/kali-linux-2026-3-release/) — 6 new tools, kernel 6.19→7.1.5, 126 package updates.
- **NetExec** v1.5.1 (Feb 23, 2024) — [Pennyw0rth/NetExec](https://github.com/Pennyw0rth/NetExec) — Credentials & lateral-movement executor.
- **impacket** 0.13.1 (May 19, 2026) — [fortra/impacket](https://github.com/fortra/impacket) — Active Directory / SMB toolkit.

---

## Worth Studying

- [SpecterOps: Attack of The Extensions](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (Aug 13) — Chromium extensions as persistent C2 infrastructure; silent installation and C&C serving tradecraft.
- [SpecterOps: Return of the Cookie Monster](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (Aug 13) — Chrome DevTools Protocol cookie theft for authenticated browser session compromise.
- [PortSwigger Research: CRLF-Powered Desync Attacks](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5) — HTTP/2 desynchronization via CRLF injection; request smuggling & cache poisoning.
- [SpecterOps: ConfigManBearPig 2.0](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3) — SCCM/Configuration Manager attack collection tool (30+ techniques, 9 takeover paths).
- [SensePost: Process Parameter Poisoning "P3"](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6) — Code injection via process-startup fields; EDR footprint reduction.

---

## Observation Queue

**~25 unverified signals** awaiting trend promotion (≥3 independent sources required). [View full watchlist →](TRENDS.md#observation_queue)

Recent entries: CVE-2026-96951 (Windows IKE RCE, priority watch), Collabora Online RCE, Railway infrastructure attack, LiteLLM supply-chain.

---

## Details

- **[TRENDS.md](./TRENDS.md)** — Single source of truth: seed/emerging/accelerating/mainstreaming/dormant trends, confidence, aliases, evidence chains, strategy notes.
- **[Observation Queue](./TRENDS.md#observation_queue)** — Below-bar signals awaiting independent verification (≥3 sources threshold for trend seeding).
- **[Reports](./reports/)** — Daily & weekly publications tracking changes, findings, and calibration metrics.
- **[Latest Weekly Report](./reports/weekly/2026-W44.md)** — Oct 26 recalibration; 4 seed trends demoted to dormant (21+ days quiet); 2 fresh seed trends held; observation queue maintained at 23 items.
- **[SOURCES.md](./SOURCES.md)** — Agent-maintained registry of primary blogs, CVE feeds, tool repos, discovery topics, community pulse venues.

---

**Last updated:** 2026-10-28

*Autonomous red-team situational awareness — curated for operators. Published artifacts only. [Scope & rules →](AGENTS.md)*
