'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schema = exports.modes = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.isValidMode = isValidMode;

var _typeable = require('typeable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const modes = exports.modes = {
  RELAXED: 'relaxed',
  STRICT: 'strict'
};

function isValidMode(mode) {
  let keys = (0, _keys2.default)(modes);

  for (let key of keys) {
    if (modes[key] === mode) return true;
  }
  return false;
}

class Schema {

  constructor(_ref) {
    var _ref$mode = _ref.mode;
    let mode = _ref$mode === undefined ? modes.RELAXED : _ref$mode;
    var _ref$fields = _ref.fields;
    let fields = _ref$fields === undefined ? {} : _ref$fields;
    var _ref$validator = _ref.validator;
    let validator = _ref$validator === undefined ? {} : _ref$validator;

    if (!isValidMode(mode)) {
      throw new Error(`Unknown schema mode ${ mode }`);
    }
    if (!(0, _typeable.isObject)(fields)) {
      throw new Error(`Schema fields key should be an Object`);
    }
    if (!(0, _typeable.isObject)(validator)) {
      throw new Error(`Schema validator key should be an Object`);
    }

    this.mode = mode;
    this.fields = fields;
    this.validator = validator;
  }

}
exports.Schema = Schema;