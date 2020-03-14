// Require dependencies
const Path        = require('path');
const { addPath } = require('app-module-path');
const PrettyError = require('pretty-error');

/**
 * environment
 */
class EnvUtility {
  /**
   * construct environment
   */
  constructor() {
    // Set global root
    global.appRoot = Path.resolve(Path.dirname(__dirname));

    // add path for config
    addPath(Path.join(Path.dirname(__dirname), 'aliases'));

    // babel cache path
    process.env.BABEL_CACHE_PATH = `${global.appRoot}/.cache/babel-backend.json`;

    // babel register sync
    this.register();

    // build errors
    this.errors();
  }

  /**
   * register babel for ts imports
   */
  register() {
    // check registered
    if (this.registered) return;

    // registered
    this.registered = true;

    // require inline register
    // eslint-disable-next-line global-require
    const register = require('@babel/register');

    // run babel register
    register({
      cache   : true,
      presets : [
        ['@babel/preset-env', {
          targets : {
            node : 'current',
          },
        }],
      ],
      plugins : [
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-transform-typescript', {
          strictMode : false,
        }],
        'add-module-exports',
      ],
      extensions : ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts'],
    });
  }

  /**
   * builds errors
   */
  errors() {
    // Build classes
    const prettyError = new PrettyError();

    // print error global
    global.printError = (e) => {
      console.error(prettyError.render(e)); // eslint-disable-line no-console
    };

    // Build unhandled rejection error handler
    process.on('unhandledRejection', (e) => {
      // Log error
      global.printError(e);
    });

    // Build uncaught exception error handler
    process.on('uncaughtException', (e) => {
      // Log error
      global.printError(e);
    });
  }
}

// setup environment
module.exports = new EnvUtility();
