#!/usr/bin/env node

const { Command } = require('commander')
const chalk = require('chalk')
const packageJson = require('../../package.json')
const logger = require('../lib/utils/logger')

// Import pouch framework
const { cli } = require('../lib/core/pouch')
// Import MCP Server commands
const { MCPServerStdioCommand } = require('../lib/mcp/MCPServerStdioCommand')
const { MCPServerHttpCommand } = require('../lib/mcp/MCPServerHttpCommand')

// Create main program
const program = new Command()

// Set program information
program
  .name('promptx')
  .description(packageJson.description)
  .version(packageJson.version, '-v, --version', 'display version number')

// Five core commands
program
  .command('init [workspacePath]')
  .description('🏗️ init pouch - Initialize the working environment, convey basic system protocols')
  .action(async (workspacePath, options) => {
    // If workspacePath is provided, pass it as a workingDirectory parameter
    const args = workspacePath ? { workingDirectory: workspacePath } : {}
    await cli.execute('init', [args])
  })

program
  .command('welcome')
  .description('👋 welcome pouch - Discover and display all available AI roles and domain experts')
  .action(async (options) => {
    await cli.execute('welcome', [])
  })

program
  .command('action <role>')
  .description('⚡ action pouch - Activate a specific AI role to get professional prompts')
  .action(async (role, options) => {
    await cli.execute('action', [role])
  })

program
  .command('learn [resourceUrl]')
  .description('📚 learn pouch - Learn the content of resources of the specified protocol (thought://, execution://, etc.)')
  .action(async (resourceUrl, options) => {
    await cli.execute('learn', resourceUrl ? [resourceUrl] : [])
  })

program
  .command('recall [query]')
  .description('🔍 recall pouch - AI proactively retrieves relevant professional knowledge from memory')
  .action(async (query, options) => {
    await cli.execute('recall', query ? [query] : [])
  })

program
  .command('remember [content...]')
  .description('🧠 remember pouch - AI proactively internalizes knowledge and experience into the memory system')
  .action(async (content, options) => {
    const args = content || []
    await cli.execute('remember', args)
  })


// Tool command
program
  .command('tool <arguments>')
  .description('🔧 tool pouch - Execute JavaScript tools declared with the @tool protocol')
  .action(async (argumentsJson, options) => {
    try {
      let args = {};
      
      // Supports two calling methods:
      // 1. Object passed from MCP (called via cli.execute)
      // 2. JSON string passed from the CLI (direct command line call)
      if (typeof argumentsJson === 'object') {
        args = argumentsJson;
      } else if (typeof argumentsJson === 'string') {
        try {
          args = JSON.parse(argumentsJson);
        } catch (error) {
          console.error('❌ Error parsing parameters, please provide a valid JSON format');
          console.error('Format example: \'{"tool_resource": "@tool://calculator", "parameters": {"operation": "add", "a": 25, "b": 37}}\'');
          process.exit(1);
        }
      }
      
      // Check required parameters
      if (!args.tool_resource || !args.parameters) {
        console.error('❌ Missing required parameters');
        console.error('Required parameters: tool_resource (Tool resource reference), parameters (Tool parameters)');
        console.error('Format example: \'{"tool_resource": "@tool://calculator", "parameters": {"operation": "add", "a": 25, "b": 37}}\'');
        process.exit(1);
      }
      
      await cli.execute('tool', args);
    } catch (error) {
      console.error(`❌ Error executing tool command: ${error.message}`);
      process.exit(1);
    }
  })

// MCP Server command
program
  .command('mcp-server')
  .description('🔌 Start MCP Server to support the connection of AI applications like Claude Desktop')
  .option('-t, --transport <type>', 'Transport type (stdio|http|sse)', 'stdio')
  .option('-p, --port <number>', 'HTTP port number (http/sse transport only)', '3000')
  .option('--host <address>', 'Bind address (http/sse transport only)', 'localhost')
  .option('--cors', 'Enable CORS (http/sse transport only)', false)
  .option('--debug', 'Enable debug mode', false)
  .action(async (options) => {
    try {
      // Set debug mode
      if (options.debug) {
        process.env.MCP_DEBUG = 'true';
      }

      // Select command based on transport type
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
        
        logger.info(chalk.green(`🚀 Starting ${options.transport.toUpperCase()} MCP Server on ${options.host}:${options.port}...`));
        await mcpHttpServer.execute(serverOptions);
      } else {
        throw new Error(`Unsupported transport type: ${options.transport}. Supported types: stdio, http, sse`);
      }
    } catch (error) {
      // Output to stderr to not pollute MCP's stdout communication
      logger.error(chalk.red(`❌ MCP Server start failed: ${error.message}`));
      process.exit(1);
    }
  })

