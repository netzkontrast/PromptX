const chalk = require('chalk')

/**
 * Logger utility
 * Provides colored and formatted log output
 */
class Logger {
  constructor (options = {}) {
    this.silent = options.silent || false
    this.prefix = options.prefix || 'PromptX'
  }

  /**
   * Info log
   */
  info (message, ...args) {
    if (this.silent) return
    console.error(chalk.blue('ℹ'), message, ...args)
  }

  /**
   * Success log
   */
  success (message, ...args) {
    if (this.silent) return
    console.error(chalk.green('✅'), message, ...args)
  }

  /**
   * Warning log
   */
  warn (message, ...args) {
    if (this.silent) return
    console.error(chalk.yellow('⚠️'), chalk.yellow(message), ...args)
  }

  /**
   * Error log
   */
  error (message, ...args) {
    if (this.silent) return
    console.error(chalk.red('❌'), chalk.red(message), ...args)
  }

  /**
   * Debug log
   */
  debug (message, ...args) {
    if (this.silent || !process.env.DEBUG) return
    console.error(chalk.gray('🐛'), chalk.gray(message), ...args)
  }

  /**
   * Step log (for displaying progress)
   */
  step (message, ...args) {
    if (this.silent) return
    console.error(chalk.cyan('▶️'), message, ...args)
  }

  /**
   * Direct output (without prefix)
   */
  log (message, ...args) {
    if (this.silent) return
    console.error(message, ...args)
  }

  /**
   * New line
   */
  newLine () {
    if (this.silent) return
    console.error('')
  }

  /**
   * Separator line
   */
  separator (char = '=', length = 80) {
    if (this.silent) return
    console.error(chalk.gray(char.repeat(length)))
  }
}

// Export default instance
const logger = new Logger()

module.exports = logger
module.exports.Logger = Logger
