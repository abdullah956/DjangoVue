"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevue_games"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/MathGame.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/MathGame.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MathGame',\n  data() {\n    return {\n      userName: '',\n      score: 0\n    };\n  },\n  methods: {\n    async recordScore() {\n      try {\n        // Check if userName is empty\n        if (!this.userName.trim()) {\n          console.error(\"User name is required.\");\n          return; // Exit the function early if userName is empty\n        }\n\n        // Prepare data for the request\n        const data = {\n          user_name: this.userName,\n          score: this.score,\n          game: \"MATH\"\n        };\n\n        // Send POST request to the backend\n        const response = await this.axios.post(\"/record-score/\", data);\n        console.log(response.data);\n      } catch (error) {\n        console.error(\"Error recording score:\", error);\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9hcHAvTWF0aEdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1nYW1lcy8uL3NyYy9hcHAvTWF0aEdhbWUudnVlPzFhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICB0aGlzIGlzIG1hdGggZmlsZVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGZvcj1cInVzZXItbmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXItbmFtZVwiIGlkPVwidXNlci1uYW1lXCIgdi1tb2RlbD1cInVzZXJOYW1lXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgZm9yPVwic2NvcmVcIj5TY29yZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNjb3JlXCIgaWQ9XCJzY29yZVwiIHYtbW9kZWw9XCJzY29yZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gQGNsaWNrPVwicmVjb3JkU2NvcmVcIj5SZWNvcmQgU2NvcmU8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuZGl2LGxhYmVse1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG59XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ01hdGhHYW1lJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNjb3JlOiAwIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7IFxyXG4gICAgICAgIGFzeW5jIHJlY29yZFNjb3JlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB1c2VyTmFtZSBpcyBlbXB0eVxyXG4gICAgICAgIGlmICghdGhpcy51c2VyTmFtZS50cmltKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVzZXIgbmFtZSBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gRXhpdCB0aGUgZnVuY3Rpb24gZWFybHkgaWYgdXNlck5hbWUgaXMgZW1wdHlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJlcGFyZSBkYXRhIGZvciB0aGUgcmVxdWVzdFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJfbmFtZTogdGhpcy51c2VyTmFtZSxcclxuICAgICAgICAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXHJcbiAgICAgICAgICAgIGdhbWU6IFwiTUFUSFwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gU2VuZCBQT1NUIHJlcXVlc3QgdG8gdGhlIGJhY2tlbmRcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MucG9zdChcIi9yZWNvcmQtc2NvcmUvXCIsIGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVjb3JkaW5nIHNjb3JlOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICB9LFxyXG4gIH1cclxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/MathGame.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/MathGame.vue?vue&type=template&id=9c12407e":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/MathGame.vue?vue&type=template&id=9c12407e ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, \" this is math file \", -1 /* HOISTED */);\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"user-name\"\n}, \"Username\", -1 /* HOISTED */);\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"score\"\n}, \"Score\", -1 /* HOISTED */);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    name: \"user-name\",\n    id: \"user-name\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.userName = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.userName]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"number\",\n    name: \"score\",\n    id: \"score\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.score = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.score]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.recordScore && $options.recordScore(...args))\n  }, \"Record Score\")])], 64 /* STABLE_FRAGMENT */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvYXBwL01hdGhHYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YzEyNDA3ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTs7QUFWQTtBQU9BO0FBQUE7QUFBQTtBQVBBO0FBT0E7QUFJQTtBQUFBO0FBQUE7QUFYQTtBQVdBO0FBRUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1nYW1lcy8uL3NyYy9hcHAvTWF0aEdhbWUudnVlPzFhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICB0aGlzIGlzIG1hdGggZmlsZVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGZvcj1cInVzZXItbmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXItbmFtZVwiIGlkPVwidXNlci1uYW1lXCIgdi1tb2RlbD1cInVzZXJOYW1lXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgZm9yPVwic2NvcmVcIj5TY29yZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNjb3JlXCIgaWQ9XCJzY29yZVwiIHYtbW9kZWw9XCJzY29yZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gQGNsaWNrPVwicmVjb3JkU2NvcmVcIj5SZWNvcmQgU2NvcmU8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuZGl2LGxhYmVse1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG59XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ01hdGhHYW1lJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNjb3JlOiAwIFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7IFxyXG4gICAgICAgIGFzeW5jIHJlY29yZFNjb3JlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB1c2VyTmFtZSBpcyBlbXB0eVxyXG4gICAgICAgIGlmICghdGhpcy51c2VyTmFtZS50cmltKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVzZXIgbmFtZSBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gRXhpdCB0aGUgZnVuY3Rpb24gZWFybHkgaWYgdXNlck5hbWUgaXMgZW1wdHlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJlcGFyZSBkYXRhIGZvciB0aGUgcmVxdWVzdFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJfbmFtZTogdGhpcy51c2VyTmFtZSxcclxuICAgICAgICAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXHJcbiAgICAgICAgICAgIGdhbWU6IFwiTUFUSFwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gU2VuZCBQT1NUIHJlcXVlc3QgdG8gdGhlIGJhY2tlbmRcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MucG9zdChcIi9yZWNvcmQtc2NvcmUvXCIsIGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVjb3JkaW5nIHNjb3JlOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICB9LFxyXG4gIH1cclxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/MathGame.vue?vue&type=template&id=9c12407e\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b0e27be518ef267b"; }
/******/ }();
/******/ 
/******/ }
);