# Red Team Radar — Offensive Security Trend Tracker

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-16-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-32-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--01-2f9e44?style=flat-square)

---

## Since last scan (2026-10-27)

- **Drupal RCE chain seeded** — CVE-2026-118539 (Commerce auth-bypass) + CVE-2026-108097/108099 (core RCEs) + CVE-2026-9082 (API SQLi) actively exploited Oct 28-30; 6+ vendor coverage (SecurityWeek, SOCRadar, F5 Labs, Aviatrix, Drupal official). https://www.securityweek.com/drupal-commerce-core-vulnerability-exploited-against-online-stores

- **TeamPCP npm/PyPI supply-chain seeded** — GitHub Actions cache poisoning; compromised Bitwarden, TanStack, UiPath, Mistral AI, guardrails-ai packages; 6+ vendor coverage (GitGuardian, Arctic Wolf, Rapid7, RapidFort, Elastic, OpenAI) Oct 28-29. https://blog.gitguardian.com/three-supply-chain-campaigns-hit-npm-pypi-and-docker-hub-in-48-hours

- **GitLab exploitation chain active** — CVE-2026-85706 (path traversal, CVSS 10.0) + CVE-2026-97229 (RCE) exploited Oct 30; unauthenticated arbitrary file read + code execution. https://orca.security/resources/blog/gitlab-critical-path-traversal-cve-2026-85706-exploited

- **9 new critical single-vendor CVEs queued** — Dell RecoverPoint CVE-2026-22769 (UNC6201 zero-day), SAP Commerce CVE-2026-58231 (CVSS 10.0), Fastjson CVE-2026-16723 (CVSS 9), Cisco SD-WAN CVE-2026-20245, Ivanti EPMM CVE-2026-6973 (zero-day), WP Maps Pro CVE-2026-8732 (CVSS 9.8), Railway/LiteLLM supply-chain signals (unverified).

---

## Trends

seed 5 · emerging 1 · dormant 10

| Trend | Stage | Latest |
|-------|-------|--------|
| [Drupal RCE ecosystem chain](TRENDS.md#id-web-drupal-rce-001) | seed | [2026-10-30](https://www.securityweek.com/drupal-commerce-core-vulnerability-exploited-against-online-stores) |
| [TeamPCP npm/PyPI supply-chain](TRENDS.md#id-supplychain-teampcp-001) | seed | [2026-10-29](https://blog.gitguardian.com/three-supply-chain-campaigns-hit-npm-pypi-and-docker-hub-in-48-hours) |
| [PaperCut NG/MF Pre-Auth RCE Chain](TRENDS.md#id-initial-access-papercut-001) | seed | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [Apex Accelerator Malicious npm Packages](TRENDS.md#id-initial-access-apex-accelerator-001) | seed | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [PHP2Shell RCE](TRENDS.md#id-web-php2shell-001) | seed | [2026-10-22](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) |
| [Kerberos Relay via DNS CNAME Abuse](TRENDS.md#id-identity-kerberos-relay-dns-cname-001) | emerging | [2026-10-03](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [Nightmare Eclipse: Windows Defender/BitLocker zero-day research campaign](TRENDS.md#id-evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |
| [SonicWall SMA1000 SSRF + RCE exploitation](TRENDS.md#id-initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE](TRENDS.md#id-initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.rapid7.com/blog/post/etr-active-exploitation-of-oracle-peoplesoft-zero-day-cve-2026-35273/) |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write](TRENDS.md#id-initial-access-fortimail-001) | dormant | [2026-10-01](https://daily.dev/posts/fortinet-sounds-the-alarm-over-actively-exploited-fortimail-zero-day-dkwlg7a1e) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE](TRENDS.md#id-initial-access-citrix-netscaler-001) | dormant | [2026-09-27](https://www.bleepingcomputer.com/news/security/citrix-admins-warned-to-shut-down-netscalers-over-2-exploited-zero-days/) |
| [N-able N-central Pre-Auth RCE](TRENDS.md#id-initial-access-nable-ncentral-001) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [CertiGhost AD CS "chase" DC-impersonation](TRENDS.md#id-ad-certighost-001) | dormant | [2026-08-06](https://kudelskisecurity.com/) |

---

## Tools & releases

- **BloodHound** — v9.6.0 stable (2026-08-18): XSS fix CVE-2026-67213, dependency hardening. https://github.com/SpecterOps/BloodHound
- **Sliver C2** — v1.7.7 (2026-09-03): OPFOR BOF scripting, shell handling, tunnel hardening. https://github.com/BishopFox/sliver
- **NetExec** — v1.5.1: ADCS/CertiHound integration, BloodHound ingestor. https://github.com/Pennyw0rth/NetExec
- **Certipy** — v4.x: ADCS ESC1–17, BloodHound integration, shadow credentials. https://github.com/ly4k/Certipy
- **Nuclei** — v3.11.0: Unsigned JavaScript template restrictions. https://github.com/projectdiscovery/nuclei
- **impacket** — v0.9.20: AD abuse, DCSync, relay chains. https://github.com/fortra/impacket

---

## Worth studying

- **Process Parameter Poisoning (SensePost, 2026-07-06)** — Code-injection via CreateProcessW + thread context, evades 4 EDRs. https://sensepost.com/blog/2026/process-parameter-poisoning/

- **Return of the Cookie Monster (SpecterOps, 2026-08-13)** — Browser session compromise via Chrome DevTools Protocol; cookie theft techniques. https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/

- **ConfigManBearPig 2.0 (SpecterOps, 2026-08-05)** — SCCM attack framework: 30+ techniques, 9 domain-admin paths, Linux support. https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/

- **Attack of The Extensions (SpecterOps, 2026-08-13)** — Chromium extensions as persistent C2; silent installation for browser-resident command-and-control. https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/

- **CRLF-Powered Desync Attacks (PortSwigger, 2026-08-05)** — HTTP/2 desync via CRLF injection; request smuggling and cache poisoning. https://portswigger.net/research/crlf-powered-desync-attacks

---

## Meta

- **[Full trend ledger](TRENDS.md)** | **[Observation queue](TRENDS.md#observation_queue)** | **[Daily reports](reports/)** | **[Latest](reports/2026-11-01.md)** | **[This week](reports/weekly/)**
- Red Team Radar — offensive-security frontier tracker. Autonomous daily scans. Curated for red team operators.
