# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-11-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-25-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--26-2f9e44?style=flat-square)

---

## Since last scan (2026-11-26)

**Quiet period continues (day 11 of Nov 16–26)** — No new trends seeded. All major scan lanes completed. No new CRITICAL/HIGH advisories with multi-vendor corroboration. No new tool releases. Observation queue stable at 25-item cap. 11th consecutive quiet-day run with no new trends, no evidence escalations.

- **Primary blog sweep:** 13/13 sources checked; all accessible (HTTP 200). No new on-axis posts detected since Nov 23. Last activity: Elastic Nov 23, SpecterOps Nov 19, watchTowr Nov 5.

- **CVE advisory watch:** NVD REST API endpoint returns 200 but queries exhibit parameter issues (documented). GHSA API session-scoped 403 (documented low-impact blocker). No new CRITICAL/HIGH entries with multi-vendor corroboration from Nov 26.

- **Tool releases:** No new releases detected Nov 26. Latest: BloodHound CE v9.10.1 (Nov 19), Sliver v1.7.9 (Oct 25).

- **Queue status:** Observation queue at 25-item cap (stable). Highest-value queued: Barracuda Email Security Gateway (watchTowr Nov 5, 21 days pending secondary sources). No multi-vendor trend-bar hits this run.

- **Network status:** 13/13 primary blogs accessible (all HTTP 200). NVD accessible but with parameter issues. GHSA API 403 (low-impact, web UI fallback available). GitHub API scoped (documented blocker 2026-08-26).

---

## Trends

**seed 3 · emerging 1 · dormant 7**

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [Microsoft agent-framework PyPI Supply-Chain Attack](#initial-access-agent-framework-001) | seed | [2026-11-17](https://www.wiz.io/blog/malicious-version-of-microsofts-agent-framework-published-to-pypi) |
| [Optimizely Web Experimentation Supply-Chain Attack (OPTIMJACK)](#initial-access-optimizely-001) | seed | [2026-11-16](https://report.uri.report/2026/11/16/optimjack-the-optimizely-web-experimentation-incident) |
| [Java4Shell OpenJDK Base64 RCE (CVE-2026-114938)](#web-java4shell-001) | seed | [2026-11-18](https://blog.qualys.com/vulnerabilities-threat-research/2026/11/17/how-to-find-mitigate-and-patch-the-critical-java4shell-flaw-cve-2026-114938-now) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | emerging | [2026-10-22](https://www.elastic.co/security-labs/threat-command/php2shell-assessing-elastic-detection-coverage) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-10-03](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-01](https://socradar.io/blog/fortimail-zero-day-under-active-exploitation/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-10-03](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | dormant | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Packages](#initial-access-apex-accelerator-001) | dormant | [2026-10-14](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [Nightmare Eclipse Windows Lock-Screen Bypass](#evasion-nightmare-eclipse-001) | dormant | [2026-11-21](https://www.securityweek.com/fastunlock-windows-11-narrator-zero-day-impacting-users-across-organizations/) |

---

## Tools & releases

Latest stable / pre-release versions (checked 2026-11-26):

- **BloodHound** — v9.10.1 (2026-11-19, stable) [ADCS improvements: ESC11, ESC16; multi-destination pathfinding; graph export PNG/JPEG/SVG]
- **Sliver** — v1.7.9 (2026-10-25) [OPFOR BOF scripting, shell handling, tunnel hardening]
- **NetExec** — v1.5.1 [Active Directory enumeration & exploitation]
- **Certipy** — v5.1.0 [ADCS exploitation framework]
- **Nuclei** — latest stable [Vulnerability scanning template engine]
- **impacket** — maintained [Windows network penetration testing]

---

## Worth studying

- **[BloodHound v9.10.0 ADCS improvements (Nov 16)](https://github.com/SpecterOps/BloodHound/releases/tag/v9.10.0-rc1)** — New ESC11 and ESC16 template-abuse detection; closes ADCS enumeration gaps for identity-axis operators.
- **[adshell-rs: Interactive AD Shell (Nov 2)](https://github.com/g0h4n/adshell-rs)** — Rust-native LDAP(S)/ADWS interactive shell supporting RBCD manipulation, Shadow Credentials, DCSync, group management. No Windows infra required.
- **[Attack of the Extensions: Chromium Extension C2 Persistence (Aug 13)](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/)** — Browser extensions as persistent C2 infrastructure; silently installed on compromised systems.
- **[Return of the Cookie Monster: Chrome DevTools Protocol Session Compromise (Aug 13)](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/)** — Authenticated browser session theft via CDP; post-exploitation session hijacking.

---

## Resources

- **[Trend ledger (TRENDS.md)](TRENDS.md)** — Full trend definitions, evidence, dormancy tracking, strategy notes.
- **[Observation queue](TRENDS.md#observation_queue)** — 25 single-vendor signals below trend-bar; monitored for secondary corroboration.
- **[Daily reports (reports/)](reports/)** — Scan results, ledger changes, next-day priorities.
- **[Latest daily report (2026-11-26)](reports/2026-11-26.md)** · [Latest weekly (2026-W48)](reports/weekly/2026-W48.md)
- **[Source registry (SOURCES.md)](SOURCES.md)** — Primary feeds, discovery topics, community pulse.
- **[Source rotation log (logs/source_rotation.md)](logs/source_rotation.md)** — Append-only daily coverage notes (network status, lanes opened/degraded).
- **[Calibration log (logs/calibration.md)](logs/calibration.md)** — Weekly self-evaluation metrics.

---

Radar operator: [Claude Haiku 4.5](https://claude.ai/code)

