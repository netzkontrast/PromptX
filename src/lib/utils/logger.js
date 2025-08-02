const chalk = require('chalk')

/**
 * Protokollierungstool
 * Bietet farbige und formatierte Protokollausgaben
 */
class Logger {
  constructor (options = {}) {
    this.silent = options.silent || false
    this.prefix = options.prefix || 'PromptX'
  }

  /**
   * Info-Protokoll
   */
  info (message, ...args) {
    if (this.silent) return
    console.error(chalk.blue('ℹ'), message, ...args)
  }

  /**
   * Erfolgs-Protokoll
   */
  success (message, ...args) {
    if (this.silent) return
    console.error(chalk.green('✅'), message, ...args)
  }

  /**
   * Warn-Protokoll
   */
  warn (message, ...args) {
    if (this.silent) return
    console.error(chalk.yellow('⚠️'), chalk.yellow(message), ...args)
  }

  /**
   * Fehler-Protokoll
   */
  error (message, ...args) {
    if (this.silent) return
    console.error(chalk.red('❌'), chalk.red(message), ...args)
  }

  /**
   * Debug-Protokoll
   */
  debug (message, ...args) {
    if (this.silent || !process.env.DEBUG) return
    console.error(chalk.gray('🐛'), chalk.gray(message), ...args)
  }

  /**
   * Schritt-Protokoll (zur Fortschrittsanzeige)
   */
  step (message, ...args) {
    if (this.silent) return
    console.error(chalk.cyan('▶️'), message, ...args)
  }

  /**
   * Direkte Ausgabe (ohne Präfix)
   */
  log (message, ...args) {
    if (this.silent) return
    console.error(message, ...args)
  }

  /**
   * Leerzeile
   */
  newLine () {
    if (this.silent) return
    console.error('')
  }

  /**
   * Trennlinie
   */
  separator (char = '=', length = 80) {
    if (this.silent) return
    console.error(chalk.gray(char.repeat(length)))
  }
}

// Standardinstanz exportieren
const logger = new Logger()

module.exports = logger
module.exports.Logger = Logger
