"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f786b0c3474c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MzExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImY3ODZiMGMzNDc0Y1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/hooks/useBrowser.js":
/*!*************************************!*\
  !*** ./src/lib/hooks/useBrowser.js ***!
  \*************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useBrowser: function() { return /* binding */ useBrowser; }\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var _useLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLang */ \"(app-pages-browser)/./src/lib/hooks/useLang.js\");\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-debounce */ \"(app-pages-browser)/./node_modules/use-debounce/dist/index.module.js\");\n/* harmony import */ var _services_searchMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/searchMedia */ \"(app-pages-browser)/./src/lib/services/searchMedia.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction useBrowser() {\n    _s();\n    const lang = (0,_useLang__WEBPACK_IMPORTED_MODULE_2__.useLang)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const { mediaType } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useParams)();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isFocus, setIsFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const [media, setMedia] = useState()\n    const [query] = (0,use_debounce__WEBPACK_IMPORTED_MODULE_4__.useDebounce)(value, 200);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMedia = async ()=>{\n            const { media: movies, totalPages } = await (0,_services_searchMedia__WEBPACK_IMPORTED_MODULE_3__.searchMedia)({\n                searchType: \"byName\",\n                mediaType: \"movie\",\n                query,\n                lang,\n                quantity: 10\n            });\n            console.log(movies);\n        // return media\n        };\n        const asd = getMedia();\n    }, [\n        value\n    ]);\n    const debounced = (0,use_debounce__WEBPACK_IMPORTED_MODULE_4__.useDebouncedCallback)(()=>{\n        if (value.length < 3) return;\n        handleVisible(true);\n    }, 300);\n    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{\n        e.preventDefault();\n        if (value.length < 3) return;\n        const searchQuery = \"/\".concat(lang, \"/\").concat(mediaType || \"movie\", \"/search?query=\").concat(value);\n        router.push(searchQuery);\n    }, []);\n    const handleValue = (e)=>{\n        setValue(e);\n        debounced();\n    };\n    const handleVisible = (boolean)=>{\n        setIsVisible(boolean);\n    };\n    const handleFocus = (boolean)=>{\n        setIsFocus(boolean);\n    };\n    return {\n        handleSubmit,\n        handleValue,\n        handleFocus,\n        handleVisible,\n        value,\n        isFocus,\n        isVisible,\n        lang\n    };\n}\n_s(useBrowser, \"u/HUVxFIy+q9OMWx811VJznhRZg=\", false, function() {\n    return [\n        _useLang__WEBPACK_IMPORTED_MODULE_2__.useLang,\n        next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_0__.useParams,\n        use_debounce__WEBPACK_IMPORTED_MODULE_4__.useDebounce,\n        use_debounce__WEBPACK_IMPORTED_MODULE_4__.useDebouncedCallback\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvaG9va3MvdXNlQnJvd3Nlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO0FBQ0U7QUFDckI7QUFDNkI7QUFDWDtBQUU5QyxTQUFTUzs7SUFDZCxNQUFNQyxPQUFPTCxpREFBT0E7SUFDcEIsTUFBTU0sU0FBU1YsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVcsU0FBUyxFQUFFLEdBQUdaLDBEQUFTQTtJQUMvQixNQUFNLENBQUNhLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMzQyx1Q0FBdUM7SUFDdkMsTUFBTSxDQUFDZSxNQUFNLEdBQUdiLHlEQUFXQSxDQUFDTyxPQUFPO0lBRW5DVixnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixXQUFXO1lBQ2YsTUFBTSxFQUFFQyxPQUFPQyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHLE1BQU1mLGtFQUFXQSxDQUFDO2dCQUFFZ0IsWUFBWTtnQkFBVVosV0FBVztnQkFBU087Z0JBQU9UO2dCQUFNZSxVQUFVO1lBQUc7WUFDOUhDLFFBQVFDLEdBQUcsQ0FBQ0w7UUFFWixlQUFlO1FBQ2pCO1FBQ0EsTUFBTU0sTUFBTVI7SUFDZCxHQUFHO1FBQUNQO0tBQU07SUFFVixNQUFNZ0IsWUFBWXRCLGtFQUFvQkEsQ0FBQztRQUNyQyxJQUFJTSxNQUFNaUIsTUFBTSxHQUFHLEdBQUc7UUFDdEJDLGNBQWM7SUFDaEIsR0FBRztJQUVILE1BQU1DLGVBQWU5QixrREFBV0EsQ0FBQyxDQUFDK0I7UUFDaENBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSXJCLE1BQU1pQixNQUFNLEdBQUcsR0FBRztRQUN0QixNQUFNSyxjQUFjLElBQVl2QixPQUFSRixNQUFLLEtBQXdDRyxPQUFyQ0QsYUFBYSxTQUFRLGtCQUFzQixPQUFOQztRQUNyRUYsT0FBT3lCLElBQUksQ0FBQ0Q7SUFDZCxHQUFHLEVBQUU7SUFFTCxNQUFNRSxjQUFjLENBQUNKO1FBQ25CbkIsU0FBU21CO1FBQ1RKO0lBQ0Y7SUFFQSxNQUFNRSxnQkFBZ0IsQ0FBQ087UUFDckJwQixhQUFhb0I7SUFDZjtJQUVBLE1BQU1DLGNBQWMsQ0FBQ0Q7UUFDbkJ0QixXQUFXc0I7SUFDYjtJQUVBLE9BQU87UUFBRU47UUFBY0s7UUFBYUU7UUFBYVI7UUFBZWxCO1FBQU9FO1FBQVNFO1FBQVdQO0lBQUs7QUFDbEc7R0E5Q2dCRDs7UUFDREosNkNBQU9BO1FBQ0xKLHNEQUFTQTtRQUNGRCxzREFBU0E7UUFLZk0scURBQVdBO1FBWVRDLDhEQUFvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9ob29rcy91c2VCcm93c2VyLmpzP2ZiMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUxhbmcgfSBmcm9tICcuL3VzZUxhbmcnXHJcbmltcG9ydCB7IHVzZURlYm91bmNlLCB1c2VEZWJvdW5jZWRDYWxsYmFjayB9IGZyb20gJ3VzZS1kZWJvdW5jZSdcclxuaW1wb3J0IHsgc2VhcmNoTWVkaWEgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWFyY2hNZWRpYSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCcm93c2VyICgpIHtcclxuICBjb25zdCBsYW5nID0gdXNlTGFuZygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IG1lZGlhVHlwZSB9ID0gdXNlUGFyYW1zKClcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpc0ZvY3VzLCBzZXRJc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAvLyBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbcXVlcnldID0gdXNlRGVib3VuY2UodmFsdWUsIDIwMClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldE1lZGlhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IG1lZGlhOiBtb3ZpZXMsIHRvdGFsUGFnZXMgfSA9IGF3YWl0IHNlYXJjaE1lZGlhKHsgc2VhcmNoVHlwZTogJ2J5TmFtZScsIG1lZGlhVHlwZTogJ21vdmllJywgcXVlcnksIGxhbmcsIHF1YW50aXR5OiAxMCB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhtb3ZpZXMpXHJcblxyXG4gICAgICAvLyByZXR1cm4gbWVkaWFcclxuICAgIH1cclxuICAgIGNvbnN0IGFzZCA9IGdldE1lZGlhKClcclxuICB9LCBbdmFsdWVdKVxyXG5cclxuICBjb25zdCBkZWJvdW5jZWQgPSB1c2VEZWJvdW5jZWRDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMykgcmV0dXJuXHJcbiAgICBoYW5kbGVWaXNpYmxlKHRydWUpXHJcbiAgfSwgMzAwKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMykgcmV0dXJuXHJcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IGAvJHtsYW5nfS8ke21lZGlhVHlwZSB8fCAnbW92aWUnfS9zZWFyY2g/cXVlcnk9JHt2YWx1ZX1gXHJcbiAgICByb3V0ZXIucHVzaChzZWFyY2hRdWVyeSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlVmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZSlcclxuICAgIGRlYm91bmNlZCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVWaXNpYmxlID0gKGJvb2xlYW4pID0+IHtcclxuICAgIHNldElzVmlzaWJsZShib29sZWFuKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0SXNGb2N1cyhib29sZWFuKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgaGFuZGxlU3VibWl0LCBoYW5kbGVWYWx1ZSwgaGFuZGxlRm9jdXMsIGhhbmRsZVZpc2libGUsIHZhbHVlLCBpc0ZvY3VzLCBpc1Zpc2libGUsIGxhbmcgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTGFuZyIsInVzZURlYm91bmNlIiwidXNlRGVib3VuY2VkQ2FsbGJhY2siLCJzZWFyY2hNZWRpYSIsInVzZUJyb3dzZXIiLCJsYW5nIiwicm91dGVyIiwibWVkaWFUeXBlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlzRm9jdXMiLCJzZXRJc0ZvY3VzIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwicXVlcnkiLCJnZXRNZWRpYSIsIm1lZGlhIiwibW92aWVzIiwidG90YWxQYWdlcyIsInNlYXJjaFR5cGUiLCJxdWFudGl0eSIsImNvbnNvbGUiLCJsb2ciLCJhc2QiLCJkZWJvdW5jZWQiLCJsZW5ndGgiLCJoYW5kbGVWaXNpYmxlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoUXVlcnkiLCJwdXNoIiwiaGFuZGxlVmFsdWUiLCJib29sZWFuIiwiaGFuZGxlRm9jdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/hooks/useBrowser.js\n"));

/***/ })

});