var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([1],{

/***/ "../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonApiMiniapp = __webpack_require__("./node_modules/chameleon-api-miniapp/index.js");

var _chameleonApiMiniapp2 = _interopRequireDefault(_chameleonApiMiniapp);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import cml from 'chameleon-api'
var Index = function Index() {
  _classCallCheck(this, Index);

  this.data = {
    title: "chameleon",
    chameleonSrc: __webpack_require__("./src/assets/images/chameleon.png")
  };
  this.methods = {
    handTap: function handTap() {
      _chameleonApiMiniapp2.default.showToast({
        title: 'this is title'
      });
      // cml.setTitle({
      //   message:'xxx'
      // })
    }
  };
};

exports.default = new Index();


module.exports = function () {
  _chameleonRuntime2.default.createPage(exports.default).getOptions();
};

/***/ }),

/***/ "../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/login/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/showActionSheet/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/showToast/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/hideToast/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/navigateTo/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/navigateBack/index.js");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/redirectTo/index.js");

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/setNavigationBarTitle/index.js");

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getLocation/index.js");

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/reLaunch/index.js");

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/hideLoading/index.js");

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/showLoading/index.js");

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/showModal/index.js");

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfoSync/index.js");

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfo/index.js");

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createAnimation/index.js");

var _index32 = _interopRequireDefault(_index31);

var _index33 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/request/index.js");

var _index34 = _interopRequireDefault(_index33);

var _index35 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/uploadFile/index.js");

var _index36 = _interopRequireDefault(_index35);

var _index37 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createMapContext/index.js");

var _index38 = _interopRequireDefault(_index37);

var _index39 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createCanvasContext/index.js");

var _index40 = _interopRequireDefault(_index39);

var _index41 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/MapContext/index.js");

var _index42 = _interopRequireDefault(_index41);

var _index43 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/navigateToMiniProgram/index.js");

var _index44 = _interopRequireDefault(_index43);

var _index45 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/readBLECharacteristicValue/index.js");

var _index46 = _interopRequireDefault(_index45);

var _index47 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/onBLEConnectionStateChange/index.js");

var _index48 = _interopRequireDefault(_index47);

var _index49 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/onBLECharacteristicValueChange/index.js");

var _index50 = _interopRequireDefault(_index49);

var _index51 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/notifyBLECharacteristicValueChange/index.js");

var _index52 = _interopRequireDefault(_index51);

var _index53 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceServices/index.js");

var _index54 = _interopRequireDefault(_index53);

var _index55 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceCharacteristics/index.js");

var _index56 = _interopRequireDefault(_index55);

var _index57 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createBLEConnection/index.js");

var _index58 = _interopRequireDefault(_index57);

var _index59 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/closeBLEConnection/index.js");

var _index60 = _interopRequireDefault(_index59);

var _index61 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/writeBLECharacteristicValue/index.js");

var _index62 = _interopRequireDefault(_index61);

var _index63 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/startBluetoothDevicesDiscovery/index.js");

var _index64 = _interopRequireDefault(_index63);

var _index65 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/stopBluetoothDevicesDiscovery/index.js");

var _index66 = _interopRequireDefault(_index65);

var _index67 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/openBluetoothAdapter/index.js");

var _index68 = _interopRequireDefault(_index67);

var _index69 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothDeviceFound/index.js");

var _index70 = _interopRequireDefault(_index69);

var _index71 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothAdapterStateChange/index.js");

var _index72 = _interopRequireDefault(_index71);

var _index73 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getConnectedBluetoothDevices/index.js");

var _index74 = _interopRequireDefault(_index73);

var _index75 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothDevices/index.js");

var _index76 = _interopRequireDefault(_index75);

var _index77 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothAdapterState/index.js");

var _index78 = _interopRequireDefault(_index77);

var _index79 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/closeBluetoothAdapter/index.js");

var _index80 = _interopRequireDefault(_index79);

var _index81 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/makePhoneCall/index.js");

var _index82 = _interopRequireDefault(_index81);

var _index83 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createSelectorQuery/index.js");

var _index84 = _interopRequireDefault(_index83);

var _index85 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/offBLECharacteristicValueChange/index.js");

var _index86 = _interopRequireDefault(_index85);

var _index87 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/pay/index.js");

var _index88 = _interopRequireDefault(_index87);

var _index89 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/setStorageSync/index.js");

var _index90 = _interopRequireDefault(_index89);

var _index91 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getStorageSync/index.js");

var _index92 = _interopRequireDefault(_index91);

var _index93 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/removeStorageSync/index.js");

var _index94 = _interopRequireDefault(_index93);

