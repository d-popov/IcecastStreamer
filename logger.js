var log = require('log4js');
var config = require('./config/config');

log.configure({
    appenders: { applog: { type: 'file', filename: 'app.log' } },
    categories: { default: { appenders: ['applog'], level: 'error' } }
  });

var logger = log.getLogger('App');
logger.level = config.debugLevel || 'INFO';

module.exports = logger;
