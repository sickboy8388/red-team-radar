# Red Team Radar

Persistent, curated tracking of the offensive-security frontier — tools, releases, techniques, research, and advisories — for red team operators.

![trends](https://img.shields.io/badge/trends-15-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-25-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--09--30-2f9e44?style=flat-square)

---

## Since last scan (2026-09-30)

- **9 new seed trends seeded.** Backlog verification from 2026-09-29 recovery completed: Citrix NetScaler (8+ vendors, 50K+ exposed), SharePoint JWT+RCE (8+), Ivanti EPMM (7+), Container escape (5+), Kerberos relay DNS (4+), Check Point VPN (7), Process Parameter Poisoning (6+), MLflow SSRF (10+), Windows IKE RCE (10+).
- **Minimal new blog activity.** watchTowr (Sep 29: Citrix NetScaler DTLS Part 2), Elastic (Sep 29: Linux endpoint config); 11 other primary blogs dormant Sep 29–30.
- **Tool releases tracked.** BloodHound v9.7.1 (Sep 17), Sliver v1.7.7 (Sep 3) identified post-Aug 18 checkpoint.
- **Existing trends stable.** CertiGhost remains dormant; WSUS, Entra SyncJacking, SonicWall, Oracle, Nightmare Eclipse quiet (no new evidence this run).
- **GitHub API blocker persists.** Session-scoped 403 on GHSA/cross-repo search (4+ runs). Workaround effective (NVD + primary-blog + agent research).

---

## Trends

**Status tally:** seed 13 · emerging 1 · dormant 1

| Trend | Stage | Latest signal |
|-------|-------|---|
| [Citrix NetScaler ADC/Gateway pre-auth RCE (CVE-2026-88771/88772)](TRENDS.md#id-initial-access-citrix-netscaler-001) | seed | [2026-09-29](https://labs.watchtowr.com/here-we-go-again-citrix-netscaler-dtls-preauth-memory-overflow-cve-2026-88772/) — watchTowr: DTLS memory overflow, 50K+ exposed, active since Sep 5 |
| [Microsoft SharePoint JWT auth bypass + RCE (CVE-2026-55040/63520)](TRENDS.md#id-initial-access-sharepoint-auth-rce-001) | seed | [2026-09-29](https://www.rapid7.com/blog/post/ve-cve-2026-55040-microsoft-sharepoint-jwt-token-authentication-bypass-fixed/) — Rapid7: JWT bypass + BCS RCE chain |
| [Ivanti EPMM pre-auth RCE (CVE-2026-1281/1340)](TRENDS.md#id-initial-access-ivanti-epmm-001) | seed | [2026-09-29](https://labs.watchtowr.com/someone-knows-bash-far-too-well-and-we-love-it-ivanti-epmm-pre-auth-rces-cve-2026-1281-cve-2026-1340/) — watchTowr: Bash arithmetic RCE, 4400+ exposed, exploitation since Jul 2025 |
| [Linux Container Escape (CVE-2026-31431 "Copy Fail")](TRENDS.md#id-c2-container-escape-001) | seed | [2026-09-29](https://kudelskisecurity.com/research/linux-cve-2026-31431-copy-fail-lpe-enables-stealthy-root-access-container-escape/) — Kudelski: kernel arbitrary-write primitive, K8s lateral movement |
| [Kerberos relay via DNS CNAME (CVE-2026-20929)](TRENDS.md#id-identity-kerberos-relay-dns-cname-001) | seed | [2026-09-29](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) — CrowdStrike: DNS coercion → ADCS → DC cert → DCSync |
| [Check Point VPN IKEv1 auth bypass (CVE-2026-50751)](TRENDS.md#id-identity-checkpoint-vpn-001) | seed | [2026-09-29](https://labs.watchtowr.com/marking-your-own-homework-check-point-remote-access-vpn-ikev1-authentication-bypass-cve-2026-50751/) — watchTowr: cert validation logic flaw, passwordless access |
| [Process Parameter Poisoning (P3) EDR evasion](TRENDS.md#id-evasion-process-parameter-poisoning-001) | seed | [2026-09-29](https://sensepost.com/blog/2026/process-parameter-poisoning/) — SensePost: novel process-creation injection, 4-EDR evasion |
| [MLflow webhook SSRF credential theft (CVE-2026-64849)](TRENDS.md#id-exploitable-mlflow-ssrf-001) | seed | [2026-09-29](https://thehackernews.com/2026/08/attackers-exploit-mlflow-ssrf-flaw-to.html) — The Hacker News: DNS rebinding SSRF, CISA KEV deadline Sep 30 |
| [Windows IKEv2 double-free RCE (CVE-2026-33824)](TRENDS.md#id-exploitable-windows-ike-rce-001) | seed | [2026-09-29](https://thezdi.com/blog/2026/4/22/cve-2026-33824-remote-code-execution-in-windows-ikev2) — ZDI: network RCE UDP 500/4500, Apr 2026 Patch Tuesday |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001) | seed | [2026-08-05](https://specterops.io/blog/2026/08/05/weaponizing-windows-updates-with-notwsuspicious/) — SpecterOps: WSUS exploitation chain, NotWSUSpicious tool |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis: hard-matching abuse → Global Admin |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001) | seed | [2026-08-17](https://www.rapid7.com/blog/post/etr-rapid7-mdr-team-discovers-new-sonicwall-sma1000-zero-days-being-actively-exploited-cve-2026-15409-cve-2026-15410/) — Rapid7 MDR: active exploitation, CVSS 10.0 |
| [Oracle PeopleSoft RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001) | seed | [2026-08-17](https://www.rapid7.com/blog/post/etr-active-exploitation-of-oracle-peoplesoft-zero-day-cve-2026-35273/) — Rapid7 ETR: UNC6240 attribution, higher-ed targeting |
| [Nightmare Eclipse Windows zero-day research](TRENDS.md#id-evasion-nightmare-eclipse-001) | emerging | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — ProjectNightcrawler: 9 PoC exploits Defender/BitLocker (Apr–Jul 2026) |
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001) | **dormant** | [2026-08-06](https://kudelskisecurity.com/) — Promoted to dormant (21-day quiet line 2026-08-27 passed) |

---

## Tools & Releases

- **BloodHound** — v9.7.1 (Sep 17, 2026; XSS mitigations + dependency hardening post-rc cycle)
- **Sliver** — v1.7.7 (Sep 3, 2026)
- **impacket** — 0.9.20 (post-Aug 18)
- **NetExec, Certipy, Nuclei** — unchanged since Aug 18 checkpoint
- **Havoc** — archived Feb 2026 (read-only)

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

*Last updated: 2026-09-29*  
*Maintained by: Red Team Radar autonomous operator*

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
- **[Observation queue](TRENDS.md#observation_queue)** — 25 items awaiting promotion or age-based burndown
- **[Strategy notes](TRENDS.md#strategy_notes)** — coverage decisions & calibration history
- **[Reports](reports/)** — daily & weekly recalibrations
- **[Latest daily](reports/2026-09-30.md)** — 2026-09-30 (9 seed trends seeded; backlog verification complete)
- **[Latest weekly](reports/weekly/2026-W33.md)** — 2026-W33
- **[Source registry](SOURCES.md)** — primary feeds & discovery topics
- **[Source rotation log](logs/source_rotation.md)** — session-by-session coverage tracking

---

*Red Team Radar is a tracker of published offensive-security artifacts and situational awareness signals. Pointers only; no operational payloads or step-by-step attack procedures.*
