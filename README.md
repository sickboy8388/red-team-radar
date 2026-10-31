# Red Team Radar — Offensive Security Trend Tracker

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-13-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-25-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--31-2f9e44?style=flat-square)

---

## Since 2026-10-27

- **118 CRITICAL CVEs published Oct 28-31** — NVD sweep identified significant red-team-relevant findings: Google Chrome RCE (CVE-2026-119261/119263, CVSS 10.0), Gravity Forms RCE (WordPress, CVE-2026-103039), pgAdmin code execution (CVE-2026-116241), ThingLinks IoT RCE (CVE-2026-62849/62853). Queued pending multi-vendor corroboration for trend evaluation.
- **Blogs quiet** — No new research posts across 13 primary blogs Oct 28-31. Latest from PortSwigger (Oct 27), Elastic (Oct 26), SpecterOps (Oct 23).
- **Seed trends holding** — PaperCut, Apex Accelerator, PHP2Shell stable with no new evidence Oct 28-31. Dormancy watch continues.
- **Tool ecosystem stable** — No new releases from tracked repositories. Latest: Sliver v1.7.8 (Oct 3).
- **Watchlist at cap** — observation_queue now 25 items; oldest entries (Oct 3-15) eligible for burndown on next run.

---

## Trends

**seed 3 · dormant 10** (13 total)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | seed | [2026-10-22](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | seed | [2026-10-14](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | seed | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://github.com/advisories/GHSA-64qv-2ffq-h4w6) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-10-03](https://thehackernews.com/2026/09/n-able-n-central-pre-auth-rce-flaw.html) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-10-03](https://gbhackers.com/citrix-confirms-netscaler-zero-day-rce-flaws/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-03](https://heise.de/en/news/FortiMail-Attacks-on-zero-day-vulnerability-underway-workaround-available-11473685.html) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-10-03](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-10-23](https://unit42.paloaltonetworks.com/microsoft-cve-2025-59287/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://labs.beazley.security/advisories/BSL-A1189) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.oracle.com/security-alerts/alert-cve-2026-35273.html) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Tools & Releases

- **BloodHound** v9.9.0-rc3 (Oct 21, 2026) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound) — Active Directory attack-path analysis.
- **Sliver C2** v1.7.8 (Oct 3, 2026) — [BishopFox/sliver](https://github.com/BishopFox/sliver) — Lightweight command-and-control framework.
- **Mythic** v3.4 (Oct 10, 2026) — [its-a-feature/Mythic](https://github.com/its-a-feature/Mythic) — Multi-agent C2 platform.
- **Nuclei** v3.11.1 (Aug 8, 2026) — [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) — Template-driven vulnerability scanner.
- **Certipy** v5.1.0 (Jun 23, 2026) — [ly4k/Certipy](https://github.com/ly4k/Certipy) — AD CS exploitation tool.
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

**23 unverified signals** awaiting trend promotion (≥3 independent sources required). [View full watchlist →](TRENDS.md#observation_queue)

Recent entries: CVE-2026-96951 (Windows IKE RCE, priority watch), php2shell RCE detection, Railway infrastructure attack, LiteLLM supply-chain, Collabora Online RCE.

---

## Details

- **[TRENDS.md](./TRENDS.md)** — Single source of truth: seed/emerging/accelerating/mainstreaming/dormant trends, confidence, aliases, evidence chains, strategy notes.
- **[Observation Queue](./TRENDS.md#observation_queue)** — Below-bar signals awaiting independent verification (≥3 sources threshold for trend seeding).
- **[Reports](./reports/)** — Daily & weekly publications tracking changes, findings, and calibration metrics.
- **[Latest Weekly Report](./reports/weekly/2026-W44.md)** — Oct 26 recalibration; 4 seed trends demoted to dormant (21+ days quiet); 2 fresh seed trends held; observation queue maintained at 23 items.
- **[SOURCES.md](./SOURCES.md)** — Agent-maintained registry of primary blogs, CVE feeds, tool repos, discovery topics, community pulse venues.

---

**Last updated:** 2026-10-27

*Autonomous red-team situational awareness — curated for operators. Published artifacts only. [Scope & rules →](AGENTS.md)*
