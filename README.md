# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-16-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-25-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--23-2f9e44?style=flat-square)

---

## Since last scan (2026-11-23)

**Quiet day continuation** — No new trends seeded. Network access improved: primary blogs (SpecterOps, watchTowr, Elastic, PortSwigger) now accessible (HTTP 200; previously persistent 403s in prior weeks). NVD REST API restored (HTTP 200). No new CRITICAL/HIGH advisories from Nov 23 with multi-vendor corroboration. No new tool releases. Observation queue stable at 25-item cap. 8th consecutive quiet-day run (Nov 16-23) with no new trends.

- **Primary blog sweep:** 13/13 sources checked. Network restoration enabled direct blog verification. Most recent posts: SpecterOps (Nov 19: "The FBI ARTEX Advisory and the Paths to Your Critical Systems"), Elastic (Nov 20: OpenShift compliance analysis), watchTowr (Nov 5: Barracuda Email Security Gateway research). No new on-axis posts from Nov 23.

- **CVE advisory watch:** NVD (HTTP 200) and GHSA sampled. No new CRITICAL/HIGH entries from Nov 23 with multi-vendor corroboration. Single-vendor findings from prior runs (Barracuda, Perforce Puppet, Miren Runtime, Atomic Server, Mustache Ruby, Oracle CSPU, Chrome 158, NGINX, Danfoss) remain below trend-bar threshold.

- **Tool releases:** No new releases detected Nov 23. Latest: BloodHound CE v9.10.1 (Nov 19), Sliver v1.7.9 (Oct 25).

- **Queue status:** Observation queue at 25-item cap (stable). Highest-value queued: Barracuda Email Security Gateway (watchTowr Nov 5, 18 days pending secondary sources). No items clearing ≥3-independent-source threshold this run.

- **Network status:** 11/13 primary blogs accessible (HTTP 200). Persistent degradation: MDSec (HTTP 522), Outflank (HTTP 403). NVD + GHSA + tool repos verified accessible. CISA KEV still 403 (low-impact blocker).

---

## Trends

**seed 3 · dormant 13**

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [Microsoft agent-framework PyPI Supply-Chain Attack](#initial-access-agent-framework-001) | seed | [2026-11-17](https://www.wiz.io/blog/malicious-version-of-microsofts-agent-framework-published-to-pypi) |
| [Optimizely Web Experimentation Supply-Chain Attack (OPTIMJACK)](#initial-access-optimizely-001) | seed | [2026-11-16](https://report.uri.report/2026/11/16/optimjack-the-optimizely-web-experimentation-incident) |
| [Java4Shell OpenJDK Base64 RCE (CVE-2026-114938)](#web-java4shell-001) | seed | [2026-11-18](https://blog.qualys.com/vulnerabilities-threat-research/2026/11/17/how-to-find-mitigate-and-patch-the-critical-java4shell-flaw-cve-2026-114938-now) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-09-28](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-01](https://socradar.io/blog/fortimail-zero-day-under-active-exploitation/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-09-27](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | dormant | [2026-10-09](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Packages](#initial-access-apex-accelerator-001) | dormant | [2026-10-14](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | dormant | [2026-10-21](https://www.elastic.co/security-labs/threat-command/php2shell-assessing-elastic-detection-coverage) |

---

## Tools & releases

Latest stable / pre-release versions (checked 2026-11-23):

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
- **[Latest daily report (2026-11-23)](reports/2026-11-23.md)** · [Latest weekly (2026-W47)](reports/weekly/2026-W47.md)
- **[Source registry (SOURCES.md)](SOURCES.md)** — Primary feeds, discovery topics, community pulse.
- **[Source rotation log (logs/source_rotation.md)](logs/source_rotation.md)** — Append-only daily coverage notes (network status, lanes opened/degraded).
- **[Calibration log (logs/calibration.md)](logs/calibration.md)** — Weekly self-evaluation metrics.

---

Radar operator: [Claude Haiku 4.5](https://claude.ai/code)

