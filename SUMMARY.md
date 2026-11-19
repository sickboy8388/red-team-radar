# Red Team Radar — 2026-11-19

- **New trend** · [Microsoft agent-framework PyPI Supply-Chain Attack](TRENDS.md#id-initial-access-agent-framework-001) — Credential stealer on PyPI versions 1.26.1-1.26.2 (Nov 17, 192k/month downloads, targeting Azure/GitHub Actions secrets). 4+ vendor sources.
- **New trend** · [Optimizely OPTIMJACK Web Attack](TRENDS.md#id-initial-access-optimizely-001) — JavaScript injection affecting 178+ orgs (CNN, BBC, Zoom, Ledger, HSBC, Equifax, Salesforce, Nov 16). 5+ vendor sources.
- **New trend** · [Java4Shell OpenJDK RCE](TRENDS.md#id-web-java4shell-001) — Pre-auth RCE (CVE-2026-114938) on identity services and dev infrastructure (Keycloak, PingFederate, Jenkins, Jira, Confluence). 4+ sources.
- **Tool release** · [BloodHound v9.10.0](https://github.com/SpecterOps/BloodHound/releases/tag/v9.10.0) — New stable (Nov 16) with ADCS ESC14, trust path fixes, multi-destination pathfinding, graph export.
- **Queued** · [9 single-vendor CVEs](TRENDS.md#observation_queue) added Nov 18-19 (Perforce Puppet RCE, Miren cert bypass, Atomic Server auth bypass, Mustache Ruby injection, Oracle CSPU, Chrome 158, NGINX AI-discovered bugs, Danfoss fridge zero-days, NoisyTCP Linux crash).
- **Network Status** · 13/13 primary blogs HTTP 200. NVD accessible. GHSA 403 fallback functional. No new blockers (→ [logs/source_rotation.md](logs/source_rotation.md)).
- **Daily Continuity** · Maintained (→ [reports/2026-11-19.md](reports/2026-11-19.md)).
