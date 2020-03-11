var log = require('logger');//require('log4js');
var config = require('./config/config');

//log.configure({
    //appenders: { applog: { type: 'dateFile', filename: 'app.log',   "pattern": "-yyyy-MM-dd" } },
    //categories: { default: { appenders: ['applog'], level: 'ALL' } }
//  });

var logger = log.createLogger();
//logger.level = config.debugLevel || 'INFO';
logger.setLevel('debug');
logger.info('init logger');

module.exports = logger;
