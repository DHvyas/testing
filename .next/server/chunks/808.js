exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 4032:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1691);
/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_product_module_css__WEBPACK_IMPORTED_MODULE_3__);






function Product(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardBig),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardBig_hero),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().herodiv_img),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
            src: props.image,
            alt: "image",
            width: 150,
            height: 150
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardBig_name),
          children: props.name
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().prod_col),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().prod_desc),
          children: props.desc
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          children: "Duration :"
        }), props.duration && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().prod_dur),
          children: props.duration.map((duration, id) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            children: duration
          }, id))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().prod_price),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: "Price : "
          }), props.price]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_product_module_css__WEBPACK_IMPORTED_MODULE_3___default().prod_btn),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            children: "Add to Cart"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            children: "Book Now"
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ 1691:
/***/ (function(module) {

// Exports
module.exports = {
	"prod_col": "product_prod_col__V4eCp",
	"prod_dur": "product_prod_dur__3NLyH",
	"prod_price": "product_prod_price__BVdkV",
	"prod_btn": "product_prod_btn__3pBqT",
	"prod_desc": "product_prod_desc__2rdPm",
	"cardBig_name": "product_cardBig_name__3QHgF",
	"cardBig": "product_cardBig__2h9MX",
	"cardBig_hero": "product_cardBig_hero__1ri7O",
	"herodiv_img": "product_herodiv_img__2fItu"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;