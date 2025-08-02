# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.1.0](https://github.com/Deepractice/PromptX/compare/v0.0.4-e4...v0.1.0) (2025-07-09)


### 📝 Documentation

* Adds a section with community tutorials and case studies that includes practical experience with the development of MCP tools based on the PromptX architecture ([833b2b6](https://github.com/Deepractice/PromptX/commit/833b2b6f88d1c8327a91d4debca7d95db0050ced))


### ♻️ Code Refactoring

* Changes hello to welcome ([90c4e5d](https://github.com/Deepractice/PromptX/commit/90c4e5d8ab350a8959c6c7475f34c5bf0afa75f0))
* Clean up architecture and standardize code ([0b02f33](https://github.com/Deepractice/PromptX/commit/0b02f33ae660a24a90fd276d7a44fb5f8e46758e))
* Unifies the structure of resource files - moves package.registry.json to the resource directory ([5f9fa4c](https://github.com/Deepractice/PromptX/commit/5f9fa4c92c95d49a6fe229cacb6abe0f9ead8c2e))
* Unifies the directory structure from domain to role and cleans up hard-coded paths ([071138e](https://github.com/Deepractice/PromptX/commit/071138ef57d639da5270225325958ff788fcac71))
* Completes the refactoring of the PromptX resource architecture and the integration of the tool system ([08d4c1d](https://github.com/Deepractice/PromptX/commit/08d4c1d194b1fce8df28b6015ba12268ad230895))
* Systematically removes the DACP architecture - simplifies the framework and focuses on the [@tool](https://github.com/tool) protocol ([b18983b](https://github.com/Deepractice/PromptX/commit/b18983bdace5aa5e0ef56e40200c506de8032401))
* Optimizes DACP tool prompts and removes misleading descriptions ([320fe9e](https://github.com/Deepractice/PromptX/commit/320fe9e55268a291764cd4cf9812298f0437e942))
* Consolidates MCP commands in the mcp directory - optimizes the project structure ([8452eb4](https://github.com/Deepractice/PromptX/commit/8452eb4ec5b244d76684c97e725a436ee05a59a5))
* Refactors /prompt/ to /resource/ - to better match the semantics of the resource reference protocol ([54b77e7](https://github.com/Deepractice/PromptX/commit/54b77e709698aef79281197503ceae57a2e9220c))
* Refactors the community section and the presentation of case studies ([4f84120](https://github.com/Deepractice/PromptX/commit/4f84120861db7fcaa5c005f6649e9513d637219c))
* Refactors MCPOutputAdapter to the mcp directory - optimizes the organization of the code structure ([7964cf8](https://github.com/Deepractice/PromptX/commit/7964cf8dba7addf937303f852af23ceeb61e0924))
* Refactors PromptXToolCommand to ToolCommand and moves it to the standard directory ([e54550a](https://github.com/Deepractice/PromptX/commit/e54550a835806ab89dc2ad74238a338cc08f0fe1))
* Refactors resource/domain to resource/role - improves the semantic directory structure ([559c146](https://github.com/Deepractice/PromptX/commit/559c146af1d9ff979dd557a9237a3c0f0ffd7a39))


### 🐛 Bug Fixes

* Updates pnpm-lock.yaml to match DACP dependencies and fix the --frozen-lockfile error in the CI ([6e4747e](https://github.com/Deepractice/PromptX/commit/6e4747e54d9b5a00496eee1fb241a32a17ea079a))
* Restores the full logic of ProjectDiscovery to fix the issue of incorrect role discovery ([0eedaa5](https://github.com/Deepractice/PromptX/commit/0eedaa517d3f2aaec9b969eee1f00acc7c492ea7)), closes [#135](https://github.com/Deepractice/PromptX/issues/135)
* Simplifies the Views badge to username=PromptX ([ee667ba](https://github.com/Deepractice/PromptX/commit/ee667ba0e372598da79e8857c662f6f329b17ba1))
* Improves the development experience for Luban tools - Upgrade of the five-component architecture and intelligent error handling ([#116](https://github.com/Deepractice/PromptX/issues/116)) ([d1d38e0](https://github.com/Deepractice/PromptX/commit/d1d38e046b1013ad189d6aada897180e027a5070)), closes [#107](https://github.com/Deepractice/PromptX/issues/107)
* Comprehensively cleans up references to the keyword "prompt" - completes the refactoring of prompt→resource ([5779aa8](https://github.com/Deepractice/PromptX/commit/5779aa837cc62625d4fdb495892671be251d9ce3))
* Unifies the mechanism for retrieving the Pouch command path and fixes the problem of memory persistence in Issue [#69](https://github.com/Deepractice/PromptX/issues/69) ([3762442](https://github.com/Deepractice/PromptX/commit/376244205a47d65a94dc7c63ed1ab3aa478716fb))
* Systematic optimization of the role output display to fix the problem of role name confusion ([5181bfe](https://github.com/Deepractice/PromptX/commit/5181bfeff12ff5170ca921e010a3697950912b2c))
* Fixes that several commands use an outdated schema for project path localization ([aed3d0f](https://github.com/Deepractice/PromptX/commit/aed3d0f1d67d1bac74795e27a6e69f688e114854))
* Fixes bugs in `recall` and `learn` ([11d8c9a](https://github.com/Deepractice/PromptX/commit/11d8c9a75e5e91e4784dbebf8bae4af234f51a80))
* Fixes the problem with merging troubleshooting during storage ([1cc01bf](https://github.com/Deepractice/PromptX/commit/1cc01bf1ef8acb3f3d3bf19e599da9dbefe034a8))
* Fixes configuration errors in the alpha release workflow branch ([8f592cb](https://github.com/Deepractice/PromptX/commit/8f592cb8808b07385e1353b28a294341c5358f2e))
* Fixes problems with DPML format validation and improves the mechanism for resource discovery ([36510b0](https://github.com/Deepractice/PromptX/commit/36510b00686c75da79bae99b6e0319d823bbf1b3))
* Fixes problems with path resolution of InitCommand and optimizes the generation of MCP IDs ([6167bfb](https://github.com/Deepractice/PromptX/commit/6167bfbf922737eb64fea0c61c8b45854fc0609a)), closes [#49](https://github.com/Deepractice/PromptX/issues/49)
* Fixes problems with project path detection of InitCommand and optimizes the mechanism for role discovery ([ffb5b4a](https://github.com/Deepractice/PromptX/commit/ffb5b4adafed3a54be3101fb41f785be9bb221f7))
* Fixes problems with loading ToolSandbox dependencies ([07e3093](https://github.com/Deepractice/PromptX/commit/07e30935fdb965cf9245c6f28452bcb71089cd90))
* Corrects architectural design problems in IDE type detection ([817de6d](https://github.com/Deepractice/PromptX/commit/817de6d44322423424b286858bb58dd25f9834a3))
* Corrects the parameters of the Views badge and adds the specification of the repo as PromptX ([2b246de](https://github.com/Deepractice/PromptX/commit/2b246deed7366fac80cc8e9523ca46d51cfcb8c4))
* Optimizes the mechanism for knowledge generation of the Nuwa role and fixes the problem of token explosion ([248358e](https://github.com/Deepractice/PromptX/commit/248358e2dc4b9b559db529f18a208c524fe39af4)), closes [#108](https://github.com/Deepractice/PromptX/issues/108)


### ✨ Features

* Improves the prompt for the `remember` tool - intelligent memory assessment based on semantic understanding ([a1a5cb3](https://github.com/Deepractice/PromptX/commit/a1a5cb3980fea41fd828498bb86be247ed3ab2c3))
* Updates the documentation of the Nuwa and Sean roles, improves the description of the role identity, core features and decision framework, optimizes the content structure and improves understanding and user experience. At the same time, it updates the knowledge system of the product philosophy and clarifies the application of the principles of contradiction drive and simplicity. ([5e6dc85](https://github.com/Deepractice/PromptX/commit/5e6dc85f3e3acb67ef3075725fd298d36f37582b))
* Updates the template for creating the Nuwa role - removes the memory reference to adapt it to the new architecture ([8430774](https://github.com/Deepractice/PromptX/commit/8430774e9a40e4b96704d1d575e3706f637a2b7f)), closes [#137](https://github.com/Deepractice/PromptX/issues/137)
* Updates the DACP demo service, renames the service and description, simplifies functionality, removes unnecessary calendar and documentation operations, and improves the demonstration effect. At the same time, it optimizes the API interface and the README documentation to ensure that users can understand and use them more easily. ([c8f6545](https://github.com/Deepractice/PromptX/commit/c8f6545dd5e754478cfb139c72e44c88bb8596af))
* Integrates Conventional Commits and an automatic version management system ([#141](https://github.com/Deepractice/PromptX/issues/141)) ([33cb636](https://github.com/Deepractice/PromptX/commit/33cb6369e18e07ee29548082d424a5848cceb22a))
* Fixes the problem with the cache mechanism of the tool sandbox and adds support for the `forceReinstall` parameter ([#114](https://github.com/Deepractice/PromptX/issues/114)) ([e414dc0](https://github.com/Deepractice/PromptX/commit/e414dc0d18f6ed94459c542e306a32bb07187874)), closes [#107](https://github.com/Deepractice/PromptX/issues/107)
* Develops Excel and PDF reading tools for the Luban role ([d1bd0b5](https://github.com/Deepractice/PromptX/commit/d1bd0b59074e7fc1dd38e8f3bed6d24e84bb05e8))
* Comprehensively optimizes the value system of the community and the README structure ([eaf4efe](https://github.com/Deepractice/PromptX/commit/eaf4efe8419e408ed2b33d429e72ef4a031661e4))
* Implements the full functionality of the [@tool](https://github.com/tool) protocol - JavaScript tool execution framework ([40e0c01](https://github.com/Deepractice/PromptX/commit/40e0c01c5973ac2529aee299b8b2a2f95d38ad7c))
* Implements a flexible architecture for resource discovery on a file basis ([67f54f8](https://github.com/Deepractice/PromptX/commit/67f54f83d12c3fdfc16d1bd511497e4a6a88d8b6))
* Implements a lightweight role activation - removes the reference to memory thinking in the role ([e89f6c1](https://github.com/Deepractice/PromptX/commit/e89f6c15137bb2beed2568519c2c2e70e7eee58a)), closes [#137](https://github.com/Deepractice/PromptX/issues/137) [#137](https://github.com/Deepractice/PromptX/issues/137)
* Implements the first phase of the multi-project architecture of ProjectManager ([13c0f2c](https://github.com/Deepractice/PromptX/commit/13c0f2c52048844e3663855bac92b29985d64021)), closes [#54](https://github.com/Deepractice/PromptX/issues/54)
* Implements the global service environment management ServerEnvironment ([949c6dc](https://github.com/Deepractice/PromptX/commit/949c6dc813b7e2745b054503f5042f4e915e8cca))
* Adds an installation success diagram ([dca2ff3](https://github.com/Deepractice/PromptX/commit/dca2ff31de17e9d2898b203ed1dbce90a8e5766e))
* Adds a complete design document for the AI agent memory system ([23ffd4b](https://github.com/Deepractice/PromptX/commit/23ffd4bb04eca0e1a5a1388bf7dc809e59e737af))
* Adds DACP service start script and test command, updates related dependencies and optimizes the processing of configuration file paths ([d16d425](https://github.com/Deepractice/PromptX/commit/d16d425fa04840e6bd9d16480f3cb57f9e5b0f3a))
* Adds the DACP email sending function, supports real sending and demo mode, improves the configuration management and error messages for email sending and optimizes the user experience. ([50cade3](https://github.com/Deepractice/PromptX/commit/50cade3feb8112cc547e635f5ef9ab6b3f04cba2))
* Adds a repository views badge to count page views ([6087db5](https://github.com/Deepractice/PromptX/commit/6087db5d2038158c2152b333b3460321ec988b1f))
* Completes the chaotic plan for the multi-project architecture - a revolutionary refactoring ([c11d76e](https://github.com/Deepractice/PromptX/commit/c11d76e60c98d194961495b87e0a70de37cb96f2)), closes [#54](https://github.com/Deepractice/PromptX/issues/54)
* Improves the optimization of the architecture of the memory tool - unifies the parameter structure and the conversion logic ([ed6e30a](https://github.com/Deepractice/PromptX/commit/ed6e30a6c7287191ef136f8d72d89a5b411d2a8e))
* Optimizes the project management architecture and improves the MCP protocol ([1252ed1](https://github.com/Deepractice/PromptX/commit/1252ed15bade1e7cb3e3f1c0dbf754075cb1cf67))
* Optimizes the Luban role and improves the ToolSandbox tool development system ([eea46a8](https://github.com/Deepractice/PromptX/commit/eea46a8ee16bd56109c8d5054e69a055d743c588))
* Optimizes the project data directory structure in HTTP mode and renames .promptx to data ([#134](https://github.com/Deepractice/PromptX/issues/134)) ([d2cdc06](https://github.com/Deepractice/PromptX/commit/d2cdc060c00ed664b9ca79fb7a1ad12efefbb3e0)), closes [#133](https://github.com/Deepractice/PromptX/issues/133)
* Optimizes the design of the IDE type parameters - for a more flexible user experience ([ca45a37](https://github.com/Deepractice/PromptX/commit/ca45a373d3545e2b12be79e824295178bb0a4d6a))
* Optimizes the prompts of the `remember` and `recall` tools and supports the architecture upgrade of Issue [#137](https://github.com/Deepractice/PromptX/issues/137) ([#139](https://github.com/Deepractice/PromptX/issues/139)) ([657556e](https://github.com/Deepractice/PromptX/commit/657556ec88973a28f2ab495cf7e014e0a979b61c))
* Adds a 'promptx_dacp' parameter mapping in MCPServerCommand and MCPStreamableHttpCommand and at the same time optimizes the parameter processing logic in DACPCommand to support the correct analysis of array parameters. ([741c1f8](https://github.com/Deepractice/PromptX/commit/741c1f8f5497be57e6d9f32ecd1a476dda3dcacf))
* Intelligent error correction system - agent-friendly error handling in the ToolSandbox ([20a0259](https://github.com/Deepractice/PromptX/commit/20a02592c1122ee84ab3643f6e2163c55148d3c3))
* Repositions the product value proposition and strengthens the concept of AI Context Engineering ([4aed668](https://github.com/Deepractice/PromptX/commit/4aed668a98a81b95f4c42c71ca5f4dd04620d83d))
* Optimizes the connectivity of the HTTP MCP server and OAuth support ([dcc2dd9](https://github.com/Deepractice/PromptX/commit/dcc2dd9c2e467da4fe012197aebcfa231d776e3c))
* Renames the `noface` role and optimizes the path conversion of the `file://` protocol ([d645598](https://github.com/Deepractice/PromptX/commit/d6455987aba3476da0e2f60b4f7180b35b800f10))
