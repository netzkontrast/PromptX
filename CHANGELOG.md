# Änderungsprotokoll

Alle bemerkenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert. Siehe [standard-version](https://github.com/conventional-changelog/standard-version) für Commit-Richtlinien.

## [0.1.0](https://github.com/Deepractice/PromptX/compare/v0.0.4-e4...v0.1.0) (2025-07-09)


### 📝 Dokumentation

* Fügt einen Abschnitt mit Community-Tutorials und -Fallstudien hinzu, der praktische Erfahrungen mit der Entwicklung von MCP-Tools auf Basis der PromptX-Architektur enthält ([833b2b6](https://github.com/Deepractice/PromptX/commit/833b2b6f88d1c8327a91d4debca7d95db0050ced))


### ♻️ Code-Refactoring

* Ändert hello in welcome ([90c4e5d](https://github.com/Deepractice/PromptX/commit/90c4e5d8ab350a8959c6c7475f34c5bf0afa75f0))
* Architektur aufräumen und Code standardisieren ([0b02f33](https://github.com/Deepractice/PromptX/commit/0b02f33ae660a24a90fd276d7a44fb5f8e46758e))
* Vereinheitlicht die Struktur der Ressourcendateien - verschiebt package.registry.json in das Ressourcenverzeichnis ([5f9fa4c](https://github.com/Deepractice/PromptX/commit/5f9fa4c92c95d49a6fe229cacb6abe0f9ead8c2e))
* Vereinheitlicht die Verzeichnisstruktur von Domain zu Rolle und bereinigt hartcodierte Pfade ([071138e](https://github.com/Deepractice/PromptX/commit/071138ef57d639da5270225325958ff788fcac71))
* Schließt das Refactoring der PromptX-Ressourcenarchitektur und die Integration des Tool-Systems ab ([08d4c1d](https://github.com/Deepractice/PromptX/commit/08d4c1d194b1fce8df28b6015ba12268ad230895))
* Entfernt systematisch die DACP-Architektur - vereinfacht das Framework und konzentriert sich auf das [@tool](https://github.com/tool)-Protokoll ([b18983b](https://github.com/Deepractice/PromptX/commit/b18983bdace5aa5e0ef56e40200c506de8032401))
* Optimiert die DACP-Tool-Eingabeaufforderungen und entfernt irreführende Beschreibungen ([320fe9e](https://github.com/Deepractice/PromptX/commit/320fe9e55268a291764cd4cf9812298f0437e942))
* Konsolidiert MCP-Befehle im mcp-Verzeichnis - optimiert die Projektstruktur ([8452eb4](https://github.com/Deepractice/PromptX/commit/8452eb4ec5b244d76684c97e725a436ee05a59a5))
* Refactort /prompt/ zu /resource/ - um der Semantik des Ressourcenreferenzprotokolls besser zu entsprechen ([54b77e7](https://github.com/Deepractice/PromptX/commit/54b77e709698aef79281197503ceae57a2e9220c))
* Refactort den Community-Bereich und die Präsentation von Fallstudien ([4f84120](https://github.com/Deepractice/PromptX/commit/4f84120861db7fcaa5c005f6649e9513d637219c))
* Refactort MCPOutputAdapter in das mcp-Verzeichnis - optimiert die Organisation der Codestruktur ([7964cf8](https://github.com/Deepractice/PromptX/commit/7964cf8dba7addf937303f852af23ceeb61e0924))
* Refactort PromptXToolCommand zu ToolCommand und verschiebt es in das Standardverzeichnis ([e54550a](https://github.com/Deepractice/PromptX/commit/e54550a835806ab89dc2ad74238a338cc08f0fe1))
* Refactort resource/domain zu resource/role - verbessert die semantische Verzeichnisstruktur ([559c146](https://github.com/Deepractice/PromptX/commit/559c146af1d9ff979dd557a9237a3c0f0ffd7a39))


### 🐛 Fehlerbehebungen

* Aktualisiert pnpm-lock.yaml, um mit den DACP-Abhängigkeiten übereinzustimmen und den --frozen-lockfile-Fehler in der CI zu beheben ([6e4747e](https://github.com/Deepractice/PromptX/commit/6e4747e54d9b5a00496eee1fb241a32a17ea079a))
* Stellt die vollständige Logik von ProjectDiscovery wieder her, um das Problem der fehlerhaften Rollenentdeckung zu beheben ([0eedaa5](https://github.com/Deepractice/PromptX/commit/0eedaa517d3f2aaec9b969eee1f00acc7c492ea7)), schließt [#135](https://github.com/Deepractice/PromptX/issues/135)
* Vereinfacht das Views-Abzeichen zu username=PromptX ([ee667ba](https://github.com/Deepractice/PromptX/commit/ee667ba0e372598da79e8857c662f6f329b17ba1))
* Verbessert die Entwicklungserfahrung für Luban-Tools - Upgrade der Fünf-Komponenten-Architektur und intelligente Fehlerbehandlung ([#116](https://github.com/Deepractice/PromptX/issues/116)) ([d1d38e0](https://github.com/Deepractice/PromptX/commit/d1d38e046b1013ad189d6aada897180e027a5070)), schließt [#107](https://github.com/Deepractice/PromptX/issues/107)
* Bereinigt umfassend die Referenzen auf das Schlüsselwort "prompt" - schließt das Refactoring von prompt→resource ab ([5779aa8](https://github.com/Deepractice/PromptX/commit/5779aa837cc62625d4fdb495892671be251d9ce3))
* Vereinheitlicht den Mechanismus zum Abrufen des Pouch-Befehlspfads und behebt das Problem der Speicherpersistenz in Issue [#69](https://github.com/Deepractice/PromptX/issues/69) ([3762442](https://github.com/Deepractice/PromptX/commit/376244205a47d65a94dc7c63ed1ab3aa478716fb))
* Systematische Optimierung der Rollenausgabeanzeige, um das Problem der Rollennamenverwechslung zu beheben ([5181bfe](https://github.com/Deepractice/PromptX/commit/5181bfeff12ff5170ca921e010a3697950912b2c))
* Behebt, dass mehrere Befehle ein veraltetes Schema zur Pfadlokalisierung von Projekten verwenden ([aed3d0f](https://github.com/Deepractice/PromptX/commit/aed3d0f1d67d1bac74795e27a6e69f688e114854))
* Behebt Fehler in `recall` und `learn` ([11d8c9a](https://github.com/Deepractice/PromptX/commit/11d8c9a75e5e91e4784dbebf8bae4af234f51a80))
* Behebt das Problem bei der Zusammenführung der Problembehandlung bei der Speicherung ([1cc01bf](https://github.com/Deepractice/PromptX/commit/1cc01bf1ef8acb3f3d3bf19e599da9dbefe034a8))
* Behebt Konfigurationsfehler im Alpha-Release-Workflow-Zweig ([8f592cb](https://github.com/Deepractice/PromptX/commit/8f592cb8808b07385e1353b28a294341c5358f2e))
* Behebt Probleme bei der DPML-Formatvalidierung und verbessert den Mechanismus zur Ressourcenentdeckung ([36510b0](https://github.com/Deepractice/PromptX/commit/36510b00686c75da79bae99b6e0319d823bbf1b3))
* Behebt Probleme bei der Pfadauflösung von InitCommand und optimiert die Generierung von MCP-IDs ([6167bfb](https://github.com/Deepractice/PromptX/commit/6167bfbf922737eb64fea0c61c8b45854fc0609a)), schließt [#49](https://github.com/Deepractice/PromptX/issues/49)
* Behebt Probleme bei der Projektpfaderkennung von InitCommand und optimiert den Mechanismus zur Rollenentdeckung ([ffb5b4a](https://github.com/Deepractice/PromptX/commit/ffb5b4adafed3a54be3101fb41f785be9bb221f7))
* Behebt Probleme beim Laden von ToolSandbox-Abhängigkeiten ([07e3093](https://github.com/Deepractice/PromptX/commit/07e30935fdb965cf9245c6f28452bcb71089cd90))
* Korrigiert Architekturdesignprobleme bei der IDE-Typerkennung ([817de6d](https://github.com/Deepractice/PromptX/commit/817de6d44322423424b286858bb58dd25f9834a3))
* Korrigiert die Parameter des Views-Abzeichens und fügt die Angabe des Repos als PromptX hinzu ([2b246de](https://github.com/Deepractice/PromptX/commit/2b246deed7366fac80cc8e9523ca46d51cfcb8c4))
* Optimiert den Mechanismus zur Wissensgenerierung der Nuwa-Rolle und behebt das Problem der Token-Explosion ([248358e](https://github.com/Deepractice/PromptX/commit/248358e2dc4b9b559db529f18a208c524fe39af4)), schließt [#108](https://github.com/Deepractice/PromptX/issues/108)


### ✨ Funktionen

* Verbessert die Eingabeaufforderung für das `remember`-Tool - intelligente Speicherbeurteilung basierend auf semantischem Verständnis ([a1a5cb3](https://github.com/Deepractice/PromptX/commit/a1a5cb3980fea41fd828498bb86be247ed3ab2c3))
* Aktualisiert die Dokumentation der Nuwa- und Sean-Rollen, verbessert die Beschreibung der Rollenidentität, der Kernmerkmale und des Entscheidungsrahmens, optimiert die Inhaltsstruktur und verbessert das Verständnis und die Benutzererfahrung. Aktualisiert gleichzeitig das Wissenssystem der Produktphilosophie und verdeutlicht die Anwendung der Prinzipien des Widerspruchsantriebs und der Einfachheit. ([5e6dc85](https://github.com/Deepractice/PromptX/commit/5e6dc85f3e3acb67ef3075725fd298d36f37582b))
* Aktualisiert die Vorlage zur Erstellung der Nuwa-Rolle - entfernt die Speicherreferenz, um sie an die neue Architektur anzupassen ([8430774](https://github.com/Deepractice/PromptX/commit/8430774e9a40e4b96704d1d575e3706f637a2b7f)), schließt [#137](https://github.com/Deepractice/PromptX/issues/137)
* Aktualisiert den DACP-Demodienst, benennt den Dienst und die Beschreibung um, vereinfacht die Funktionalität, entfernt unnötige Kalender- und Dokumentationsoperationen und verbessert den Demonstrationseffekt. Optimiert gleichzeitig die API-Schnittstelle und die README-Dokumentation, um sicherzustellen, dass Benutzer sie leichter verstehen und verwenden können. ([c8f6545](https://github.com/Deepractice/PromptX/commit/c8f6545dd5e754478cfb139c72e44c88bb8596af))
* Integriert Conventional Commits und ein automatisches Versionsverwaltungssystem ([#141](https://github.com/Deepractice/PromptX/issues/141)) ([33cb636](https://github.com/Deepractice/PromptX/commit/33cb6369e18e07ee29548082d424a5848cceb22a))
* Behebt das Problem mit dem Cache-Mechanismus der Tool-Sandbox und fügt Unterstützung für den Parameter `forceReinstall` hinzu ([#114](https://github.com/Deepractice/PromptX/issues/114)) ([e414dc0](https://github.com/Deepractice/PromptX/commit/e414dc0d18f6ed94459c542e306a32bb07187874)), schließt [#107](https://github.com/Deepractice/PromptX/issues/107)
* Entwickelt Excel- und PDF-Lesetools für die Luban-Rolle ([d1bd0b5](https://github.com/Deepractice/PromptX/commit/d1bd0b59074e7fc1dd38e8f3bed6d24e84bb05e8))
* Optimiert umfassend das Wertesystem der Community und die README-Struktur ([eaf4efe](https://github.com/Deepractice/PromptX/commit/eaf4efe8419e408ed2b33d429e72ef4a031661e4))
* Implementiert die volle Funktionalität des [@tool](https://github.com/tool)-Protokolls - JavaScript-Tool-Ausführungs-Framework ([40e0c01](https://github.com/Deepractice/PromptX/commit/40e0c01c5973ac2529aee299b8b2a2f95d38ad7c))
* Implementiert eine flexible Architektur zur Ressourcenentdeckung auf Dateibasis ([67f54f8](https://github.com/Deepractice/PromptX/commit/67f54f83d12c3fdfc16d1bd511497e4a6a88d8b6))
* Implementiert eine leichtgewichtige Rollenaktivierung - entfernt die Referenz auf das Gedächtnisdenken in der Rolle ([e89f6c1](https://github.com/Deepractice/PromptX/commit/e89f6c15137bb2beed2568519c2c2e70e7eee58a)), schließt [#137](https://github.com/Deepractice/PromptX/issues/137) [#137](https://github.com/Deepractice/PromptX/issues/137)
* Implementiert die erste Phase der Multi-Projekt-Architektur von ProjectManager ([13c0f2c](https://github.com/Deepractice/PromptX/commit/13c0f2c52048844e3663855bac92b29985d64021)), schließt [#54](https://github.com/Deepractice/PromptX/issues/54)
* Implementiert die globale Dienstumgebungsverwaltung ServerEnvironment ([949c6dc](https://github.com/Deepractice/PromptX/commit/949c6dc813b7e2745b054503f5042f4e915e8cca))
* Fügt ein Installationserfolgs-Diagramm hinzu ([dca2ff3](https://github.com/Deepractice/PromptX/commit/dca2ff31de17e9d2898b203ed1dbce90a8e5766e))
* Fügt ein vollständiges Designdokument für das KI-Agenten-Gedächtnissystem hinzu ([23ffd4b](https://github.com/Deepractice/PromptX/commit/23ffd4bb04eca0e1a5a1388bf7dc809e59e737af))
* Fügt DACP-Dienststartskript und Testbefehl hinzu, aktualisiert zugehörige Abhängigkeiten und optimiert die Verarbeitung von Konfigurationsdateipfaden ([d16d425](https://github.com/Deepractice/PromptX/commit/d16d425fa04840e6bd9d16480f3cb57f9e5b0f3a))
* Fügt die DACP-E-Mail-Versandfunktion hinzu, unterstützt den realen Versand und den Demo-Modus, verbessert die Konfigurationsverwaltung und die Fehlermeldungen für den E-Mail-Versand und optimiert die Benutzererfahrung. ([50cade3](https://github.com/Deepractice/PromptX/commit/50cade3feb8112cc547e635f5ef9ab6b3f04cba2))
* Fügt ein Repository-Views-Abzeichen hinzu, um die Seitenaufrufe zu zählen ([6087db5](https://github.com/Deepractice/PromptX/commit/6087db5d2038158c2152b333b3460321ec988b1f))
* Schließt den chaotischen Plan für die Multi-Projekt-Architektur ab - ein revolutionäres Refactoring ([c11d76e](https://github.com/Deepractice/PromptX/commit/c11d76e60c98d194961495b87e0a70de37cb96f2)), schließt [#54](https://github.com/Deepractice/PromptX/issues/54)
* Verbessert die Optimierung der Architektur des Gedächtnis-Tools - vereinheitlicht die Parameterstruktur und die Konvertierungslogik ([ed6e30a](https://github.com/Deepractice/PromptX/commit/ed6e30a6c7287191ef136f8d72d89a5b411d2a8e))
* Optimiert die Projektmanagement-Architektur und verbessert das MCP-Protokoll ([1252ed1](https://github.com/Deepractice/PromptX/commit/1252ed15bade1e7cb3e3f1c0dbf754075cb1cf67))
* Optimiert die Luban-Rolle und verbessert das ToolSandbox-Tool-Entwicklungssystem ([eea46a8](https://github.com/Deepractice/PromptX/commit/eea46a8ee16bd56109c8d5054e69a055d743c588))
* Optimiert die Projekt-Datenverzeichnisstruktur im HTTP-Modus und benennt .promptx in data um ([#134](https://github.com/Deepractice/PromptX/issues/134)) ([d2cdc06](https://github.com/Deepractice/PromptX/commit/d2cdc060c00ed664b9ca79fb7a1ad12efefbb3e0)), schließt [#133](https://github.com/Deepractice/PromptX/issues/133)
* Optimiert das Design der IDE-Typparameter - für eine flexiblere Benutzererfahrung ([ca45a37](https://github.com/Deepractice/PromptX/commit/ca45a373d3545e2b12be79e824295178bb0a4d6a))
* Optimiert die Eingabeaufforderungen der Tools `remember` und `recall` und unterstützt das Architektur-Upgrade von Issue [#137](https://github.com/Deepractice/PromptX/issues/137) ([#139](https://github.com/Deepractice/PromptX/issues/139)) ([657556e](https://github.com/Deepractice/PromptX/commit/657556ec88973a28f2ab495cf7e014e0a979b61c))
* Fügt in MCPServerCommand und MCPStreamableHttpCommand ein 'promptx_dacp'-Parameter-Mapping hinzu und optimiert gleichzeitig die Parameterverarbeitungslogik in DACPCommand, um die korrekte Analyse von Array-Parametern zu unterstützen. ([741c1f8](https://github.com/Deepractice/PromptX/commit/741c1f8f5497be57e6d9f32ecd1a476dda3dcacf))
* Intelligentes Fehlerbehebungssystem - Agentenfreundliche Fehlerbehandlung in der ToolSandbox ([20a0259](https://github.com/Deepractice/PromptX/commit/20a02592c1122ee84ab3643f6e2163c55148d3c3))
* Neupositioniert das Produktwertversprechen und stärkt das Konzept des AI Context Engineering ([4aed668](https://github.com/Deepractice/PromptX/commit/4aed668a98a81b95f4c42c71ca5f4dd04620d83d))
* Optimiert die Konnektivität des HTTP-MCP-Servers und die OAuth-Unterstützung ([dcc2dd9](https://github.com/Deepractice/PromptX/commit/dcc2dd9c2e467da4fe012197aebcfa231d776e3c))
* Benennt die `noface`-Rolle um und optimiert die Pfadkonvertierung des `file://`-Protokolls ([d645598](https://github.com/Deepractice/PromptX/commit/d6455987aba3476da0e2f60b4f7180b35b800f10))
