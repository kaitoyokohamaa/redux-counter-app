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

/***/ "./src/redux/counter/slice.ts":
/*!************************************!*\
  !*** ./src/redux/counter/slice.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": function() { return /* binding */ add; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar counter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'coutner',\n  initialState: {\n    count: 0\n  },\n  reducers: {\n    add: function add(state, action) {\n      state += action.payload;\n    }\n  }\n});\nvar add = counter.actions.add;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (counter.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvY291bnRlci9zbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLElBQU1DLE9BQU8sR0FBR0QsNkRBQVcsQ0FBQztBQUMxQkUsRUFBQUEsSUFBSSxFQUFFLFNBRG9CO0FBRTFCQyxFQUFBQSxZQUFZLEVBQUU7QUFBQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQVIsR0FGWTtBQUcxQkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEdBRFEsZUFDSkMsS0FESSxFQUNHQyxNQURILEVBQ1c7QUFDakJELE1BQUFBLEtBQUssSUFBSUMsTUFBTSxDQUFDQyxPQUFoQjtBQUNEO0FBSE87QUFIZ0IsQ0FBRCxDQUEzQjtBQVVPLElBQU9ILEdBQVAsR0FBY0wsT0FBTyxDQUFDUyxPQUF0QixDQUFPSixHQUFQOztBQUNQLCtEQUFlTCxPQUFPLENBQUNVLE9BQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9jb3VudGVyL3NsaWNlLnRzPzMxNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuY29uc3QgY291bnRlciA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2NvdXRuZXInLFxuICBpbml0aWFsU3RhdGU6IHtjb3VudDogMH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgY29uc3Qge2FkZH0gPSBjb3VudGVyLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXIucmVkdWNlclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY291bnRlciIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjb3VudCIsInJlZHVjZXJzIiwiYWRkIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/counter/slice.ts\n");

/***/ })

});