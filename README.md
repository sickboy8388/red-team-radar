# Red Team Radar

Persistent state for **Red Team Radar**, an autonomous tracker of the offensive-security frontier — tools, releases, techniques, research and advisories — curated for a red team operator. It is a RADAR (situational awareness): it tracks and points to *published* artifacts, never reproduces tradecraft or operational payloads.

![trends](https://img.shields.io/badge/trends-12-3266ad?style=flat-square)
![seed](https://img.shields.io/badge/seed-4-6c757d?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-21-orange?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--28-2f9e44?style=flat-square)

## Since last scan (2026-11-27)

- **Drupal Core Installer RCE** (CVE-2026-132165) — Multi-vendor research published Nov 19 (The Hacker News, BleepingComputer, TechZine). Pre-auth site takeover via exposed `/core/install.php`. Patch released Nov 18; widely-deployed CMS. [→ trend](TRENDS.md#id-web-drupal-core-installer-rce-001)
- **SpecterOps** (Nov 25) — GitHub attack-paths analysis via BloodHound: cross-platform chaining (AD → Entra → GitHub → supply-chain). Defensive/educational focus, attack-surface reference for identity-axis operators. [→ post](https://specterops.io/blog/2026/11/25/beyond-branch-protection-understanding-github-attack-paths)
- **CISA KEV updates** (Nov 24–27) — Drupal, GeoServer, Mitel MiCollab, Canonical Pylxd, Idunno AntiCsrf entries added. Mostly single-vendor at this hour; awaiting secondary corroboration. [→ queue](TRENDS.md#observation_queue)

## Trends

**Active:** seed 4 · emerging 1 · dormant 7

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [Drupal Core Installer RCE (CVE-2026-132165)](/TRENDS.md#id-web-drupal-core-installer-rce-001) | seed | 2026-11-19 — [BleepingComputer](https://bleepingcomputer.com/news/security/drupal-patches-critical-rce-flaw-warns-exploits-may-surface-quickly/) |
| [Java4Shell OpenJDK Base64 RCE (CVE-2026-114938)](/TRENDS.md#id-web-java4shell-001) | seed | 2026-11-18 — [Qualys](https://blog.qualys.com/vulnerabilities-threat-research/2026/11/17/how-to-find-mitigate-and-patch-the-critical-java4shell-flaw-cve-2026-114938-now) |
| [Optimizely Web Experimentation Supply-Chain Attack (OPTIMJACK)](/TRENDS.md#id-initial-access-optimizely-001) | seed | 2026-11-16 — [BleepingComputer](https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/) |
| [Microsoft agent-framework PyPI Supply-Chain Attack](/TRENDS.md#id-initial-access-agent-framework-001) | seed | 2026-11-17 — [Wiz](https://www.wiz.io/blog/malicious-version-of-microsofts-agent-framework-published-to-pypi) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](/TRENDS.md#id-web-php2shell-001) | emerging | 2026-10-22 — [Palo Alto Unit42](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) |
| [PaperCut NG/MF Pre-Auth RCE (CVE-2026-82077/82078/81578)](/TRENDS.md#id-initial-access-papercut-001) | dormant | 2026-10-11 — [watchTowr Labs](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Packages](/TRENDS.md#id-initial-access-apex-accelerator-001) | dormant | 2026-10-14 — [Jamf](https://www.jamf.com) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](/TRENDS.md#id-initial-access-fortimail-001) | dormant | 2026-10-01 — [SecurityWeek](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](/TRENDS.md#id-initial-access-citrix-netscaler-001) | dormant | 2026-09-29 — [watchTowr Labs](https://labs.watchtowr.com/here-we-go-again-citrix-netscaler-dtls-preauth-memory-overflow-cve-2026-88772/) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](/TRENDS.md#id-initial-access-nable-ncentral-001) | dormant | 2026-10-03 — [Arctic Wolf](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](/TRENDS.md#id-identity-kerberos-relay-dns-cname-001) | dormant | 2026-09-27 — [Rapid7/Metasploit](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [ADCS abuse & escalation](/TRENDS.md#id-ad-adcs-001) | dormant | — |

## Tools & releases

- **BloodHound CE** v9.10.1 (Nov 19) — ADCS ESC11/16 detection, graph exports (PNG/SVG), Prometheus metrics
- **Sliver C2** v1.7.9 (Oct 25) — Command and control framework
- **Nuclei** v3.11.0+ — Vulnerability scanner with JavaScript template signing

## Worth studying

- **[BloodHound v9.10.0-rc (Nov 9)](https://github.com/SpecterOps/BloodHound/releases/tag/v9.10.0-rc1)** — New ADCS attack-surface detection (ESC11, ESC16); AD/identity axis tooling enhancement
- **[adshell-rs (Nov 2)](https://github.com/g0h4n/adshell-rs)** — Interactive AD shell via LDAP(S)/ADWS in Rust; RBCD, DCSync, Shadow Credentials support
- **[Chromium Extension C2 Persistence (SpecterOps, Aug 13)](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/)** — Silently installed extensions as persistent command-and-control
- **[Process Parameter Poisoning (SensePost, Jul 6)](https://sensepost.com/blog/2026/process-parameter-poisoning/)** — EDR evasion via process-startup parameter smuggling
- **[CRLF-Powered Desync Attacks (PortSwigger, Aug 5)](https://portswigger.net/research/crlf-powered-desync-attacks)** — HTTP/2 request smuggling via header injection

## Resources

- **[TRENDS.md](TRENDS.md)** — Single source of truth (trends, evidence, observation queue)
- **[Observation Queue](TRENDS.md#observation_queue)** — Below-trend-bar signals awaiting corroboration
- **[Reports](reports/)** — Daily findings (most recent: [2026-11-28](reports/2026-11-28.md)) and [weekly recalibrations](reports/weekly/)
- **[Latest daily](reports/2026-11-28.md)** — Today's scan and findings
- **[Latest weekly](reports/weekly/2026-W48.md)** — W48 (Nov 23–24): Supply-chain cluster seeded; 5 dormant trends archived

---

**Quiet period:** Day 13 of continuous low-activity window (Nov 16–28). Quiet operational cadence; watch for secondary source escalations. No new multi-vendor trend-bar findings this run. 1 trend seeded on evidence escalation (Drupal RCE, CVE-2026-132165). Supply-chain cluster (agent-framework, Optimizely, Java4Shell) remains hot for secondary research.

For operator context and hard rules, see [AGENTS.md](AGENTS.md). To use this radar: start with **Trends**, drill into [TRENDS.md](TRENDS.md) for evidence, then link primary sources in your red team operations notes.
