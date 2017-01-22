//collections of files of constants
const SYNTAX_LIST = ['commands', 'functions', 'globals', 'quotes', 'source'];
let SYNTAX = {};
for (let key in SYNTAX_LIST) {
  SYNTAX[key] = require('./syntax/' + key);
}
exports.SYNTAX = SYNTAX;

//files of constants
exports.ENVIRONMENT = require('./environment');
exports.STATUS = require('./status');
exports.BOOLEAN_DEFINITION = require('./boolean_definition');
exports.COMMAND = require('./command');

//constants
exports.TIMEOUT_TIME = 666;

exports.EVALUATED = 'evaluated';
exports.WAITS_FOR_INPUT = 'waitsForInput';
exports.SESSION_END = 'sessionEnd';
exports.ERROR = 'error';

exports.FAKE_PATH = './fake/path';
exports.SERVER_FILE_NAME = 'server';
exports.SOURCE_FILE_PATH = './src/';