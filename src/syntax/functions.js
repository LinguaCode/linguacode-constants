var COMMAND = require('../command');

var numberFixer = function (value) {
  return 'parseFloat(' + value + '.toFixed(10))'
};

var tan = function () {
  return '((value) => {return value == Math.PI / 2 ? Infinity : value == Math.PI ? 0 : ' + numberFixer('Math.tan(value)') + '})($1)';
};

module.exports = [{
  command: COMMAND.POW,
  definition: 'Math.pow($1, $2)'
}, {
  command: COMMAND.SQRT,
  definition: 'Math.pow($1, 1/2)'
}, {
  command: COMMAND.SQR,
  definition: 'Math.pow($1, 2)'
}, {
  command: COMMAND.ROUND,
  definition: 'Math.round($1)'
}, {
  command: COMMAND.FLOOR,
  definition: 'Math.floor($1)'
}, {
  command: COMMAND.CEIL,
  definition: 'Math.ceil($1)'
}, {
  command: COMMAND.LG,
  definition: 'Math.log10($1)'
}, {
  command: COMMAND.LN,
  definition: 'Math.log($1)'
}, {
  command: COMMAND.LOG,
  definition: 'Math.log($2)/Math.log($1)'
}, {
  command: COMMAND.RANDOM,
  definition: '((min,max) => {if(typeof(max)==\'undefined\') {max=min;min=0}\nreturn Math.floor(Math.random()*(max-min+1)+min)})($1,$2)'
}, {
  command: COMMAND.ABS,
  definition: 'Math.abs($1)'
}, {
  command: COMMAND.ARCSIN,
  definition: 'Math.asin($1)'
}, {
  command: COMMAND.ARCCOS,
  definition: 'Math.acos($1)'
}, {
  command: COMMAND.ARCTAN,
  definition: 'Math.atan($1)'
}, {
  command: COMMAND.ARCCTG,
  definition: '(Math.PI / 2 - Math.atan($1))'
}, {
  command: COMMAND.SIN,
  definition: numberFixer('Math.sin($1)')
}, {
  command: COMMAND.COS,
  definition: numberFixer('Math.cos($1)')
}, {
  command: COMMAND.TAN,
  definition: tan(),
}, {
  command: COMMAND.CTG,
  definition: '1/' + tan(),
}];