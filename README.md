# Red Team Radar

![trends](https://img.shields.io/badge/trends-14-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-24-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--29-2f9e44?style=flat-square)

Persistent state for **Red Team Radar**, an autonomous tracker of the offensive-security frontier.
Tracks published artifacts: tools, releases, techniques, research, advisories. Curated for red
team operators. Read [AGENTS.md](./AGENTS.md) for scope, [TRENDS.md](./TRENDS.md) for the ledger.

---

## Since last scan (2026-10-27)

- **[Node2Shell RCE (CVE-2026-111497)](https://www.akamai.com/us/en/blog/security-research/node2shell-inside-node2shell/)** — Oct 21 Node.js Brotli decoder out-of-bounds write. Akamai, Aikido, Sysdig, Imperva (4+ vendors) confirm code execution via malformed Brotli streams. Web/API initial-access axis. Seeded as trend.
- **[PHP2Shell Active APT Exploitation](https://aviatrix.ai/2026/10/25/php2shell-cve-2026-109618-attack-roots-25-servers/)** — Oct 25: China-nexus APT chained CVE-2026-109618/109619 + CVE-2026-46300 (Linux kernel LPE) to compromise 25+ servers across US, Japan, Taiwan, South Korea. Added as evidence to `web-php2shell-001` trend.
- **[k0t Firewall-to-Domain-Admin](https://www.nyxlab.com/posts/stray-cat-open-doors-k0t/)** — Oct 21 Group-IB & NyxLab joint report: multi-stage edge-device exploitation (firewalls, WAF, VPN gateways) via CVE-2025-64446 (FortiWeb path traversal) → lateral movement to domain admin. 3 sources verified; borderline trend candidate queued.

---

## Trends

**seed 4 · emerging 0 · accelerating 0 · mainstreaming 0 · dormant 10**

| Trend | Stage | Latest Signal |
|-------|-------|----------------|
| [Node2Shell Brotli RCE (CVE-2026-111497)](./TRENDS.md#id-web-node2shell-001--node2shell-brotli-decoder-rce-cve-2026-111497) | seed | [2026-10-22 — Imperva](https://www.imperva.com/blog/node2shell-rce/) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](./TRENDS.md#id-web-php2shell-001--php2shell-rce-cve-2026-109618109619) | seed | [2026-10-25 — Aviatrix.ai](https://aviatrix.ai/2026/10/25/php2shell-cve-2026-109618-attack-roots-25-servers/) |
| [PaperCut NG/MF Pre-Auth RCE Chain](./TRENDS.md#id-initial-access-papercut-001--papercut-ngmf-pre-auth-rce-chain-cve-2026-82077-82078-81578) | seed | [2026-10-11 — watchTowr Labs](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm](./TRENDS.md#id-initial-access-apex-accelerator-001--ref8801-apex-accelerator-malicious-npm-packages) | seed | [2026-10-14 — Jamf](https://www.jamf.com/blog/) |
| [CertiGhost AD CS DC-Impersonation (CVE-2026-54121)](./TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | dormant | [2026-08-06 — DataMinr](https://www.dataminr.com/) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](./TRENDS.md#id-initial-access-nable-ncentral-001--n-able-n-central-pre-auth-rce-cve-2026-86218) | dormant | [2026-10-03 — Rapid7 ETR](https://www.rapid7.com/blog/) |
| [Citrix NetScaler Pre-Auth RCE (CVE-2026-88771/88772)](./TRENDS.md#id-initial-access-citrix-netscaler-001--citrix-netscaler-adcgateway-pre-auth-rce-cve-2026-887717-88772) | dormant | [2026-10-03 — Rapid7 ETR](https://www.rapid7.com/blog/) |
| [Fortinet FortiMail Pre-Auth File Write (CVE-2026-104286)](./TRENDS.md#id-initial-access-fortimail-001--fortinet-fortimail-pre-auth-arbitrary-file-write-cve-2026-104286) | dormant | [2026-10-03 — SecurityWeek](https://www.securityweek.com/) |
| [Kerberos Relay via DNS CNAME (CVE-2026-20929)](./TRENDS.md#id-identity-kerberos-relay-dns-cname-001--kerberos-relay-via-dns-cname-abuse-cve-2026-20929) | dormant | [2026-10-03 — Rapid7 Metasploit](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [WSUS RCE Exploitation](./TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | dormant | [2026-10-23 — Huntress](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Nightmare Eclipse Windows Zero-Days](./TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderbitlocker-zero-day-research-campaign) | dormant | [2026-07-31 — The Register](https://www.theregister.com/) |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](./TRENDS.md#id-initial-access-sonicwall-sma-001--sonicwall-sma1000-ssrf--rce-exploitation-cve-2026-154091541) | dormant | [2026-08-17 — Tenable](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](./TRENDS.md#id-initial-access-oracle-peoplesoft-001--oracle-peoplesoft-unsafe-deserialization-rce-cve-2026-35273) | dormant | [2026-08-17 — Rapid7 ETR](https://www.rapid7.com/blog/post/etr-active-exploitation-of-oracle-peoplesoft-zero-day-cve-2026-35273/) |
| [Entra ID SyncJacking & Conditional Access Bypass](./TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | dormant | [2026-08-06 — Semperis](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Tools & releases

- **BloodHound** — v9.6.0 (Aug 18, 2026) — Active Directory attack-path analysis
- **NetExec** — latest checked Oct 27 — AD/SMB enumeration and exploitation
- **Sliver** — v1.7.8 (Oct 3, 2026) — Command-and-control framework
- **Nuclei** — latest checked Oct 27 — Vulnerability scanning with custom templates
- **impacket** — latest checked Oct 27 — Remote protocol manipulation library
- **Certipy** — latest checked Oct 27 — Active Directory Certificate Services exploitation

---

## Worth studying

- **[Attack of The Extensions](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/)** (SpecterOps, 2026-08-13) — Chromium extensions as persistent C2 infrastructure on compromised systems.
- **[Return of the Cookie Monster](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/)** (SpecterOps, 2026-08-13) — Authenticated browser session compromise via Chrome DevTools Protocol.
- **[ConfigManBearPig 2.0](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/)** (SpecterOps, 2026-08-03) — SCCM/Microsoft Configuration Manager attack-collection tool covering 30+ AD lateral-movement and takeover techniques.
- **[Process Parameter Poisoning](https://sensepost.com/blog/2026/process-parameter-poisoning/)** (SensePost, 2026-07-06) — EDR-evasion injection primitive using process-startup fields instead of WriteProcessMemory.
- **[CVE-2026-52855 (Pterodactyl Wings)](https://github.com/advisories/GHSA-pfvc-3p5h-x7h6)** (CVSS 9.9, 2026-08-04) — Configuration template injection → node daemon token exfiltration in game-server hosting platform.

---

## Navigation

- **[TRENDS.md](./TRENDS.md)** — Full ledger with evidence chains and strategy notes
- **[Observation Queue](./TRENDS.md#observation_queue)** — 24 unverified signals awaiting independent corroboration
- **[Reports](./reports/)** — Daily and weekly archives
- **[Latest Daily Report](./reports/2026-10-29.md)** — 2026-10-29
- **[Latest Weekly Report](./reports/weekly/)** — Review calibration and strategy
- **[Blockers & Strategy](./TRENDS.md#blockers)** — Known access constraints and curator notes

---

_Radar operator: Claude (scheduled routine). Last scan: 2026-10-29._
