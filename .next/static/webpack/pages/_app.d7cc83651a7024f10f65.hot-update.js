"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_akshaybhopani_GitHub_Confluence_r_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_Components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/Components/Navbar */ \"./pages/Components/Navbar.js\");\n/* harmony import */ var _pages_Components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pages/Components/Footer */ \"./pages/Components/Footer.js\");\n/* harmony import */ var _ThemeSwtch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeSwtch.js */ \"./pages/ThemeSwtch.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/akshaybhopani/GitHub/Confluence-r/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_akshaybhopani_GitHub_Confluence_r_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n //nprogress module\n\n //styles of nprogress\n//Binding events. \n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_6___default().events.on('routeChangeStart', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default().start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_6___default().events.on('routeChangeComplete', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default().done();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_6___default().events.on('routeChangeError', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_8___default().done();\n});\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      theme = _useState[0],\n      settheme = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"link\", {\n        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"title\", {\n        children: \"Confluence-r\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"We define ourselves as a digital marketing agency that is made up of dynamic thinkers, creative producers, and new age content developers who are able to understand and analyse demographics and real world user experiences.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"link\", {\n        rel: \"canonical\",\n        href: \"https://confluence-r.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"meta\", {\n        name: \"keywords\",\n        content: \"Digital Marketing Agency Services, Best Digital Marketing Agency In Mumbai, Digital Marketing Services In Mumbai, Digital Marketing Agency For Small Business\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_pages_Components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n      theme: theme,\n      settheme: settheme\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ThemeSwtch_js__WEBPACK_IMPORTED_MODULE_5__.default, {\n      theme: theme,\n      settheme: settheme\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_pages_Components_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 3\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MyApp, \"5hc2L1X3llqTAhPociIVHzvhVXI=\");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDbUM7O0NBQ0Q7QUFFbEM7Ozs7QUFDQUssNERBQUEsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQUEsU0FBTUUsc0RBQUEsRUFBTjtBQUFBLENBQXJDO0FBQStERiw0REFBQSxDQUFpQixxQkFBakIsRUFBd0M7QUFBQSxTQUFNRSxxREFBQSxFQUFOO0FBQUEsQ0FBeEM7QUFBaUVGLDREQUFBLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1FLHFEQUFBLEVBQU47QUFBQSxDQUFyQzs7QUFFaEksU0FBU0ssS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQ3hDLGtCQUEwQmQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0Msc0JBQ0E7QUFBQSw0QkFDQSwrREFBQyxrREFBRDtBQUFBLDhCQUNBO0FBQU0sWUFBSSxFQUFDLDRFQUFYO0FBQXdGLFdBQUcsRUFBQztBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBR0E7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLGVBSUE7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBLGVBS0E7QUFBTSxXQUFHLEVBQUMsV0FBVjtBQUFzQixZQUFJLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBLGVBTUE7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBU0EsK0RBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRBLGVBVUEsK0RBQUMsU0FBRCxrQ0FBZUYsU0FBZjtBQUEwQixXQUFLLEVBQUVDLEtBQWpDO0FBQXdDLGNBQVEsRUFBRUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZBLGVBV0EsK0RBQUMsbURBQUQ7QUFBYSxXQUFLLEVBQUVELEtBQXBCO0FBQTJCLGNBQVEsRUFBRUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhBLGVBWUEsK0RBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpBO0FBQUEsa0JBREE7QUFnQkQ7O0dBbEJRSjs7S0FBQUE7QUFvQlQsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIvcGFnZXMvQ29tcG9uZW50cy9OYXZiYXJcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiL3BhZ2VzL0NvbXBvbmVudHMvRm9vdGVyXCJcbmltcG9ydCBUaGVtZVN3aXRjaCBmcm9tICcuL1RoZW1lU3d0Y2guanMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7IC8vbnByb2dyZXNzIG1vZHVsZVxuaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7IC8vc3R5bGVzIG9mIG5wcm9ncmVzc1xuXG4vL0JpbmRpbmcgZXZlbnRzLiBcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7IFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTsgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpOyAgXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRjb25zdCBbdGhlbWUsIHNldHRoZW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICByZXR1cm4gKFxuICA8PlxuICA8SGVhZD5cbiAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE0LjAvY3NzL2FsbC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgPHRpdGxlPkNvbmZsdWVuY2UtcjwvdGl0bGU+XG4gIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldlIGRlZmluZSBvdXJzZWx2ZXMgYXMgYSBkaWdpdGFsIG1hcmtldGluZyBhZ2VuY3kgdGhhdCBpcyBtYWRlIHVwIG9mIGR5bmFtaWMgdGhpbmtlcnMsIGNyZWF0aXZlIHByb2R1Y2VycywgYW5kIG5ldyBhZ2UgY29udGVudCBkZXZlbG9wZXJzIHdobyBhcmUgYWJsZSB0byB1bmRlcnN0YW5kIGFuZCBhbmFseXNlIGRlbW9ncmFwaGljcyBhbmQgcmVhbCB3b3JsZCB1c2VyIGV4cGVyaWVuY2VzLlwiLz5cbiAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vY29uZmx1ZW5jZS1yLmNvbVwiLz5cbiAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkRpZ2l0YWwgTWFya2V0aW5nIEFnZW5jeSBTZXJ2aWNlcywgQmVzdCBEaWdpdGFsIE1hcmtldGluZyBBZ2VuY3kgSW4gTXVtYmFpLCBEaWdpdGFsIE1hcmtldGluZyBTZXJ2aWNlcyBJbiBNdW1iYWksIERpZ2l0YWwgTWFya2V0aW5nIEFnZW5jeSBGb3IgU21hbGwgQnVzaW5lc3NcIi8+XG4gIDwvSGVhZD5cbiAgPE5hdmJhci8+XG4gIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gdGhlbWU9e3RoZW1lfSBzZXR0aGVtZT17c2V0dGhlbWV9Lz5cbiAgPFRoZW1lU3dpdGNoIHRoZW1lPXt0aGVtZX0gc2V0dGhlbWU9e3NldHRoZW1lfS8+XG4gIDxGb290ZXIvPlxuICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiRm9vdGVyIiwiVGhlbWVTd2l0Y2giLCJSb3V0ZXIiLCJIZWFkIiwiTlByb2dyZXNzIiwiZXZlbnRzIiwib24iLCJzdGFydCIsImRvbmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwic2V0dGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});