// Global error handling
program.configureHelp({
  helpWidth: 100,
  sortSubcommands: true
})

// Add example notes
program.addHelpText('after', `

${chalk.cyan('💡 PromptX Pouch Framework - AI uses CLI to get prompts for AI')}

${chalk.cyan('🎒 Six core commands:')}
  🏗️ ${chalk.cyan('init')}   → Initialize environment, convey system protocols
  👋 ${chalk.yellow('welcome')}  → Discover available roles and domain experts
  ⚡ ${chalk.red('action')} → Activate a specific role, acquire professional skills
  📚 ${chalk.blue('learn')}  → Deepen domain knowledge
  🔍 ${chalk.green('recall')} → AI proactively retrieves applied memory
  🧠 ${chalk.magenta('remember')} → AI proactively internalizes knowledge to enhance memory
  🔧 ${chalk.cyan('tool')} → Execute JavaScript tools, intelligent AI actions
  🔌 ${chalk.blue('mcp-server')} → Start MCP Server to connect AI applications

${chalk.cyan('Examples:')}
  ${chalk.gray('# 1️⃣ Initialize pouch system')}
  promptx init

  ${chalk.gray('# 2️⃣ Discover available roles')}
  promptx welcome

  ${chalk.gray('# 3️⃣ Activate professional role')}
  promptx action copywriter
  promptx action scrum-master

  ${chalk.gray('# 4️⃣ Learn domain knowledge')}
  promptx learn scrum
  promptx learn copywriter

  ${chalk.gray('# 5️⃣ Retrieve relevant experiences')}
  promptx recall agile
  promptx recall
  
  ${chalk.gray('# 6️⃣ AI internalizes professional knowledge')}
  promptx remember "Limit daily stand-up meetings to 15 minutes"
  promptx remember "Test→Pre-release→Production"

  ${chalk.gray('# 7️⃣ Execute JavaScript tools')}
  promptx tool '{"tool_resource": "@tool://calculator", "parameters": {"operation": "add", "a": 2, "b": 3}}'
  promptx tool '{"tool_resource": "@tool://send-email", "parameters": {"to": "test@example.com", "subject": "Hello", "content": "Test"}}'

  ${chalk.gray('# 8️⃣ Start MCP service')}
  promptx mcp-server                    # stdio transport (default)
  promptx mcp-server -t http -p 3000    # HTTP transport
  promptx mcp-server -t sse -p 3001     # SSE transport

${chalk.cyan('🔄 PATEOAS state machine:')}
  Each pouch output contains PATEOAS navigation that guides the AI to discover the next step
  Even if the AI forgets the previous context, it can be executed independently through the pouch

${chalk.cyan('💭 Core concept:')}
  • Pouch self-contained: Each command contains complete execution information
  • Chaining without dependencies: The AI can continue even if it forgets the previous context
  • Phased focus: Each pouch focuses on a single task
  • Prompt-driven: The output guides the AI to discover the next step

${chalk.cyan('🔌 MCP integration:')}
  • AI application connection: Connection with AI applications like Claude Desktop via the MCP protocol
  • Standardized interface: Complies with the Model Context Protocol standard
  • No environment dependencies: Solves problems with CLI environment configuration

${chalk.cyan('More information:')}
  GitHub: ${chalk.underline('https://github.com/Deepractice/PromptX')}
  Organization:   ${chalk.underline('https://github.com/Deepractice')}
`)

// Handle unknown commands
program.on('command:*', () => {
  logger.error(chalk.red(`Error: Unknown command '${program.args.join(' ')}'`))
  logger.info('')
  program.help()
})

// If no arguments are present, display help
if (process.argv.length === 2) {
  program.help()
}

// Parse command line arguments
program.parse(process.argv)
