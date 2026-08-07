# Red Team Radar

Persistent state for an autonomous tracker of the offensive-security frontier — tools, releases, techniques, research and advisories curated for a red team operator. A RADAR points to published artifacts and tracks their evolution.

![trends](https://img.shields.io/badge/trends-4-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-17-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--07-2f9e44?style=flat-square)

---

## Since last scan (2026-08-07)

- [**8 new CVEs / advisories added**](TRENDS.md#observation_queue): FrontMCP sandbox escape (CVSS 9.3 RCE), VuFind authz bypass (9.8), open62541 auth bypass (9.8), lib60870-C heap overflow (9.8), Craft CMS authenticated RCE chain, PDF.js arbitrary JS execution, PHP_CodeSniffer command injection. All single-vendor at publication; watch for follow-up coverage.
- **Primary blog lane fully operational**: all 10 research blogs (SpecterOps, Project Zero, watchTowr, Assetnote, Outflank, MDSec, Synacktiv, PortSwigger, SensePost, Elastic) reachable and current; no new posts since Aug 6.
- **CertiGhost, WSUS, Entra SyncJacking remain stable**: no new follow-up research observed today. Nuxt 6-CVE cluster (Aug 5-6) awaiting 2nd independent security-firm corroboration.
- **No new tool releases** from tracked repos (BloodHound, NetExec, Certipy, impacket all pre-2025).
- **No new offensive tools** discovered Aug 6-7 via GitHub/package-registry searches.

---

## Active trends

**emerging 2 · seed 2**

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | emerging | [Aug 6 — FieldEffect DC cert analysis](https://fieldeffect.com/) |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | seed | [Aug 5 — SpecterOps NotWSUSpicious tool release](https://specterops.io/blog/2026/08/05/weaponizing-windows-updates-with-notwsuspicious/) |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | seed | [Aug 6 — Semperis re-confirmation + mitigation](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Worth studying

- [**CRLF-Powered Desync Attacks: Beheading HTTP Streams**](https://portswigger.net/research/crlf-powered-desync-attacks) (PortSwigger Research, Aug 5) — HTTP/2 CRLF injection desynchronization for request smuggling and cache poisoning. Fresh protocol-edge research. Web/API axis.
- [**ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (SpecterOps, Aug 3) — Python SCCM/Microsoft Configuration Manager attack tool, 30+ techniques, 9 domain-takeover paths, Linux support. SCCM remains under-tracked lateral-movement/priv-esc surface.
- [**Process Parameter Poisoning "P3"**](https://sensepost.com/blog/2026/process-parameter-poisoning/) (SensePost, Jul 6) — Novel process-startup field injection (command line, env block) with `CreateProcessW` thread-context manipulation, bypasses 4 major EDRs. C2/evasion axis. Fresh injection primitive.
- [**CVE-2026-52855 (Pterodactyl Wings)**](https://github.com/advisories/GHSA-pfvc-3p5h-x7h6) — Template rendering on daemon config, full node compromise via config exfiltration. Widely-deployed game-server hosting.
- [**CVE-2026-53609 (Apostrophe CMS)**](https://github.com/advisories/GHSA-6h5j-32cf-4253) — Object.prototype pollution → authentication bypass. Web/API axis, common pattern.

[See full study shelf →](TRENDS.md#study_shelf)

---

## Tools & releases

No new releases observed on tracked repos (BloodHound, NetExec, Certipy, impacket, Nuclei, Havoc/Sliver/Mythic). Last releases:
- **Nuclei v3.11.0** (Jul 6, 2026) — Unsigned JavaScript-protocol templates now refuse to load (breaking change).
- **Impacket 0.13.1** (May 19, 2025)

---

## Watchlist & queue

[17 below-bar items in observation_queue](TRENDS.md#observation_queue) — awaiting 2nd independent source or concrete evidence. Highlights:
- **Nuxt 6-CVE cluster** (Aug 5-6: RCE, auth bypass, DoS, cache disclosure) — single vendor, awaiting security-firm corroboration.
- **rclone 4-CVE batch** (Aug 5-6: command execution, auth bypass, path validation, symlink arbitrary write) — single vendor.
- **CHAINDROP npm supply chain** (400+ packages compromised, 1.3B downloads) — Elastic report only, watching for independent tracking.
- **EDR evasion tools** (mkPIVM, Phantom-Evasion-Loader, entropia, OpenBOF) — active development, single-source reports.

---

## Resources

- **Ledger**: [TRENDS.md](TRENDS.md) — single source of truth (trends, evidence, observation_queue, study_shelf)
- **Sources**: [SOURCES.md](SOURCES.md) — registry of primary feeds and discovery topics
- **Recent**: [Today's report](reports/2026-08-07.md) | [Daily reports](reports/) | [Weekly reports](reports/weekly/)
- **Logs**: [Source rotation](logs/source_rotation.md) | [Calibration](logs/calibration.md)

---

*Red Team Radar tracks and points to published offensive-security artifacts. It is a tracker, not a runbook — links only, no operational payloads.*