var _index95 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getSetting/index.js");

var _index96 = _interopRequireDefault(_index95);

var _index97 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/openSetting/index.js");

var _index98 = _interopRequireDefault(_index97);

var _index99 = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/scanCode/index.js");

var _index100 = _interopRequireDefault(_index99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  login: _index2.default,
  showActionSheet: _index4.default,
  showToast: _index6.default,
  hideToast: _index8.default,
  navigateTo: _index10.default,
  navigateBack: _index12.default,
  redirectTo: _index14.default,
  setNavigationBarTitle: _index16.default,
  getLocation: _index18.default,
  reLaunch: _index20.default,
  hideLoading: _index22.default,
  showLoading: _index24.default,
  showModal: _index26.default,
  getSystemInfoSync: _index28.default,
  getSystemInfo: _index30.default,
  createAnimation: _index32.default,
  request: _index34.default,
  uploadFile: _index36.default,
  createMapContext: _index38.default,
  createCanvasContext: _index40.default,
  MapContext: _index42.default,
  navigateToMiniProgram: _index44.default,
  readBLECharacteristicValue: _index46.default,
  onBLEConnectionStateChange: _index48.default,
  onBLECharacteristicValueChange: _index50.default,
  notifyBLECharacteristicValueChange: _index52.default,
  getBLEDeviceServices: _index54.default,
  getBLEDeviceCharacteristics: _index56.default,
  createBLEConnection: _index58.default,
  closeBLEConnection: _index60.default,
  writeBLECharacteristicValue: _index62.default,
  startBluetoothDevicesDiscovery: _index64.default,
  stopBluetoothDevicesDiscovery: _index66.default,
  openBluetoothAdapter: _index68.default,
  onBluetoothDeviceFound: _index70.default,
  onBluetoothAdapterStateChange: _index72.default,
  getConnectedBluetoothDevices: _index74.default,
  getBluetoothDevices: _index76.default,
  getBluetoothAdapterState: _index78.default,
  closeBluetoothAdapter: _index80.default,
  makePhoneCall: _index82.default,
  createSelectorQuery: _index84.default,
  offBLECharacteristicValueChange: _index86.default,
  pay: _index88.default,
  setStorageSync: _index90.default,
  getStorageSync: _index92.default,
  removeStorageSync: _index94.default,
  getSetting: _index96.default,
  openSetting: _index98.default,
  scanCode: _index100.default
};

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/MapContext/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/MapContext/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "MapContext": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "MapContext",
    value: function MapContext(opt) {
      wx.MapContext(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/MapContext/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MapContext;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/MapContext/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MapContext() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.MapContext({
        // 2.这里把参数传进去

        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/closeBLEConnection/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/closeBLEConnection/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "deviceId": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "closeBLEConnection": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "closeBLEConnection",
    value: function closeBLEConnection(opt) {
      wx.closeBLEConnection(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/closeBLEConnection/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = closeBLEConnection;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/closeBLEConnection/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function closeBLEConnection() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$deviceId = opt.deviceId,
        deviceId = _opt$deviceId === undefined ? '' : _opt$deviceId,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.closeBLEConnection({
        // 2.这里把参数传进去
        deviceId: deviceId,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/closeBluetoothAdapter/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/closeBluetoothAdapter/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "closeBluetoothAdapter": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "closeBluetoothAdapter",
    value: function closeBluetoothAdapter(opt) {
      wx.closeBluetoothAdapter(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/closeBluetoothAdapter/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = closeBluetoothAdapter;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/closeBluetoothAdapter/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function closeBluetoothAdapter() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.closeBluetoothAdapter({
        // 2.这里把参数传进去

        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createAnimation/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/createAnimation/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "duration": "Number",
      "timingFunction": "String",
      "delay": "Number",
      "transformOrigin": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "createAnimation": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createAnimation",
    value: function createAnimation(opt) {
      wx.createAnimation(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createAnimation/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createAnimation;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAnimation() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$duration = opt.duration,
        duration = _opt$duration === undefined ? 400 : _opt$duration,
        _opt$timingFunction = opt.timingFunction,
        timingFunction = _opt$timingFunction === undefined ? 'linear' : _opt$timingFunction,
        _opt$delay = opt.delay,
        delay = _opt$delay === undefined ? 0 : _opt$delay,
        _opt$transformOrigin = opt.transformOrigin,
        transformOrigin = _opt$transformOrigin === undefined ? '50% 50% 0' : _opt$transformOrigin,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.createAnimation({
        // 2.这里把参数传进去
        duration: duration,
        timingFunction: timingFunction,
        delay: delay,
        transformOrigin: transformOrigin,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createBLEConnection/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/createBLEConnection/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "deviceId": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "createBLEConnection": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createBLEConnection",
    value: function createBLEConnection(opt) {
      wx.createBLEConnection(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createBLEConnection/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createBLEConnection;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createBLEConnection/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createBLEConnection() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$deviceId = opt.deviceId,
        deviceId = _opt$deviceId === undefined ? '' : _opt$deviceId,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.createBLEConnection({
        // 2.这里把参数传进去
        deviceId: deviceId,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createCanvasContext/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/createCanvasContext/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {
      "createCanvasContext": {
        "input": ["String", "CMLObject"],
        "output": "CMLObject"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createCanvasContext",
    value: function createCanvasContext(canvasId, context) {
      return wx.createCanvasContext(canvasId, context);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createCanvasContext/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createCanvasContext;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createCanvasContext/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCanvasContext(canvasId, context) {
    return _index2.default.createCanvasContext(canvasId, context);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createMapContext/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/createMapContext/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {
      "createMapContext": {
        "input": ["String", "CMLObject"],
        "output": "CMLObject"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createMapContext",
    value: function createMapContext(mapId, context) {
      return wx.createMapContext(mapId, context);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createMapContext/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMapContext;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createMapContext/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMapContext(mapId, context) {
    return _index2.default.createMapContext(mapId, context);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createSelectorQuery/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/createSelectorQuery/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {}
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createSelectorQuery",
    value: function createSelectorQuery() {
      return wx.createSelectorQuery();
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/createSelectorQuery/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSelectorQuery;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/createSelectorQuery/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSelectorQuery() {
  return _index2.default.createSelectorQuery();
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceCharacteristics/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceCharacteristics/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "deviceId": "String",
      "serviceId": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "getBLEDeviceCharacteristics": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getBLEDeviceCharacteristics",
    value: function getBLEDeviceCharacteristics(opt) {
      wx.getBLEDeviceCharacteristics(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceCharacteristics/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBLEDeviceCharacteristics;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceCharacteristics/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBLEDeviceCharacteristics() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$deviceId = opt.deviceId,
        deviceId = _opt$deviceId === undefined ? '' : _opt$deviceId,
        _opt$serviceId = opt.serviceId,
        serviceId = _opt$serviceId === undefined ? '' : _opt$serviceId,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.getBLEDeviceCharacteristics({
        // 2.这里把参数传进去
        deviceId: deviceId,
        serviceId: serviceId,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceServices/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceServices/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "deviceId": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "getBLEDeviceServices": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getBLEDeviceServices",
    value: function getBLEDeviceServices(opt) {
      wx.getBLEDeviceServices(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceServices/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBLEDeviceServices;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getBLEDeviceServices/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBLEDeviceServices() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$deviceId = opt.deviceId,
        deviceId = _opt$deviceId === undefined ? '' : _opt$deviceId,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.getBLEDeviceServices({
        // 2.这里把参数传进去
        deviceId: deviceId,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothAdapterState/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothAdapterState/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "getBluetoothAdapterState": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getBluetoothAdapterState",
    value: function getBluetoothAdapterState(opt) {
      wx.getBluetoothAdapterState(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothAdapterState/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBluetoothAdapterState;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothAdapterState/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBluetoothAdapterState() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.getBluetoothAdapterState({
        // 2.这里把参数传进去

        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothDevices/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothDevices/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "getBluetoothDevices": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getBluetoothDevices",
    value: function getBluetoothDevices(opt) {
      wx.getBluetoothDevices(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothDevices/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBluetoothDevices;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getBluetoothDevices/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBluetoothDevices() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.getBluetoothDevices({
        // 2.这里把参数传进去

        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getConnectedBluetoothDevices/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getConnectedBluetoothDevices/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "DevicesArray": ["CMLObject"],
    "OptType": {
      "devices": "DevicesArray",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "getConnectedBluetoothDevices": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getConnectedBluetoothDevices",
    value: function getConnectedBluetoothDevices(opt) {
      wx.getConnectedBluetoothDevices(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getConnectedBluetoothDevices/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getConnectedBluetoothDevices;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getConnectedBluetoothDevices/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function getConnectedBluetoothDevices() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$devices = _toArray(opt.devices),
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;

    _index2.default.getConnectedBluetoothDevices({
        // 2.这里把参数传进去
        devices: devices,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getLocation/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getLocation/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "type": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "getLocation": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getLocation",
    value: function getLocation(opt) {
      wx.getLocation(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getLocation/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getLocation;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getLocation/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLocation() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$type = opt.type,
        type = _opt$type === undefined ? 'wgs84' : _opt$type,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.getLocation({
        // 2.这里把参数传进去
        type: type,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getSetting/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getSetting/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "withSubscriptions": "Boolean",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "getSetting": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getSetting",
    value: function getSetting(opt) {
      wx.getSetting(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getSetting/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getSetting;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getSetting/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSetting() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$withSubscription = opt.withSubscriptions,
        withSubscriptions = _opt$withSubscription === undefined ? false : _opt$withSubscription,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    return _index2.default.getSetting({
        withSubscriptions: withSubscriptions,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getStorageSync/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getStorageSync/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {}
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getStorageSync",
    value: function getStorageSync(key) {
      return wx.getStorageSync(key);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getStorageSync/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getStorageSync;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getStorageSync/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStorageSync(key) {
    return _index2.default.getStorageSync(key);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "getSystemInfo": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getSystemInfo",
    value: function getSystemInfo(opt) {
      wx.getSystemInfo(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getSystemInfo;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSystemInfo() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.getSystemInfo({
        // 2.这里把参数传进去

        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfoSync/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfoSync/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {}
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getSystemInfoSync",
    value: function getSystemInfoSync() {
      return wx.getSystemInfoSync();
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfoSync/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSystemInfoSync;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/getSystemInfoSync/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSystemInfoSync() {
  return _index2.default.getSystemInfoSync();
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/hideLoading/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/hideLoading/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "page": "CMLObject",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "hideLoading": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "hideLoading",
    value: function hideLoading(opt) {
      wx.hideLoading(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/hideLoading/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hideLoading;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/hideLoading/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hideLoading() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$page = opt.page,
        page = _opt$page === undefined ? {} : _opt$page,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.hideLoading({
        // 2.这里把参数传进去
        page: page,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/hideToast/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/hideToast/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {
      "hideToast": {
        "input": [],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "hideToast",
    value: function hideToast() {
      wx.hideToast();
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/hideToast/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hideToast;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/hideToast/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hideToast() {
    _index2.default.hideToast();
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/login/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/login/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "login": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "login",
    value: function login(opt) {
      wx.login(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/login/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = login;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/login/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var noop = function noop(res) {};
  var _opt$success = opt.success,
      success = _opt$success === undefined ? noop : _opt$success,
      _opt$fail = opt.fail,
      fail = _opt$fail === undefined ? noop : _opt$fail,
      _opt$complete = opt.complete,
      complete = _opt$complete === undefined ? noop : _opt$complete;


  _index2.default.login({
    // 2.这里把参数传进去
    success: success,
    fail: fail,
    complete: complete
  });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/makePhoneCall/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/makePhoneCall/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "phoneNumber": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "makePhoneCall": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "makePhoneCall",
    value: function makePhoneCall(opt) {
      wx.makePhoneCall(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/makePhoneCall/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makePhoneCall;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/makePhoneCall/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makePhoneCall() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var noop = function noop(res) {};

  var phoneNumber = opt.phoneNumber,
      _opt$success = opt.success,
      success = _opt$success === undefined ? noop : _opt$success,
      _opt$fail = opt.fail,
      fail = _opt$fail === undefined ? noop : _opt$fail,
      _opt$complete = opt.complete,
      complete = _opt$complete === undefined ? noop : _opt$complete;


  _index2.default.makePhoneCall({
    // 2.这里把参数传进去
    phoneNumber: phoneNumber,
    success: success,
    fail: fail,
    complete: complete
  });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/navigateBack/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/navigateBack/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "delta": "Number",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "navigateBack": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "navigateBack",
    value: function navigateBack(opt) {
      wx.navigateBack(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/navigateBack/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navigateBack;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/navigateBack/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateBack() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$delta = opt.delta,
        delta = _opt$delta === undefined ? 1 : _opt$delta,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.navigateBack({
        // 2.这里把参数传进去
        delta: delta,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/navigateTo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/navigateTo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "url": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "navigateTo": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "navigateTo",
    value: function navigateTo(opt) {
      wx.navigateTo(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/navigateTo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navigateTo;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/navigateTo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateTo() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$url = opt.url,
        url = _opt$url === undefined ? '' : _opt$url,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.navigateTo({
        // 2.这里把参数传进去
        url: url,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/navigateToMiniProgram/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/navigateToMiniProgram/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "appId": "String",
      "path": "String",
      "extraData": "CMLObject",
      "envVersion": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "navigateToMiniProgram": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "navigateToMiniProgram",
    value: function navigateToMiniProgram(opt) {
      wx.navigateToMiniProgram(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/navigateToMiniProgram/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navigateToMiniProgram;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/navigateToMiniProgram/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateToMiniProgram() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$appId = opt.appId,
        appId = _opt$appId === undefined ? '' : _opt$appId,
        _opt$path = opt.path,
        path = _opt$path === undefined ? '' : _opt$path,
        _opt$extraData = opt.extraData,
        extraData = _opt$extraData === undefined ? {} : _opt$extraData,
        _opt$envVersion = opt.envVersion,
        envVersion = _opt$envVersion === undefined ? '' : _opt$envVersion,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.navigateToMiniProgram({
        // 2.这里把参数传进去
        appId: appId,
        path: path,
        extraData: extraData,
        envVersion: envVersion,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/notifyBLECharacteristicValueChange/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/notifyBLECharacteristicValueChange/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "deviceId": "String",
      "serviceId": "String",
      "characteristicId": "String",
      "state": "Boolean",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "notifyBLECharacteristicValueChange": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "notifyBLECharacteristicValueChange",
    value: function notifyBLECharacteristicValueChange(opt) {
      wx.notifyBLECharacteristicValueChange(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/notifyBLECharacteristicValueChange/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = notifyBLECharacteristicValueChange;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/notifyBLECharacteristicValueChange/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notifyBLECharacteristicValueChange() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$deviceId = opt.deviceId,
        deviceId = _opt$deviceId === undefined ? '' : _opt$deviceId,
        _opt$serviceId = opt.serviceId,
        serviceId = _opt$serviceId === undefined ? '' : _opt$serviceId,
        _opt$characteristicId = opt.characteristicId,
        characteristicId = _opt$characteristicId === undefined ? '' : _opt$characteristicId,
        _opt$state = opt.state,
        state = _opt$state === undefined ? false : _opt$state,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.notifyBLECharacteristicValueChange({
        // 2.这里把参数传进去
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        state: state,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/offBLECharacteristicValueChange/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/offBLECharacteristicValueChange/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "deviceId": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "offBLECharacteristicValueChange": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "offBLECharacteristicValueChange",
    value: function offBLECharacteristicValueChange(opt) {
      return;
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/offBLECharacteristicValueChange/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = offBLECharacteristicValueChange;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/offBLECharacteristicValueChange/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function offBLECharacteristicValueChange() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$deviceId = opt.deviceId,
        deviceId = _opt$deviceId === undefined ? '' : _opt$deviceId,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.offBLECharacteristicValueChange({
        // 2.这里把参数传进去
        deviceId: deviceId,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/onBLECharacteristicValueChange/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/onBLECharacteristicValueChange/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "CallBack": {
      "input": ["CMLObject"],
      "output": "Void"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "onBLECharacteristicValueChange": {
        "input": ["CallBack"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "onBLECharacteristicValueChange",
    value: function onBLECharacteristicValueChange(cb) {
      wx.onBLECharacteristicValueChange(cb);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/onBLECharacteristicValueChange/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = onBLECharacteristicValueChange;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/onBLECharacteristicValueChange/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onBLECharacteristicValueChange() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (res) {};

    _index2.default.onBLECharacteristicValueChange(cb);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/onBLEConnectionStateChange/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/onBLEConnectionStateChange/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "CallBack": {
      "input": ["CMLObject"],
      "output": "Void"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "onBLEConnectionStateChange": {
        "input": ["CallBack"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "onBLEConnectionStateChange",
    value: function onBLEConnectionStateChange(cb) {
      wx.onBLEConnectionStateChange(cb);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/onBLEConnectionStateChange/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = onBLEConnectionStateChange;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/onBLEConnectionStateChange/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onBLEConnectionStateChange() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    _index2.default.onBLEConnectionStateChange(cb);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothAdapterStateChange/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothAdapterStateChange/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "CallBack": {
      "input": ["CMLObject"],
      "output": "Void"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "onBluetoothAdapterStateChange": {
        "input": ["CallBack"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "onBluetoothAdapterStateChange",
    value: function onBluetoothAdapterStateChange(cb) {
      wx.onBluetoothAdapterStateChange(cb);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothAdapterStateChange/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = onBluetoothAdapterStateChange;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothAdapterStateChange/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onBluetoothAdapterStateChange() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    _index2.default.onBluetoothAdapterStateChange(cb);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothDeviceFound/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothDeviceFound/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "CallBack": {
      "input": ["CMLObject"],
      "output": "Void"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "onBluetoothDeviceFound": {
        "input": ["CallBack"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "onBluetoothDeviceFound",
    value: function onBluetoothDeviceFound(cb) {
      wx.onBluetoothDeviceFound(cb);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothDeviceFound/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = onBluetoothDeviceFound;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/onBluetoothDeviceFound/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onBluetoothDeviceFound() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    _index2.default.onBluetoothDeviceFound(cb);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/openBluetoothAdapter/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/openBluetoothAdapter/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "openBluetoothAdapter": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "openBluetoothAdapter",
    value: function openBluetoothAdapter(opt) {
      wx.openBluetoothAdapter(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/openBluetoothAdapter/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = openBluetoothAdapter;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/openBluetoothAdapter/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function openBluetoothAdapter() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.openBluetoothAdapter({
        // 2.这里把参数传进去

        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/openSetting/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/openSetting/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "withSubscriptions": "Boolean",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "openSetting": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "openSetting",
    value: function openSetting(opt) {
      wx.openSetting(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/openSetting/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = openSetting;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/openSetting/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function openSetting() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$withSubscription = opt.withSubscriptions,
        withSubscriptions = _opt$withSubscription === undefined ? false : _opt$withSubscription,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    return _index2.default.openSetting({
        withSubscriptions: withSubscriptions,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/pay/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/pay/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "payParams": "CMLObject",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "pay": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "pay",
    value: function pay(opt) {
      var _opt$appid = opt.appid,
          appid = _opt$appid === undefined ? opt.payParams.appId : _opt$appid;

      wx.requestPayment(_extends({
        appid: appid
      }, opt, opt.payParams));
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/pay/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pay;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/pay/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pay() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var noop = function noop(res) {};

  var _opt$payParams = opt.payParams,
      payParams = _opt$payParams === undefined ? noop : _opt$payParams,
      _opt$success = opt.success,
      success = _opt$success === undefined ? noop : _opt$success,
      _opt$fail = opt.fail,
      fail = _opt$fail === undefined ? noop : _opt$fail,
      _opt$complete = opt.complete,
      complete = _opt$complete === undefined ? noop : _opt$complete;


  _index2.default.pay({
    payParams: payParams,
    success: success,
    fail: fail,
    complete: complete
  });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/reLaunch/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/reLaunch/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "url": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "reLaunch": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "reLaunch",
    value: function reLaunch(opt) {
      wx.reLaunch(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/reLaunch/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reLaunch;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/reLaunch/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reLaunch() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$url = opt.url,
        url = _opt$url === undefined ? '' : _opt$url,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.reLaunch({
        // 2.这里把参数传进去
        url: url,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/readBLECharacteristicValue/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/readBLECharacteristicValue/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "deviceId": "String",
      "serviceId": "String",
      "characteristicId": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "readBLECharacteristicValue": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "readBLECharacteristicValue",
    value: function readBLECharacteristicValue(opt) {
      wx.readBLECharacteristicValue(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/readBLECharacteristicValue/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = readBLECharacteristicValue;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/readBLECharacteristicValue/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readBLECharacteristicValue() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$deviceId = opt.deviceId,
        deviceId = _opt$deviceId === undefined ? '' : _opt$deviceId,
        _opt$serviceId = opt.serviceId,
        serviceId = _opt$serviceId === undefined ? '' : _opt$serviceId,
        _opt$characteristicId = opt.characteristicId,
        characteristicId = _opt$characteristicId === undefined ? '' : _opt$characteristicId,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.readBLECharacteristicValue({
        // 2.这里把参数传进去
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/redirectTo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/redirectTo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "url": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "redirectTo": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "redirectTo",
    value: function redirectTo(opt) {
      wx.redirectTo(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/redirectTo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = redirectTo;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/redirectTo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function redirectTo() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$url = opt.url,
        url = _opt$url === undefined ? '' : _opt$url,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.redirectTo({
        // 2.这里把参数传进去
        url: url,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/removeStorageSync/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/removeStorageSync/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {}
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "removeStorageSync",
    value: function removeStorageSync(key) {
      return wx.removeStorageSync(key);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/removeStorageSync/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeStorageSync;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/removeStorageSync/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeStorageSync(key) {
    return _index2.default.removeStorageSync(key);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/request/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/request/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {
      "request": {
        "input": ["CMLObject"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "request",
    value: function request(opt) {
      wx.request(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/request/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = request;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/request/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _index2.default.request(opt);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/scanCode/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/scanCode/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "onlyFromCamera": "Boolean",
      "scanType": "Array",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "scanCode": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "scanCode",
    value: function scanCode(opt) {
      wx.scanCode(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/scanCode/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = scanCode;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/scanCode/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scanCode() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};
    var _opt$onlyFromCamera = opt.onlyFromCamera,
        onlyFromCamera = _opt$onlyFromCamera === undefined ? false : _opt$onlyFromCamera,
        _opt$scanType = opt.scanType,
        scanType = _opt$scanType === undefined ? ['barCode', 'qrCode'] : _opt$scanType,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;

    _index2.default.scanCode({
        onlyFromCamera: onlyFromCamera,
        scanType: scanType,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/setNavigationBarTitle/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/setNavigationBarTitle/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "title": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "setNavigationBarTitle": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "setNavigationBarTitle",
    value: function setNavigationBarTitle(opt) {
      wx.setNavigationBarTitle(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/setNavigationBarTitle/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setNavigationBarTitle;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/setNavigationBarTitle/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setNavigationBarTitle() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$title = opt.title,
        title = _opt$title === undefined ? '' : _opt$title,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.setNavigationBarTitle({
        // 2.这里把参数传进去
        title: title,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/setStorageSync/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/setStorageSync/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "MethodsInterface": {}
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "setStorageSync",
    value: function setStorageSync(key, value) {
      wx.setStorageSync(key, value);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/setStorageSync/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setStorageSync;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/setStorageSync/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setStorageSync(key, value) {
    _index2.default.setStorageSync(key, value);
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/showActionSheet/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/showActionSheet/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "ServicesArray": ["String"],
    "OptType": {
      "itemList": "ServicesArray",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "showActionSheet": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "showActionSheet",
    value: function showActionSheet(opt) {
      debugger;
      wx.showActionSheet(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/showActionSheet/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = showActionSheet;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/showActionSheet/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showActionSheet() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};
    var _opt$itemList = opt.itemList,
        itemList = _opt$itemList === undefined ? [] : _opt$itemList,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;

    var ary = [];
    itemList.forEach(function (element) {
        ary.push(element);
    });
    _index2.default.showActionSheet({
        // 2.这里把参数传进去
        itemList: ary,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/showLoading/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/showLoading/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "title": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "showLoading": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "showLoading",
    value: function showLoading(opt) {
      wx.showLoading(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/showLoading/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = showLoading;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/showLoading/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showLoading() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$title = opt.title,
        title = _opt$title === undefined ? '' : _opt$title,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.showLoading({
        // 2.这里把参数传进去
        title: title,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/showModal/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/showModal/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "title": "String",
      "content": "String",
      "cancelText": "String",
      "confirmText": "String",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "showModal": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "showModal",
    value: function showModal(opt) {
      wx.showModal(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/showModal/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = showModal;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/showModal/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showModal() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$title = opt.title,
        title = _opt$title === undefined ? '' : _opt$title,
        _opt$content = opt.content,
        content = _opt$content === undefined ? '' : _opt$content,
        _opt$cancelText = opt.cancelText,
        cancelText = _opt$cancelText === undefined ? '取消' : _opt$cancelText,
        _opt$confirmText = opt.confirmText,
        confirmText = _opt$confirmText === undefined ? '确定' : _opt$confirmText,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.showModal({
        // 2.这里把参数传进去
        title: title,
        content: content,
        cancelText: cancelText,
        confirmText: confirmText,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/showToast/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/showToast/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "title": "String",
      "icon": "String",
      "duration": "Number",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "showToast": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "showToast",
    value: function showToast(opt) {
      wx.showToast(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/showToast/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = showToast;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/showToast/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showToast() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$title = opt.title,
        title = _opt$title === undefined ? '' : _opt$title,
        _opt$icon = opt.icon,
        icon = _opt$icon === undefined ? 'none' : _opt$icon,
        _opt$duration = opt.duration,
        duration = _opt$duration === undefined ? 1500 : _opt$duration,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.showToast({
        // 2.这里把参数传进去
        title: title,
        icon: icon,
        duration: duration,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/startBluetoothDevicesDiscovery/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/startBluetoothDevicesDiscovery/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "ServicesArray": ["String"],
    "OptType": {
      "services": "ServicesArray",
      "allowDuplicatesKey": "Boolean",
      "interval": "Number",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "startBluetoothDevicesDiscovery": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "startBluetoothDevicesDiscovery",
    value: function startBluetoothDevicesDiscovery(opt) {
      wx.startBluetoothDevicesDiscovery(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/startBluetoothDevicesDiscovery/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = startBluetoothDevicesDiscovery;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/startBluetoothDevicesDiscovery/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startBluetoothDevicesDiscovery() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$services = opt.services,
        services = _opt$services === undefined ? [] : _opt$services,
        _opt$allowDuplicatesK = opt.allowDuplicatesKey,
        allowDuplicatesKey = _opt$allowDuplicatesK === undefined ? true : _opt$allowDuplicatesK,
        _opt$interval = opt.interval,
        interval = _opt$interval === undefined ? 0 : _opt$interval,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.startBluetoothDevicesDiscovery({
        // 2.这里把参数传进去
        services: services,
        allowDuplicatesKey: allowDuplicatesKey,
        interval: interval,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/stopBluetoothDevicesDiscovery/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/stopBluetoothDevicesDiscovery/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "stopBluetoothDevicesDiscovery": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "stopBluetoothDevicesDiscovery",
    value: function stopBluetoothDevicesDiscovery(opt) {
      wx.stopBluetoothDevicesDiscovery(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/stopBluetoothDevicesDiscovery/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = stopBluetoothDevicesDiscovery;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/stopBluetoothDevicesDiscovery/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stopBluetoothDevicesDiscovery() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.stopBluetoothDevicesDiscovery({
        // 2.这里把参数传进去

        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/uploadFile/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/uploadFile/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "url": "String",
      "filePath": "String",
      "name": "String",
      "fileType": "String",
      "header": "CMLObject",
      "formData": "CMLObject",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "uploadFile": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "uploadFile",
    value: function uploadFile(opt) {
      wx.uploadFile(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/uploadFile/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = uploadFile;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/uploadFile/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uploadFile() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$url = opt.url,
        url = _opt$url === undefined ? '' : _opt$url,
        _opt$filePath = opt.filePath,
        filePath = _opt$filePath === undefined ? '' : _opt$filePath,
        _opt$name = opt.name,
        name = _opt$name === undefined ? '' : _opt$name,
        _opt$fileType = opt.fileType,
        fileType = _opt$fileType === undefined ? 'image' : _opt$fileType,
        _opt$header = opt.header,
        header = _opt$header === undefined ? {} : _opt$header,
        _opt$formData = opt.formData,
        formData = _opt$formData === undefined ? {} : _opt$formData,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.uploadFile({
        // 2.这里把参数传进去
        url: url,
        filePath: filePath,
        name: name,
        fileType: fileType,
        header: header,
        formData: formData,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/writeBLECharacteristicValue/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/cml-test/cml-component-dynamic/node_modules/chameleon-api-miniapp/src/interfaces/writeBLECharacteristicValue/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "SuccessFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "FailFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "CompleteFunc": {
      "input": ["CMLObject"],
      "output": "Void"
    },
    "OptType": {
      "deviceId": "String",
      "serviceId": "String",
      "characteristicId": "String",
      "value": "CMLObject",
      "success": "SuccessFunc",
      "fail": "FailFunc",
      "complete": "CompleteFunc"
    }
  },
  "interfaces": {
    "MethodsInterface": {
      "writeBLECharacteristicValue": {
        "input": ["OptType"],
        "output": "Void"
      }
    }
  },
  "classes": {
    "Method": ["MethodsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "writeBLECharacteristicValue",
    value: function writeBLECharacteristicValue(opt) {
      wx.writeBLECharacteristicValue(opt);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api-miniapp/src/interfaces/writeBLECharacteristicValue/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = writeBLECharacteristicValue;

var _index = __webpack_require__("./node_modules/chameleon-api-miniapp/src/interfaces/writeBLECharacteristicValue/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function writeBLECharacteristicValue() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var noop = function noop(res) {};

    var _opt$deviceId = opt.deviceId,
        deviceId = _opt$deviceId === undefined ? '' : _opt$deviceId,
        _opt$serviceId = opt.serviceId,
        serviceId = _opt$serviceId === undefined ? '' : _opt$serviceId,
        _opt$characteristicId = opt.characteristicId,
        characteristicId = _opt$characteristicId === undefined ? '' : _opt$characteristicId,
        _opt$value = opt.value,
        value = _opt$value === undefined ? '' : _opt$value,
        _opt$success = opt.success,
        success = _opt$success === undefined ? noop : _opt$success,
        _opt$fail = opt.fail,
        fail = _opt$fail === undefined ? noop : _opt$fail,
        _opt$complete = opt.complete,
        complete = _opt$complete === undefined ? noop : _opt$complete;


    _index2.default.writeBLECharacteristicValue({
        // 2.这里把参数传进去
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: value,
        success: success,
        fail: fail,
        complete: complete
    });
}

/***/ }),

/***/ "./src/assets/images/chameleon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/chameleon_83ee00e.png";

/***/ }),

/***/ "./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");
var __cml__script = __webpack_require__("../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['pages/index/index'] = __cml__script;


/***/ })

},["./src/pages/index/index.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['pages/index/index'];