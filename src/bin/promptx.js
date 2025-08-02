#!/usr/bin/env node

const { Command } = require('commander')
const chalk = require('chalk')
const packageJson = require('../../package.json')
const logger = require('../lib/utils/logger')

// 锦囊框架 importieren
const { cli } = require('../lib/core/pouch')
// MCP Server-Befehle importieren
const { MCPServerStdioCommand } = require('../lib/mcp/MCPServerStdioCommand')
const { MCPServerHttpCommand } = require('../lib/mcp/MCPServerHttpCommand')

// Hauptprogramm erstellen
const program = new Command()

// Programminformationen festlegen
program
  .name('promptx')
  .description(packageJson.description)
  .version(packageJson.version, '-v, --version', 'Versionsnummer anzeigen')

// Fünf Kernbefehle
program
  .command('init [workspacePath]')
  .description('🏗️ init-Ratschlag - Arbeitsumgebung initialisieren, grundlegende Systemprotokolle übermitteln')
  .action(async (workspacePath, options) => {
    // Wenn workspacePath angegeben ist, als workingDirectory-Parameter übergeben
    const args = workspacePath ? { workingDirectory: workspacePath } : {}
    await cli.execute('init', [args])
  })

program
  .command('welcome')
  .description('👋 welcome-Ratschlag - Alle verfügbaren KI-Rollen und Fachexperten entdecken und anzeigen')
  .action(async (options) => {
    await cli.execute('welcome', [])
  })

program
  .command('action <role>')
  .description('⚡ action-Ratschlag - Eine bestimmte KI-Rolle aktivieren, um professionelle Anweisungen zu erhalten')
  .action(async (role, options) => {
    await cli.execute('action', [role])
  })

program
  .command('learn [resourceUrl]')
  .description('📚 learn-Ratschlag - Den Inhalt von Ressourcen des angegebenen Protokolls lernen (thought://, execution:// usw.)')
  .action(async (resourceUrl, options) => {
    await cli.execute('learn', resourceUrl ? [resourceUrl] : [])
  })

program
  .command('recall [query]')
  .description('🔍 recall-Ratschlag - KI ruft proaktiv relevantes Fachwissen aus dem Gedächtnis ab')
  .action(async (query, options) => {
    await cli.execute('recall', query ? [query] : [])
  })

program
  .command('remember [content...]')
  .description('🧠 remember-Ratschlag - KI internalisiert proaktiv Wissen und Erfahrungen in das Gedächtnissystem')
  .action(async (content, options) => {
    const args = content || []
    await cli.execute('remember', args)
  })


// Tool-Befehl
program
  .command('tool <arguments>')
  .description('🔧 tool-Ratschlag - JavaScript-Tools ausführen, die mit dem @tool-Protokoll deklariert wurden')
  .action(async (argumentsJson, options) => {
    try {
      let args = {};
      
      // Unterstützt zwei Aufrufmethoden:
      // 1. Von MCP übergebenes Objekt (über cli.execute aufgerufen)
      // 2. Von der CLI übergebener JSON-String (direkter Befehlszeilenaufruf)
      if (typeof argumentsJson === 'object') {
        args = argumentsJson;
      } else if (typeof argumentsJson === 'string') {
        try {
          args = JSON.parse(argumentsJson);
        } catch (error) {
          console.error('❌ Fehler bei der Parameteranalyse, bitte geben Sie ein gültiges JSON-Format an');
          console.error('Formatbeispiel: \'{"tool_resource": "@tool://calculator", "parameters": {"operation": "add", "a": 25, "b": 37}}\'');
          process.exit(1);
        }
      }
      
      // Erforderliche Parameter überprüfen
      if (!args.tool_resource || !args.parameters) {
        console.error('❌ Fehlende erforderliche Parameter');
        console.error('Erforderliche Parameter: tool_resource (Tool-Ressourcenreferenz), parameters (Tool-Parameter)');
        console.error('Formatbeispiel: \'{"tool_resource": "@tool://calculator", "parameters": {"operation": "add", "a": 25, "b": 37}}\'');
        process.exit(1);
      }
      
      await cli.execute('tool', args);
    } catch (error) {
      console.error(`❌ Fehler bei der Ausführung des Tool-Befehls: ${error.message}`);
      process.exit(1);
    }
  })

// MCP Server-Befehl
program
  .command('mcp-server')
  .description('🔌 MCP Server starten, um die Anbindung von KI-Anwendungen wie Claude Desktop zu unterstützen')
  .option('-t, --transport <type>', 'Transporttyp (stdio|http|sse)', 'stdio')
  .option('-p, --port <number>', 'HTTP-Portnummer (nur http/sse-Transport)', '3000')
  .option('--host <address>', 'Binde-Adresse (nur http/sse-Transport)', 'localhost')
  .option('--cors', 'CORS aktivieren (nur http/sse-Transport)', false)
  .option('--debug', 'Debug-Modus aktivieren', false)
  .action(async (options) => {
    try {
      // Debug-Modus festlegen
      if (options.debug) {
        process.env.MCP_DEBUG = 'true';
      }

      // Befehl je nach Transporttyp auswählen
      if (options.transport === 'stdio') {
        const mcpServer = new MCPServerStdioCommand();
        await mcpServer.execute();
      } else if (options.transport === 'http' || options.transport === 'sse') {
        const mcpHttpServer = new MCPServerHttpCommand();
        const serverOptions = {
          transport: options.transport,
          port: parseInt(options.port),
          host: options.host,
          cors: options.cors
        };
        
        logger.info(chalk.green(`🚀 Starte ${options.transport.toUpperCase()} MCP Server auf ${options.host}:${options.port}...`));
        await mcpHttpServer.execute(serverOptions);
      } else {
        throw new Error(`Nicht unterstützter Transporttyp: ${options.transport}. Unterstützte Typen: stdio, http, sse`);
      }
    } catch (error) {
      // Ausgabe nach stderr, um die stdout-Kommunikation von MCP nicht zu beeinträchtigen
      logger.error(chalk.red(`❌ MCP Server-Start fehlgeschlagen: ${error.message}`));
      process.exit(1);
    }
  })

