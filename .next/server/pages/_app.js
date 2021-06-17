(function() {
var exports = {};
exports.id = 888;
exports.ids = [888,332,357,182,187,766];
exports.modules = {

/***/ 776:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: external "next-i18next"
var external_next_i18next_namespaceObject = require("next-i18next");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./pages/components/navbar.jsx
var navbar = __webpack_require__(9354);
// EXTERNAL MODULE: ./pages/compoundComponents/leftSidebar.jsx
var leftSidebar = __webpack_require__(5562);
;// CONCATENATED MODULE: ./pages/_app.jsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps,
  router
}) {
  const {
    0: navToggle,
    1: setNavToggle
  } = (0,external_react_.useState)(false);
  const {
    0: onRight,
    1: setOnRight
  } = (0,external_react_.useState)(false);

  const close_sidebar = () => {
    setNavToggle(false);
  };

  const reset_sidebar_side = () => {
    setOnRight(false);
  };

  const open_sidebar = (right = false) => {
    setOnRight(right);
    setNavToggle(true);
  };

  const sidebarProps = {
    navToggle,
    onRight,
    close_sidebar,
    reset_sidebar_side
  };
  const navbarProps = {
    navToggle,
    open_sidebar
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(leftSidebar.default, _objectSpread({}, sidebarProps)), /*#__PURE__*/jsx_runtime_.jsx(navbar.default, _objectSpread({}, navbarProps)), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
      initial: "pageInitial",
      animate: navToggle ? 'overlay' : 'pageAnimate',
      variants: {
        pageInitial: {
          background: '',
          opacity: 0
        },
        overlay: {
          opacity: 0.5
        },
        pageAnimate: {
          opacity: 1
        }
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "main-container",
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        })
      })
    }, router.route)]
  });
}

/* harmony default export */ var _app = ((0,external_next_i18next_namespaceObject.appWithTranslation)(MyApp));

/***/ }),

/***/ 762:
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 7789:
/***/ (function(module) {

"use strict";
module.exports = require("react-i18next");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,675,664,573,959,354], function() { return __webpack_exec__(776); });
module.exports = __webpack_exports__;

})();