// Globale Fehlerbehandlung
program.configureHelp({
  helpWidth: 100,
  sortSubcommands: true
})

// Beispielhinweise hinzufügen
program.addHelpText('after', `

${chalk.cyan('💡 PromptX Ratgeber-Framework - KI nutzt CLI, um Anweisungen für die KI zu erhalten')}

${chalk.cyan('🎒 Sechs Kernbefehle:')}
  🏗️ ${chalk.cyan('init')}   → Umgebung initialisieren, Systemprotokolle übermitteln
  👋 ${chalk.yellow('welcome')}  → Verfügbare Rollen und Fachexperten entdecken
  ⚡ ${chalk.red('action')} → Bestimmte Rolle aktivieren, professionelle Fähigkeiten erwerben
  📚 ${chalk.blue('learn')}  → Fachwissen vertiefen
  🔍 ${chalk.green('recall')} → KI ruft proaktiv angewandtes Gedächtnis ab
  🧠 ${chalk.magenta('remember')} → KI internalisiert proaktiv Wissen, um das Gedächtnis zu verbessern
  🔧 ${chalk.cyan('tool')} → JavaScript-Tools ausführen, intelligente KI-Aktionen
  🔌 ${chalk.blue('mcp-server')} → MCP Server starten, um KI-Anwendungen zu verbinden

${chalk.cyan('Beispiele:')}
  ${chalk.gray('# 1️⃣ Ratgebersystem initialisieren')}
  promptx init

  ${chalk.gray('# 2️⃣ Verfügbare Rollen entdecken')}
  promptx welcome

  ${chalk.gray('# 3️⃣ Berufsrolle aktivieren')}
  promptx action copywriter
  promptx action scrum-master

  ${chalk.gray('# 4️⃣ Fachwissen lernen')}
  promptx learn scrum
  promptx learn copywriter

  ${chalk.gray('# 5️⃣ Relevante Erfahrungen abrufen')}
  promptx recall agile
  promptx recall
  
  ${chalk.gray('# 6️⃣ KI internalisiert Fachwissen')}
  promptx remember "Tägliches Stand-up-Meeting auf 15 Minuten begrenzen"
  promptx remember "Test→Vorabversion→Produktion"

  ${chalk.gray('# 7️⃣ JavaScript-Tools ausführen')}
  promptx tool '{"tool_resource": "@tool://calculator", "parameters": {"operation": "add", "a": 2, "b": 3}}'
  promptx tool '{"tool_resource": "@tool://send-email", "parameters": {"to": "test@example.com", "subject": "Hallo", "content": "Test"}}'

  ${chalk.gray('# 8️⃣ MCP-Dienst starten')}
  promptx mcp-server                    # stdio-Transport (Standard)
  promptx mcp-server -t http -p 3000    # HTTP-Transport
  promptx mcp-server -t sse -p 3001     # SSE-Transport

${chalk.cyan('🔄 PATEOAS-Zustandsautomat:')}
  Jede Ratgeberausgabe enthält eine PATEOAS-Navigation, die die KI anleitet, den nächsten Schritt zu entdecken
  Selbst wenn die KI den vorherigen Kontext vergisst, kann sie durch den Ratgeber unabhängig ausgeführt werden

${chalk.cyan('💭 Kernkonzept:')}
  • Ratgeber in sich geschlossen: Jeder Befehl enthält vollständige Ausführungsinformationen
  • Verkettung ohne Abhängigkeiten: Die KI kann auch dann fortfahren, wenn sie den vorherigen Kontext vergisst
  • Phasenweise Konzentration: Jeder Ratgeber konzentriert sich auf eine einzelne Aufgabe
  • Anweisungsgesteuert: Die Ausgabe leitet die KI an, den nächsten Schritt zu entdecken

${chalk.cyan('🔌 MCP-Integration:')}
  • KI-Anwendungsanbindung: Verbindung mit KI-Anwendungen wie Claude Desktop über das MCP-Protokoll
  • Standardisierte Schnittstelle: Entspricht dem Model Context Protocol-Standard
  • Keine Umgebungsabhängigkeiten: Löst Probleme bei der Konfiguration der CLI-Umgebung

${chalk.cyan('Weitere Informationen:')}
  GitHub: ${chalk.underline('https://github.com/Deepractice/PromptX')}
  Organisation:   ${chalk.underline('https://github.com/Deepractice')}
`)

// Unbekannte Befehle behandeln
program.on('command:*', () => {
  logger.error(chalk.red(`Fehler: Unbekannter Befehl '${program.args.join(' ')}'`))
  logger.info('')
  program.help()
})

// Wenn keine Argumente vorhanden sind, Hilfe anzeigen
if (process.argv.length === 2) {
  program.help()
}

// Befehlszeilenargumente parsen
program.parse(process.argv)
