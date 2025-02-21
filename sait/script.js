 (function (modules) {
 
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }

  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };

  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/js/main.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/core-js/internals/a-function.js":
      /*!******************************************************!*\
 
      /***/ function (module, exports) {
        module.exports = function (it) {
          if (typeof it != "function") {
            throw TypeError(String(it) + " is not a function");
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/advance-string-index.js":
      
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var charAt = __webpack_require__(
          /*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js"
        ).charAt;

        // `AdvanceStringIndex` abstract operation
        // https://tc39.github.io/ecma262/#sec-advancestringindex
        module.exports = function (S, index, unicode) {
          return index + (unicode ? charAt(S, index).length : 1);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/an-instance.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/an-instance.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (it, Constructor, name) {
          if (!(it instanceof Constructor)) {
            throw TypeError(
              "Incorrect " + (name ? name + " " : "") + "invocation"
            );
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/an-object.js":
      /*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/an-object.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );

        module.exports = function (it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + " is not an object");
          }
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/array-for-each.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/array-for-each.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $forEach = __webpack_require__(
          /*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js"
        ).forEach;
        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js"
        );

        // `Array.prototype.forEach` method implementation
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
        module.exports = sloppyArrayMethod("forEach")
          ? function forEach(callbackfn /* , thisArg */) {
              return $forEach(
                this,
                callbackfn,
                arguments.length > 1 ? arguments[1] : undefined
              );
            }
          : [].forEach;

        /***/
      },

    /***/ "./node_modules/core-js/internals/array-includes.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/array-includes.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js"
        );

        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };

        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false),
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/array-iteration.js":
      /*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/array-iteration.js ***!
        \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var bind = __webpack_require__(
          /*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js"
        );
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js"
        );
        var toObject = __webpack_require__(
          /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var arraySpeciesCreate = __webpack_require__(
          /*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js"
        );

        var push = [].push;

        // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
        var createMethod = function (TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function ($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = IndexedObject(O);
            var boundFunction = bind(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP
              ? create($this, length)
              : IS_FILTER
              ? create($this, 0)
              : undefined;
            var value, result;
            for (; length > index; index++)
              if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);
                if (TYPE) {
                  if (IS_MAP) target[index] = result; // map
                  else if (result)
                    switch (TYPE) {
                      case 3:
                        return true; // some
                      case 5:
                        return value; // find
                      case 6:
                        return index; // findIndex
                      case 2:
                        push.call(target, value); // filter
                    }
                  else if (IS_EVERY) return false; // every
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };

        module.exports = {
          map: createMethod(1),
         
          filter: createMethod(2),
         
          some: createMethod(3),
      
          every: createMethod(4),
         
          find: createMethod(5),
         
          findIndex: createMethod(6),
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
    
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
           "./node_modules/core-js/internals/fails.js"
        );
        var wellKnownSymbol = __webpack_require__(
           "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var V8_VERSION = __webpack_require__(
          /*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js"
        );

        var SPECIES = wellKnownSymbol("species");

        module.exports = function (METHOD_NAME) {
          
          return (
            V8_VERSION >= 51 ||
            !fails(function () {
              var array = [];
              var constructor = (array.constructor = {});
              constructor[SPECIES] = function () {
                return { foo: 1 };
              };
              return array[METHOD_NAME](Boolean).foo !== 1;
            })
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/array-species-create.js":
     
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var isArray = __webpack_require__(
          /*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var SPECIES = wellKnownSymbol("species");

        // `ArraySpeciesCreate` abstract operation
        // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
        module.exports = function (originalArray, length) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (typeof C == "function" && (C === Array || isArray(C.prototype)))
              C = undefined;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }
          return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/bind-context.js":
      
      /***/ function (module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(
          /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js"
        );

        // optional / simple context binding
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 0:
              return function () {
                return fn.call(that);
              };
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function (/* ...args */) {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
    
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );

        // call something on iterator step with safe closing on error
        module.exports = function (iterator, fn, value, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (error) {
            var returnMethod = iterator["return"];
            if (returnMethod !== undefined)
              anObject(returnMethod.call(iterator));
            throw error;
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
    
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var ITERATOR = wellKnownSymbol("iterator");
        var SAFE_CLOSING = false;

        try {
          var called = 0;
          var iteratorWithReturn = {
            next: function () {
              return { done: !!called++ };
            },
            return: function () {
              SAFE_CLOSING = true;
            },
          };
          iteratorWithReturn[ITERATOR] = function () {
            return this;
          };
          // eslint-disable-next-line no-throw-literal
          Array.from(iteratorWithReturn, function () {
            throw 2;
          });
        } catch (error) {
          /* empty */
        }

        module.exports = function (exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function () {
              return {
                next: function () {
                  return { done: (ITERATION_SUPPORT = true) };
                },
              };
            };
            exec(object);
          } catch (error) {
            /* empty */
          }
          return ITERATION_SUPPORT;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/classof-raw.js":
     
      /***/ function (module, exports) {
        var toString = {}.toString;

        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/classof.js":
    
      /***/ function (module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js"
        );
        var classofRaw = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        // ES3 wrong here
        var CORRECT_ARGUMENTS =
          classofRaw(
            (function () {
              return arguments;
            })()
          ) == "Arguments";

        // fallback for IE11 Script Access Denied error
        var tryGet = function (it, key) {
          try {
            return it[key];
          } catch (error) {
            /* empty */
          }
        };

        // getting tag from ES6+ `Object.prototype.toString`
        module.exports = TO_STRING_TAG_SUPPORT
          ? classofRaw
          : function (it) {
              var O, tag, result;
              return it === undefined
                ? "Undefined"
                : it === null
                ? "Null"
                : // @@toStringTag case
                typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG)) ==
                  "string"
                ? tag
                : // builtinTag case
                CORRECT_ARGUMENTS
                ? classofRaw(O)
                : // ES3 arguments fallback
                (result = classofRaw(O)) == "Object" &&
                  typeof O.callee == "function"
                ? "Arguments"
                : result;
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
    
      /***/ function (module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var ownKeys = __webpack_require__(
          /*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js"
        );
        var getOwnPropertyDescriptorModule = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );

        module.exports = function (target, source) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key))
              defineProperty(
                target,
                key,
                getOwnPropertyDescriptor(source, key)
              );
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/create-html.js":
    
      /***/ function (module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );

        var quot = /"/g;

     
        module.exports = function (string, tag, attribute, value) {
          var S = String(requireObjectCoercible(string));
          var p1 = "<" + tag;
          if (attribute !== "")
            p1 +=
              " " +
              attribute +
              '="' +
              String(value).replace(quot, "&quot;") +
              '"';
          return p1 + ">" + S + "</" + tag + ">";
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
      
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js"
        );

        module.exports = DESCRIPTORS
          ? function (object, key, value) {
              return definePropertyModule.f(
                object,
                key,
                createPropertyDescriptor(1, value)
              );
            }
          : function (object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/create-property-descriptor.js":
     
      /***/ function (module, exports) {
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/create-property.js":
     
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js"
        );

        module.exports = function (object, key, value) {
          var propertyKey = toPrimitive(key);
          if (propertyKey in object)
            definePropertyModule.f(
              object,
              propertyKey,
              createPropertyDescriptor(0, value)
            );
          else object[propertyKey] = value;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/descriptors.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/descriptors.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        // Thank's IE8 for his funny defineProperty
        module.exports = !fails(function () {
          return (
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/document-create-element.js":
      /*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/document-create-element.js ***!
        \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );

        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);

        module.exports = function (it) {
          return EXISTS ? document.createElement(it) : {};
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/dom-iterables.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/dom-iterables.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // iterable DOM collections
        // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
        module.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/enum-bug-keys.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // IE8- don't enum bug keys
        module.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];

        /***/
      },

    /***/ "./node_modules/core-js/internals/export.js":
      /*!**************************************************!*\
        !*** ./node_modules/core-js/internals/export.js ***!
        \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
        ).f;
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"
        );
        var copyConstructorProperties = __webpack_require__(
          /*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js"
        );
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js"
        );

        /*
        options.target      - name of the target object
        options.global      - target is the global object
        options.stat        - export as static methods of target
        options.proto       - export as prototype methods of target
        options.real        - real prototype method for the `pure` version
        options.forced      - export even if the native feature is available
        options.bind        - bind methods to the target, required for the `pure` version
        options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
        options.unsafe      - use the simple assignment of property instead of delete + defineProperty
        options.sham        - add a flag to not completely full polyfills
        options.enumerable  - export as enumerable property
        options.noTargetGet - prevent calling a getter on target
      */
        module.exports = function (options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global;
          } else if (STATIC) {
            target = global[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global[TARGET] || {}).prototype;
          }
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else targetProperty = target[key];
              FORCED = isForced(
                GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key,
                options.forced
              );
              // contained in target
              if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty === typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              // add a flag to not completely full polyfills
              if (options.sham || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty(sourceProperty, "sham", true);
              }
              // extend global
              redefine(target, key, sourceProperty, options);
            }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/fails.js":
      /*!*************************************************!*\
        !*** ./node_modules/core-js/internals/fails.js ***!
        \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
      /*!******************************************************************************!*\
        !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
        \******************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var regexpExec = __webpack_require__(
          /*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js"
        );

        var SPECIES = wellKnownSymbol("species");

        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
          // #replace needs built-in support for named groups.
          // #match works fine because it just return the exec results, even if it has
          // a "grops" property.
          var re = /./;
          re.exec = function () {
            var result = [];
            result.groups = { a: "7" };
            return result;
          };
          return "".replace(re, "$<a>") !== "7";
        });

        // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
        // Weex JS has frozen built-in prototypes, so use try / catch wrapper
        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
          var re = /(?:)/;
          var originalExec = re.exec;
          re.exec = function () {
            return originalExec.apply(this, arguments);
          };
          var result = "ab".split(re);
          return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
        });

        module.exports = function (KEY, length, exec, sham) {
          var SYMBOL = wellKnownSymbol(KEY);

          var DELEGATES_TO_SYMBOL = !fails(function () {
            // String methods call symbol-named RegEp methods
            var O = {};
            O[SYMBOL] = function () {
              return 7;
            };
            return ""[KEY](O) != 7;
          });

          var DELEGATES_TO_EXEC =
            DELEGATES_TO_SYMBOL &&
            !fails(function () {
              // Symbol-named RegExp methods call .exec
              var execCalled = false;
              var re = /a/;

              if (KEY === "split") {
                // We can't use real regex here since it causes deoptimization
                // and serious performance degradation in V8
                // https://github.com/zloirock/core-js/issues/306
                re = {};
                // RegExp[@@split] doesn't call the regex's exec method, but first creates
                // a new one. We need to return the patched regex when creating the new one.
                re.constructor = {};
                re.constructor[SPECIES] = function () {
                  return re;
                };
                re.flags = "";
                re[SYMBOL] = /./[SYMBOL];
              }

              re.exec = function () {
                execCalled = true;
                return null;
              };

              re[SYMBOL]("");
              return !execCalled;
            });

          if (
            !DELEGATES_TO_SYMBOL ||
            !DELEGATES_TO_EXEC ||
            (KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
            (KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
          ) {
            var nativeRegExpMethod = /./[SYMBOL];
            var methods = exec(
              SYMBOL,
              ""[KEY],
              function (nativeMethod, regexp, str, arg2, forceStringMethod) {
                if (regexp.exec === regexpExec) {
                  if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                    // The native String method already delegates to @@method (this
                    // polyfilled function), leasing to infinite recursion.
                    // We avoid it by directly calling the native @@method method.
                    return {
                      done: true,
                      value: nativeRegExpMethod.call(regexp, str, arg2),
                    };
                  }
                  return {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2),
                  };
                }
                return { done: false };
              }
            );
            var stringMethod = methods[0];
            var regexMethod = methods[1];

            redefine(String.prototype, KEY, stringMethod);
            redefine(
              RegExp.prototype,
              SYMBOL,
              length == 2
                ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                  // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                  function (string, arg) {
                    return regexMethod.call(string, this, arg);
                  }
                : // 21.2.5.6 RegExp.prototype[@@match](string)
                  // 21.2.5.9 RegExp.prototype[@@search](string)
                  function (string) {
                    return regexMethod.call(string, this);
                  }
            );
            if (sham)
              createNonEnumerableProperty(
                RegExp.prototype[SYMBOL],
                "sham",
                true
              );
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/forced-string-html-method.js":
      /*!*********************************************************************!*\
        !*** ./node_modules/core-js/internals/forced-string-html-method.js ***!
        \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        // check the existence of a method, lowercase
        // of a tag and escaping quotes in arguments
        module.exports = function (METHOD_NAME) {
          return fails(function () {
            var test = ""[METHOD_NAME]('"');
            return test !== test.toLowerCase() || test.split('"').length > 3;
          });
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/forced-string-trim-method.js":
      /*!*********************************************************************!*\
        !*** ./node_modules/core-js/internals/forced-string-trim-method.js ***!
        \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var whitespaces = __webpack_require__(
          /*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js"
        );

        var non = "\u200B\u0085\u180E";

        // check that a method works with the correct list
        // of whitespaces and has a correct name
        module.exports = function (METHOD_NAME) {
          return fails(function () {
            return (
              !!whitespaces[METHOD_NAME]() ||
              non[METHOD_NAME]() != non ||
              whitespaces[METHOD_NAME].name !== METHOD_NAME
            );
          });
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/get-built-in.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/internals/get-built-in.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var path = __webpack_require__(
          /*! ../internals/path */ "./node_modules/core-js/internals/path.js"
        );
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );

        var aFunction = function (variable) {
          return typeof variable == "function" ? variable : undefined;
        };

        module.exports = function (namespace, method) {
          return arguments.length < 2
            ? aFunction(path[namespace]) || aFunction(global[namespace])
            : (path[namespace] && path[namespace][method]) ||
                (global[namespace] && global[namespace][method]);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/get-iterator-method.js":
      /*!***************************************************************!*\
        !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
        \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ../internals/classof */ "./node_modules/core-js/internals/classof.js"
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var ITERATOR = wellKnownSymbol("iterator");

        module.exports = function (it) {
          if (it != undefined)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/global.js":
      /*!**************************************************!*\
        !*** ./node_modules/core-js/internals/global.js ***!
        \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global) {
          var check = function (it) {
            return it && it.Math == Math && it;
          };

          // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
          module.exports =
            // eslint-disable-next-line no-undef
            check(typeof globalThis == "object" && globalThis) ||
            check(typeof window == "object" && window) ||
            check(typeof self == "object" && self) ||
            check(typeof global == "object" && global) ||
            // eslint-disable-next-line no-new-func
            Function("return this")();

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"
          )
        );

        /***/
      },

    /***/ "./node_modules/core-js/internals/has.js":
      /*!***********************************************!*\
        !*** ./node_modules/core-js/internals/has.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/hidden-keys.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/hidden-keys.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = {};

        /***/
      },

    /***/ "./node_modules/core-js/internals/host-report-errors.js":
      /*!**************************************************************!*\
        !*** ./node_modules/core-js/internals/host-report-errors.js ***!
        \**************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );

        module.exports = function (a, b) {
          var console = global.console;
          if (console && console.error) {
            arguments.length === 1 ? console.error(a) : console.error(a, b);
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/html.js":
      /*!************************************************!*\
        !*** ./node_modules/core-js/internals/html.js ***!
        \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );

        module.exports = getBuiltIn("document", "documentElement");

        /***/
      },

    /***/ "./node_modules/core-js/internals/ie8-dom-define.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var createElement = __webpack_require__(
          /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js"
        );

        // Thank's IE8 for his funny defineProperty
        module.exports =
          !DESCRIPTORS &&
          !fails(function () {
            return (
              Object.defineProperty(createElement("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });

        /***/
      },

    /***/ "./node_modules/core-js/internals/indexed-object.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/indexed-object.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );

        var split = "".split;

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (it) {
              return classof(it) == "String" ? split.call(it, "") : Object(it);
            }
          : Object;

        /***/
      },

    /***/ "./node_modules/core-js/internals/inspect-source.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/inspect-source.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var shared = __webpack_require__(
          /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js"
        );

        var functionToString = Function.toString;

        module.exports = shared("inspectSource", function (it) {
          return functionToString.call(it);
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/internal-state.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/internal-state.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__(
          /*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js"
        );
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var objectHas = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js"
        );
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"
        );

        var WeakMap = global.WeakMap;
        var set, get, has;

        var enforce = function (it) {
          return has(it) ? get(it) : set(it, {});
        };

        var getterFor = function (TYPE) {
          return function (it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };

        if (NATIVE_WEAK_MAP) {
          var store = new WeakMap();
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;
          set = function (it, metadata) {
            wmset.call(store, it, metadata);
            return metadata;
          };
          get = function (it) {
            return wmget.call(store, it) || {};
          };
          has = function (it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function (it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function (it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };
          has = function (it) {
            return objectHas(it, STATE);
          };
        }

        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
      /*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
        \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"
        );

        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;

        // check on default Array iterator
        module.exports = function (it) {
          return (
            it !== undefined &&
            (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-array.js":
      /*!****************************************************!*\
        !*** ./node_modules/core-js/internals/is-array.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );

        // `IsArray` abstract operation
        // https://tc39.github.io/ecma262/#sec-isarray
        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return classof(arg) == "Array";
          };

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-forced.js":
      /*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-forced.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        var replacement = /#|\.prototype\./;

        var isForced = function (feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL
            ? true
            : value == NATIVE
            ? false
            : typeof detection == "function"
            ? fails(detection)
            : !!detection;
        };

        var normalize = (isForced.normalize = function (string) {
          return String(string).replace(replacement, ".").toLowerCase();
        });

        var data = (isForced.data = {});
        var NATIVE = (isForced.NATIVE = "N");
        var POLYFILL = (isForced.POLYFILL = "P");

        module.exports = isForced;

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-ios.js":
      /*!**************************************************!*\
        !*** ./node_modules/core-js/internals/is-ios.js ***!
        \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var userAgent = __webpack_require__(
          /*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js"
        );

        module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-object.js":
      /*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-object.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (it) {
          return typeof it === "object"
            ? it !== null
            : typeof it === "function";
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-pure.js":
      /*!***************************************************!*\
        !*** ./node_modules/core-js/internals/is-pure.js ***!
        \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = false;

        /***/
      },

    /***/ "./node_modules/core-js/internals/is-regexp.js":
      /*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-regexp.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var MATCH = wellKnownSymbol("match");

        // `IsRegExp` abstract operation
        // https://tc39.github.io/ecma262/#sec-isregexp
        module.exports = function (it) {
          var isRegExp;
          return (
            isObject(it) &&
            ((isRegExp = it[MATCH]) !== undefined
              ? !!isRegExp
              : classof(it) == "RegExp")
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/iterate.js":
      /*!***************************************************!*\
        !*** ./node_modules/core-js/internals/iterate.js ***!
        \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var isArrayIteratorMethod = __webpack_require__(
          /*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var bind = __webpack_require__(
          /*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js"
        );
        var getIteratorMethod = __webpack_require__(
          /*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js"
        );
        var callWithSafeIterationClosing = __webpack_require__(
          /*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js"
        );

        var Result = function (stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };

        var iterate = (module.exports = function (
          iterable,
          fn,
          that,
          AS_ENTRIES,
          IS_ITERATOR
        ) {
          var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
          var iterator, iterFn, index, length, result, next, step;

          if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (typeof iterFn != "function")
              throw TypeError("Target is not iterable");
            // optimisation for array iterators
            if (isArrayIteratorMethod(iterFn)) {
              for (
                index = 0, length = toLength(iterable.length);
                length > index;
                index++
              ) {
                result = AS_ENTRIES
                  ? boundFunction(
                      anObject((step = iterable[index]))[0],
                      step[1]
                    )
                  : boundFunction(iterable[index]);
                if (result && result instanceof Result) return result;
              }
              return new Result(false);
            }
            iterator = iterFn.call(iterable);
          }

          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            result = callWithSafeIterationClosing(
              iterator,
              boundFunction,
              step.value,
              AS_ENTRIES
            );
            if (typeof result == "object" && result && result instanceof Result)
              return result;
          }
          return new Result(false);
        });

        iterate.stop = function (result) {
          return new Result(true, result);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/iterators.js":
      /*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/iterators.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = {};

        /***/
      },

    /***/ "./node_modules/core-js/internals/microtask.js":
      /*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/microtask.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
        ).f;
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var macrotask = __webpack_require__(
          /*! ../internals/task */ "./node_modules/core-js/internals/task.js"
        ).set;
        var IS_IOS = __webpack_require__(
          /*! ../internals/is-ios */ "./node_modules/core-js/internals/is-ios.js"
        );

        var MutationObserver =
          global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var IS_NODE = classof(process) == "process";
        // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
        var queueMicrotaskDescriptor = getOwnPropertyDescriptor(
          global,
          "queueMicrotask"
        );
        var queueMicrotask =
          queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

        var flush, head, last, notify, toggle, node, promise, then;

        // modern engines have queueMicrotask method
        if (!queueMicrotask) {
          flush = function () {
            var parent, fn;
            if (IS_NODE && (parent = process.domain)) parent.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (error) {
                if (head) notify();
                else last = undefined;
                throw error;
              }
            }
            last = undefined;
            if (parent) parent.enter();
          };

          // Node.js
          if (IS_NODE) {
            notify = function () {
              process.nextTick(flush);
            };
            // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
          } else if (MutationObserver && !IS_IOS) {
            toggle = true;
            node = document.createTextNode("");
            new MutationObserver(flush).observe(node, { characterData: true });
            notify = function () {
              node.data = toggle = !toggle;
            };
            // environments with maybe non-completely correct, but existent Promise
          } else if (Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            promise = Promise.resolve(undefined);
            then = promise.then;
            notify = function () {
              then.call(promise, flush);
            };
            // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessag
            // - onreadystatechange
            // - setTimeout
          } else {
            notify = function () {
              // strange IE + webpack dev server bug - use .call(global)
              macrotask.call(global, flush);
            };
          }
        }

        module.exports =
          queueMicrotask ||
          function (fn) {
            var task = { fn: fn, next: undefined };
            if (last) last.next = task;
            if (!head) {
              head = task;
              notify();
            }
            last = task;
          };

        /***/
      },

    /***/ "./node_modules/core-js/internals/native-promise-constructor.js":
      /*!**********************************************************************!*\
        !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
        \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );

        module.exports = global.Promise;

        /***/
      },

    /***/ "./node_modules/core-js/internals/native-symbol.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/native-symbol.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        module.exports =
          !!Object.getOwnPropertySymbols &&
          !fails(function () {
            // Chrome 38 Symbol has incorrect toString conversion
            // eslint-disable-next-line no-undef
            return !String(Symbol());
          });

        /***/
      },

    /***/ "./node_modules/core-js/internals/native-weak-map.js":
      /*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/native-weak-map.js ***!
        \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js"
        );

        var WeakMap = global.WeakMap;

        module.exports =
          typeof WeakMap === "function" &&
          /native code/.test(inspectSource(WeakMap));

        /***/
      },

    /***/ "./node_modules/core-js/internals/new-promise-capability.js":
      /*!******************************************************************!*\
        !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
        \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var aFunction = __webpack_require__(
          /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js"
        );

        var PromiseCapability = function (C) {
          var resolve, reject;
          this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined)
              throw TypeError("Bad Promise constructor");
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        };

        // 25.4.1.5 NewPromiseCapability(C)
        module.exports.f = function (C) {
          return new PromiseCapability(C);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-define-property.js":
      /*!******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-define-property.js ***!
        \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js"
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"
        );

        var nativeDefineProperty = Object.defineProperty;

        // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS
          ? nativeDefineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeDefineProperty(O, P, Attributes);
                } catch (error) {
                  /* empty */
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
      /*!******************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
        \******************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var propertyIsEnumerableModule = __webpack_require__(
          /*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js"
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js"
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js"
        );

        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS
          ? nativeGetOwnPropertyDescriptor
          : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {
                  /* empty */
                }
              if (has(O, P))
                return createPropertyDescriptor(
                  !propertyIsEnumerableModule.f.call(O, P),
                  O[P]
                );
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
      /*!*************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
        \*************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(
          /*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js"
        );
        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js"
        );

        var hiddenKeys = enumBugKeys.concat("length", "prototype");

        // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
      /*!***************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
        \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        exports.f = Object.getOwnPropertySymbols;

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-keys-internal.js":
      /*!****************************************************************!*\
        !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
        \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var indexOf = __webpack_require__(
          /*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js"
        ).indexOf;
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"
        );

        module.exports = function (object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~indexOf(result, key) || result.push(key);
            }
          return result;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
      /*!*************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
        \*************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // Nashorn ~ JDK8 bug
        var NASHORN_BUG =
          getOwnPropertyDescriptor &&
          !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            }
          : nativePropertyIsEnumerable;

        /***/
      },

    /***/ "./node_modules/core-js/internals/object-to-string.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/internals/object-to-string.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof */ "./node_modules/core-js/internals/classof.js"
        );

        // `Object.prototype.toString` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
        module.exports = TO_STRING_TAG_SUPPORT
          ? {}.toString
          : function toString() {
              return "[object " + classof(this) + "]";
            };

        /***/
      },

    /***/ "./node_modules/core-js/internals/own-keys.js":
      /*!****************************************************!*\
        !*** ./node_modules/core-js/internals/own-keys.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );
        var getOwnPropertyNamesModule = __webpack_require__(
          /*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js"
        );
        var getOwnPropertySymbolsModule = __webpack_require__(
          /*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js"
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );

        // all object keys, includes non-enumerable and symbols
        module.exports =
          getBuiltIn("Reflect", "ownKeys") ||
          function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols
              ? keys.concat(getOwnPropertySymbols(it))
              : keys;
          };

        /***/
      },

    /***/ "./node_modules/core-js/internals/path.js":
      /*!************************************************!*\
        !*** ./node_modules/core-js/internals/path.js ***!
        \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );

        module.exports = global;

        /***/
      },

    /***/ "./node_modules/core-js/internals/perform.js":
      /*!***************************************************!*\
        !*** ./node_modules/core-js/internals/perform.js ***!
        \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (exec) {
          try {
            return { error: false, value: exec() };
          } catch (error) {
            return { error: true, value: error };
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/promise-resolve.js":
      /*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/promise-resolve.js ***!
        \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var newPromiseCapability = __webpack_require__(
          /*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js"
        );

        module.exports = function (C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/redefine-all.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/internals/redefine-all.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );

        module.exports = function (target, src, options) {
          for (var key in src) redefine(target, key, src[key], options);
          return target;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/redefine.js":
      /*!****************************************************!*\
        !*** ./node_modules/core-js/internals/redefine.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"
        );
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js"
        );
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js"
        );

        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split("String");

        (module.exports = function (O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          if (typeof value == "function") {
            if (typeof key == "string" && !has(value, "name"))
              createNonEnumerableProperty(value, "name", key);
            enforceInternalState(value).source = TEMPLATE.join(
              typeof key == "string" ? key : ""
            );
          }
          if (O === global) {
            if (simple) O[key] = value;
            else setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }
          if (simple) O[key] = value;
          else createNonEnumerableProperty(O, key, value);
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, "toString", function toString() {
          return (
            (typeof this == "function" && getInternalState(this).source) ||
            inspectSource(this)
          );
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
      /*!****************************************************************!*\
        !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
        \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var regexpExec = __webpack_require__(
          /*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js"
        );

        // `RegExpExec` abstract operation
        // https://tc39.github.io/ecma262/#sec-regexpexec
        module.exports = function (R, S) {
          var exec = R.exec;
          if (typeof exec === "function") {
            var result = exec.call(R, S);
            if (typeof result !== "object") {
              throw TypeError(
                "RegExp exec method returned something other than an Object or null"
              );
            }
            return result;
          }

          if (classof(R) !== "RegExp") {
            throw TypeError("RegExp#exec called on incompatible receiver");
          }

          return regexpExec.call(R, S);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/regexp-exec.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/regexp-exec.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var regexpFlags = __webpack_require__(
          /*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js"
        );

        var nativeExec = RegExp.prototype.exec;
        // This always refers to the native implementation, because the
        // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
        // which loads this file before patching the method.
        var nativeReplace = String.prototype.replace;

        var patchedExec = nativeExec;

        var UPDATES_LAST_INDEX_WRONG = (function () {
          var re1 = /a/;
          var re2 = /b*/g;
          nativeExec.call(re1, "a");
          nativeExec.call(re2, "a");
          return re1.lastIndex !== 0 || re2.lastIndex !== 0;
        })();

        // nonparticipating capturing group, copied from es5-shim's String#split patch.
        var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;

        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

        if (PATCH) {
          patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;

            if (NPCG_INCLUDED) {
              reCopy = new RegExp(
                "^" + re.source + "$(?!\\s)",
                regexpFlags.call(re)
              );
            }
            if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

            match = nativeExec.call(re, str);

            if (UPDATES_LAST_INDEX_WRONG && match) {
              re.lastIndex = re.global
                ? match.index + match[0].length
                : lastIndex;
            }
            if (NPCG_INCLUDED && match && match.length > 1) {
              // Fix browsers whose `exec` methods don't consistently return `undefined`
              // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
              nativeReplace.call(match[0], reCopy, function () {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === undefined) match[i] = undefined;
                }
              });
            }

            return match;
          };
        }

        module.exports = patchedExec;

        /***/
      },

    /***/ "./node_modules/core-js/internals/regexp-flags.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/internals/regexp-flags.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );

        // `RegExp.prototype.flags` getter implementation
        // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
        module.exports = function () {
          var that = anObject(this);
          var result = "";
          if (that.global) result += "g";
          if (that.ignoreCase) result += "i";
          if (that.multiline) result += "m";
          if (that.dotAll) result += "s";
          if (that.unicode) result += "u";
          if (that.sticky) result += "y";
          return result;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/require-object-coercible.js":
      /*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
        \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // `RequireObjectCoercible` abstract operation
        // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on " + it);
          return it;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/set-global.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/internals/set-global.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );

        module.exports = function (key, value) {
          try {
            createNonEnumerableProperty(global, key, value);
          } catch (error) {
            global[key] = value;
          }
          return value;
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/set-species.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/set-species.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );

        var SPECIES = wellKnownSymbol("species");

        module.exports = function (CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
          var defineProperty = definePropertyModule.f;

          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineProperty(Constructor, SPECIES, {
              configurable: true,
              get: function () {
                return this;
              },
            });
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/set-to-string-tag.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        ).f;
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var TO_STRING_TAG = wellKnownSymbol("toStringTag");

        module.exports = function (it, TAG, STATIC) {
          if (it && !has((it = STATIC ? it : it.prototype), TO_STRING_TAG)) {
            defineProperty(it, TO_STRING_TAG, {
              configurable: true,
              value: TAG,
            });
          }
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/shared-key.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/internals/shared-key.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var shared = __webpack_require__(
          /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js"
        );
        var uid = __webpack_require__(
          /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js"
        );

        var keys = shared("keys");

        module.exports = function (key) {
          return keys[key] || (keys[key] = uid(key));
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/shared-store.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/internals/shared-store.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"
        );

        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || setGlobal(SHARED, {});

        module.exports = store;

        /***/
      },

    /***/ "./node_modules/core-js/internals/shared.js":
      /*!**************************************************!*\
        !*** ./node_modules/core-js/internals/shared.js ***!
        \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"
        );
        var store = __webpack_require__(
          /*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js"
        );

        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: "3.4.5",
          mode: IS_PURE ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });

        /***/
      },

    /***/ "./node_modules/core-js/internals/sloppy-array-method.js":
      /*!***************************************************************!*\
        !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
        \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        module.exports = function (METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return (
            !method ||
            !fails(function () {
              // eslint-disable-next-line no-useless-call,no-throw-literal
              method.call(
                null,
                argument ||
                  function () {
                    throw 1;
                  },
                1
              );
            })
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/species-constructor.js":
      /*!***************************************************************!*\
        !*** ./node_modules/core-js/internals/species-constructor.js ***!
        \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var aFunction = __webpack_require__(
          /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var SPECIES = wellKnownSymbol("species");

        // `SpeciesConstructor` abstract operation
        // https://tc39.github.io/ecma262/#sec-speciesconstructor
        module.exports = function (O, defaultConstructor) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined
            ? defaultConstructor
            : aFunction(S);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/string-multibyte.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/internals/string-multibyte.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );

        // `String.prototype.{ codePointAt, at }` methods implementation
        var createMethod = function (CONVERT_TO_STRING) {
          return function ($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size)
              return CONVERT_TO_STRING ? "" : undefined;
            first = S.charCodeAt(position);
            return first < 0xd800 ||
              first > 0xdbff ||
              position + 1 === size ||
              (second = S.charCodeAt(position + 1)) < 0xdc00 ||
              second > 0xdfff
              ? CONVERT_TO_STRING
                ? S.charAt(position)
                : first
              : CONVERT_TO_STRING
              ? S.slice(position, position + 2)
              : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
          };
        };

        module.exports = {
          // `String.prototype.codePointAt` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
          codeAt: createMethod(false),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: createMethod(true),
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/string-trim.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/string-trim.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );
        var whitespaces = __webpack_require__(
          /*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js"
        );

        var whitespace = "[" + whitespaces + "]";
        var ltrim = RegExp("^" + whitespace + whitespace + "*");
        var rtrim = RegExp(whitespace + whitespace + "*$");

        // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
        var createMethod = function (TYPE) {
          return function ($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1) string = string.replace(ltrim, "");
            if (TYPE & 2) string = string.replace(rtrim, "");
            return string;
          };
        };

        module.exports = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
          start: createMethod(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
          end: createMethod(2),
          // `String.prototype.trim` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.trim
          trim: createMethod(3),
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/task.js":
      /*!************************************************!*\
        !*** ./node_modules/core-js/internals/task.js ***!
        \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var bind = __webpack_require__(
          /*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js"
        );
        var html = __webpack_require__(
          /*! ../internals/html */ "./node_modules/core-js/internals/html.js"
        );
        var createElement = __webpack_require__(
          /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js"
        );
        var IS_IOS = __webpack_require__(
          /*! ../internals/is-ios */ "./node_modules/core-js/internals/is-ios.js"
        );

        var location = global.location;
        var set = global.setImmediate;
        var clear = global.clearImmediate;
        var process = global.process;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var defer, channel, port;

        var run = function (id) {
          // eslint-disable-next-line no-prototype-builtins
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };

        var runner = function (id) {
          return function () {
            run(id);
          };
        };

        var listener = function (event) {
          run(event.data);
        };

        var post = function (id) {
          // old engines have not location.origin
          global.postMessage(id + "", location.protocol + "//" + location.host);
        };

        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!set || !clear) {
          set = function setImmediate(fn) {
            var args = [];
            var i = 1;
            while (arguments.length > i) args.push(arguments[i++]);
            queue[++counter] = function () {
              // eslint-disable-next-line no-new-func
              (typeof fn == "function" ? fn : Function(fn)).apply(
                undefined,
                args
              );
            };
            defer(counter);
            return counter;
          };
          clear = function clearImmediate(id) {
            delete queue[id];
          };
          // Node.js 0.8-
          if (classof(process) == "process") {
            defer = function (id) {
              process.nextTick(runner(id));
            };
            // Sphere (JS game engine) Dispatch API
          } else if (Dispatch && Dispatch.now) {
            defer = function (id) {
              Dispatch.now(runner(id));
            };
            // Browsers with MessageChannel, includes WebWorkers
            // except iOS - https://github.com/zloirock/core-js/issues/624
          } else if (MessageChannel && !IS_IOS) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = bind(port.postMessage, port, 1);
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (
            global.addEventListener &&
            typeof postMessage == "function" &&
            !global.importScripts &&
            !fails(post)
          ) {
            defer = post;
            global.addEventListener("message", listener, false);
            // IE8-
          } else if (ONREADYSTATECHANGE in createElement("script")) {
            defer = function (id) {
              html.appendChild(createElement("script"))[ONREADYSTATECHANGE] =
                function () {
                  html.removeChild(this);
                  run(id);
                };
            };
            // Rest old browsers
          } else {
            defer = function (id) {
              setTimeout(runner(id), 0);
            };
          }
        }

        module.exports = {
          set: set,
          clear: clear,
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-absolute-index.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"
        );

        var max = Math.max;
        var min = Math.min;

        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function (index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-indexed-object.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js"
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );

        module.exports = function (it) {
          return IndexedObject(requireObjectCoercible(it));
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-integer.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/internals/to-integer.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var ceil = Math.ceil;
        var floor = Math.floor;

        // `ToInteger` abstract operation
        // https://tc39.github.io/ecma262/#sec-tointeger
        module.exports = function (argument) {
          return isNaN((argument = +argument))
            ? 0
            : (argument > 0 ? floor : ceil)(argument);
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-length.js":
      /*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/to-length.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"
        );

        var min = Math.min;

        // `ToLength` abstract operation
        // https://tc39.github.io/ecma262/#sec-tolength
        module.exports = function (argument) {
          return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-object.js":
      /*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/to-object.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );

        // `ToObject` abstract operation
        // https://tc39.github.io/ecma262/#sec-toobject
        module.exports = function (argument) {
          return Object(requireObjectCoercible(argument));
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-primitive.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/internals/to-primitive.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );

        // `ToPrimitive` abstract operation
        // https://tc39.github.io/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function (input, PREFERRED_STRING) {
          if (!isObject(input)) return input;
          var fn, val;
          if (
            PREFERRED_STRING &&
            typeof (fn = input.toString) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            typeof (fn = input.valueOf) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            !PREFERRED_STRING &&
            typeof (fn = input.toString) == "function" &&
            !isObject((val = fn.call(input)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/to-string-tag-support.js":
      /*!*****************************************************************!*\
        !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
        \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};

        test[TO_STRING_TAG] = "z";

        module.exports = String(test) === "[object z]";

        /***/
      },

    /***/ "./node_modules/core-js/internals/uid.js":
      /*!***********************************************!*\
        !*** ./node_modules/core-js/internals/uid.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var id = 0;
        var postfix = Math.random();

        module.exports = function (key) {
          return (
            "Symbol(" +
            String(key === undefined ? "" : key) +
            ")_" +
            (++id + postfix).toString(36)
          );
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js"
        );

        module.exports =
          NATIVE_SYMBOL &&
          // eslint-disable-next-line no-undef
          !Symbol.sham &&
          // eslint-disable-next-line no-undef
          typeof Symbol() == "symbol";

        /***/
      },

    /***/ "./node_modules/core-js/internals/user-agent.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/internals/user-agent.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );

        module.exports = getBuiltIn("navigator", "userAgent") || "";

        /***/
      },

    /***/ "./node_modules/core-js/internals/v8-version.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/internals/v8-version.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var userAgent = __webpack_require__(
          /*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js"
        );

        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;

        if (v8) {
          match = v8.split(".");
          version = match[0] + match[1];
        } else if (userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version = match[1];
          }
        }

        module.exports = version && +version;

        /***/
      },

    /***/ "./node_modules/core-js/internals/well-known-symbol.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var shared = __webpack_require__(
          /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js"
        );
        var has = __webpack_require__(
          /*! ../internals/has */ "./node_modules/core-js/internals/has.js"
        );
        var uid = __webpack_require__(
          /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js"
        );
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js"
        );
        var USE_SYMBOL_AS_UID = __webpack_require__(
          /*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js"
        );

        var WellKnownSymbolsStore = shared("wks");
        var Symbol = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

        module.exports = function (name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol, name))
              WellKnownSymbolsStore[name] = Symbol[name];
            else
              WellKnownSymbolsStore[name] = createWellKnownSymbol(
                "Symbol." + name
              );
          }
          return WellKnownSymbolsStore[name];
        };

        /***/
      },

    /***/ "./node_modules/core-js/internals/whitespaces.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/whitespaces.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // a string of all valid unicode whitespaces
        // eslint-disable-next-line max-len
        module.exports =
          "\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.array.concat.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/modules/es.array.concat.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var isArray = __webpack_require__(
          /*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var toObject = __webpack_require__(
          /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var createProperty = __webpack_require__(
          /*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js"
        );
        var arraySpeciesCreate = __webpack_require__(
          /*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js"
        );
        var arrayMethodHasSpeciesSupport = __webpack_require__(
          /*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var V8_VERSION = __webpack_require__(
          /*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js"
        );

        var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
        var MAX_SAFE_INTEGER = 0x1fffffffffffff;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";

        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/679
        var IS_CONCAT_SPREADABLE_SUPPORT =
          V8_VERSION >= 51 ||
          !fails(function () {
            var array = [];
            array[IS_CONCAT_SPREADABLE] = false;
            return array.concat()[0] !== array;
          });

        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");

        var isConcatSpreadable = function (O) {
          if (!isObject(O)) return false;
          var spreadable = O[IS_CONCAT_SPREADABLE];
          return spreadable !== undefined ? !!spreadable : isArray(O);
        };

        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

        // `Array.prototype.concat` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.concat
        // with adding support of @@isConcatSpreadable and @@species
        $(
          { target: "Array", proto: true, forced: FORCED },
          {
            concat: function concat(arg) {
              // eslint-disable-line no-unused-vars
              var O = toObject(this);
              var A = arraySpeciesCreate(O, 0);
              var n = 0;
              var i, k, length, len, E;
              for (i = -1, length = arguments.length; i < length; i++) {
                E = i === -1 ? O : arguments[i];
                if (isConcatSpreadable(E)) {
                  len = toLength(E.length);
                  if (n + len > MAX_SAFE_INTEGER)
                    throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                  for (k = 0; k < len; k++, n++)
                    if (k in E) createProperty(A, n, E[k]);
                } else {
                  if (n >= MAX_SAFE_INTEGER)
                    throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                  createProperty(A, n++, E);
                }
              }
              A.length = n;
              return A;
            },
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.array.join.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/modules/es.array.join.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js"
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js"
        );

        var nativeJoin = [].join;

        var ES3_STRINGS = IndexedObject != Object;
        var SLOPPY_METHOD = sloppyArrayMethod("join", ",");

        // `Array.prototype.join` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.join
        $(
          {
            target: "Array",
            proto: true,
            forced: ES3_STRINGS || SLOPPY_METHOD,
          },
          {
            join: function join(separator) {
              return nativeJoin.call(
                toIndexedObject(this),
                separator === undefined ? "," : separator
              );
            },
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.array.slice.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/modules/es.array.slice.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var isArray = __webpack_require__(
          /*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js"
        );
        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"
        );
        var createProperty = __webpack_require__(
          /*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js"
        );
        var arrayMethodHasSpeciesSupport = __webpack_require__(
          /*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );

        var SPECIES = wellKnownSymbol("species");
        var nativeSlice = [].slice;
        var max = Math.max;

        // `Array.prototype.slice` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.slice
        // fallback for not array-like ES3 strings and DOM objects
        $(
          {
            target: "Array",
            proto: true,
            forced: !arrayMethodHasSpeciesSupport("slice"),
          },
          {
            slice: function slice(start, end) {
              var O = toIndexedObject(this);
              var length = toLength(O.length);
              var k = toAbsoluteIndex(start, length);
              var fin = toAbsoluteIndex(
                end === undefined ? length : end,
                length
              );
              // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
              var Constructor, result, n;
              if (isArray(O)) {
                Constructor = O.constructor;
                // cross-realm fallback
                if (
                  typeof Constructor == "function" &&
                  (Constructor === Array || isArray(Constructor.prototype))
                ) {
                  Constructor = undefined;
                } else if (isObject(Constructor)) {
                  Constructor = Constructor[SPECIES];
                  if (Constructor === null) Constructor = undefined;
                }
                if (Constructor === Array || Constructor === undefined) {
                  return nativeSlice.call(O, k, fin);
                }
              }
              result = new (Constructor === undefined ? Array : Constructor)(
                max(fin - k, 0)
              );
              for (n = 0; k < fin; k++, n++)
                if (k in O) createProperty(result, n, O[k]);
              result.length = n;
              return result;
            },
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.function.name.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/modules/es.function.name.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"
        );
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"
        ).f;

        var FunctionPrototype = Function.prototype;
        var FunctionPrototypeToString = FunctionPrototype.toString;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = "name";

        // Function instances `.name` property
        // https://tc39.github.io/ecma262/#sec-function-instances-name
        if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
          defineProperty(FunctionPrototype, NAME, {
            configurable: true,
            get: function () {
              try {
                return FunctionPrototypeToString.call(this).match(nameRE)[1];
              } catch (error) {
                return "";
              }
            },
          });
        }

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.object.to-string.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var toString = __webpack_require__(
          /*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js"
        );

        // `Object.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
        if (!TO_STRING_TAG_SUPPORT) {
          redefine(Object.prototype, "toString", toString, { unsafe: true });
        }

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.promise.finally.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"
        );
        var NativePromise = __webpack_require__(
          /*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );
        var speciesConstructor = __webpack_require__(
          /*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js"
        );
        var promiseResolve = __webpack_require__(
          /*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );

        // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
        var NON_GENERIC =
          !!NativePromise &&
          fails(function () {
            NativePromise.prototype["finally"].call(
              {
                then: function () {
                  /* empty */
                },
              },
              function () {
                /* empty */
              }
            );
          });

        // `Promise.prototype.finally` method
        // https://tc39.github.io/ecma262/#sec-promise.prototype.finally
        $(
          { target: "Promise", proto: true, real: true, forced: NON_GENERIC },
          {
            finally: function (onFinally) {
              var C = speciesConstructor(this, getBuiltIn("Promise"));
              var isFunction = typeof onFinally == "function";
              return this.then(
                isFunction
                  ? function (x) {
                      return promiseResolve(C, onFinally()).then(function () {
                        return x;
                      });
                    }
                  : onFinally,
                isFunction
                  ? function (e) {
                      return promiseResolve(C, onFinally()).then(function () {
                        throw e;
                      });
                    }
                  : onFinally
              );
            },
          }
        );

        // patch native Promise.prototype for native async functions
        if (
          !IS_PURE &&
          typeof NativePromise == "function" &&
          !NativePromise.prototype["finally"]
        ) {
          redefine(
            NativePromise.prototype,
            "finally",
            getBuiltIn("Promise").prototype["finally"]
          );
        }

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.promise.js":
      /*!****************************************************!*\
        !*** ./node_modules/core-js/modules/es.promise.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"
        );
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js"
        );
        var NativePromise = __webpack_require__(
          /*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js"
        );
        var redefine = __webpack_require__(
          /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"
        );
        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js"
        );
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js"
        );
        var setSpecies = __webpack_require__(
          /*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js"
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"
        );
        var aFunction = __webpack_require__(
          /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js"
        );
        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js"
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"
        );
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js"
        );
        var iterate = __webpack_require__(
          /*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js"
        );
        var checkCorrectnessOfIteration = __webpack_require__(
          /*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js"
        );
        var speciesConstructor = __webpack_require__(
          /*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js"
        );
        var task = __webpack_require__(
          /*! ../internals/task */ "./node_modules/core-js/internals/task.js"
        ).set;
        var microtask = __webpack_require__(
          /*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js"
        );
        var promiseResolve = __webpack_require__(
          /*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js"
        );
        var hostReportErrors = __webpack_require__(
          /*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js"
        );
        var newPromiseCapabilityModule = __webpack_require__(
          /*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js"
        );
        var perform = __webpack_require__(
          /*! ../internals/perform */ "./node_modules/core-js/internals/perform.js"
        );
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js"
        );
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js"
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"
        );
        var V8_VERSION = __webpack_require__(
          /*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js"
        );

        var SPECIES = wellKnownSymbol("species");
        var PROMISE = "Promise";
        var getInternalState = InternalStateModule.get;
        var setInternalState = InternalStateModule.set;
        var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
        var PromiseConstructor = NativePromise;
        var TypeError = global.TypeError;
        var document = global.document;
        var process = global.process;
        var $fetch = getBuiltIn("fetch");
        var newPromiseCapability = newPromiseCapabilityModule.f;
        var newGenericPromiseCapability = newPromiseCapability;
        var IS_NODE = classof(process) == "process";
        var DISPATCH_EVENT = !!(
          document &&
          document.createEvent &&
          global.dispatchEvent
        );
        var UNHANDLED_REJECTION = "unhandledrejection";
        var REJECTION_HANDLED = "rejectionhandled";
        var PENDING = 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        var HANDLED = 1;
        var UNHANDLED = 2;
        var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

        var FORCED = isForced(PROMISE, function () {
          var GLOBAL_CORE_JS_PROMISE =
            inspectSource(PromiseConstructor) !== String(PromiseConstructor);
          if (!GLOBAL_CORE_JS_PROMISE) {
            // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
            // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
            // We can't detect it synchronously, so just check versions
            if (V8_VERSION === 66) return true;
            // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            if (!IS_NODE && typeof PromiseRejectionEvent != "function")
              return true;
          }
          // We need Promise#finally in the pure version for preventing prototype pollution
          if (IS_PURE && !PromiseConstructor.prototype["finally"]) return true;
          // We can't use @@species feature detection in V8 since it causes
          // deoptimization and performance degradation
          // https://github.com/zloirock/core-js/issues/679
          if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor))
            return false;
          // Detect correctness of subclassing with @@species support
          var promise = PromiseConstructor.resolve(1);
          var FakePromise = function (exec) {
            exec(
              function () {
                /* empty */
              },
              function () {
                /* empty */
              }
            );
          };
          var constructor = (promise.constructor = {});
          constructor[SPECIES] = FakePromise;
          return !(
            promise.then(function () {
              /* empty */
            }) instanceof FakePromise
          );
        });

        var INCORRECT_ITERATION =
          FORCED ||
          !checkCorrectnessOfIteration(function (iterable) {
            PromiseConstructor.all(iterable)["catch"](function () {
              /* empty */
            });
          });

        // helpers
        var isThenable = function (it) {
          var then;
          return isObject(it) && typeof (then = it.then) == "function"
            ? then
            : false;
        };

        var notify = function (promise, state, isReject) {
          if (state.notified) return;
          state.notified = true;
          var chain = state.reactions;
          microtask(function () {
            var value = state.value;
            var ok = state.state == FULFILLED;
            var index = 0;
            // variable length - can't use forEach
            while (chain.length > index) {
              var reaction = chain[index++];
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (state.rejection === UNHANDLED)
                      onHandleUnhandled(promise, state);
                    state.rejection = HANDLED;
                  }
                  if (handler === true) result = value;
                  else {
                    if (domain) domain.enter();
                    result = handler(value); // can throw
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError("Promise-chain cycle"));
                  } else if ((then = isThenable(result))) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (error) {
                if (domain && !exited) domain.exit();
                reject(error);
              }
            }
            state.reactions = [];
            state.notified = false;
            if (isReject && !state.rejection) onUnhandled(promise, state);
          });
        };

        var dispatchEvent = function (name, promise, reason) {
          var event, handler;
          if (DISPATCH_EVENT) {
            event = document.createEvent("Event");
            event.promise = promise;
            event.reason = reason;
            event.initEvent(name, false, true);
            global.dispatchEvent(event);
          } else event = { promise: promise, reason: reason };
          if ((handler = global["on" + name])) handler(event);
          else if (name === UNHANDLED_REJECTION)
            hostReportErrors("Unhandled promise rejection", reason);
        };

        var onUnhandled = function (promise, state) {
          task.call(global, function () {
            var value = state.value;
            var IS_UNHANDLED = isUnhandled(state);
            var result;
            if (IS_UNHANDLED) {
              result = perform(function () {
                if (IS_NODE) {
                  process.emit("unhandledRejection", value, promise);
                } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
              });
              // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
              state.rejection =
                IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
              if (result.error) throw result.value;
            }
          });
        };

        var isUnhandled = function (state) {
          return state.rejection !== HANDLED && !state.parent;
        };

        var onHandleUnhandled = function (promise, state) {
          task.call(global, function () {
            if (IS_NODE) {
              process.emit("rejectionHandled", promise);
            } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
          });
        };

        var bind = function (fn, promise, state, unwrap) {
          return function (value) {
            fn(promise, state, value, unwrap);
          };
        };

        var internalReject = function (promise, state, value, unwrap) {
          if (state.done) return;
          state.done = true;
          if (unwrap) state = unwrap;
          state.value = value;
          state.state = REJECTED;
          notify(promise, state, true);
        };

        var internalResolve = function (promise, state, value, unwrap) {
          if (state.done) return;
          state.done = true;
          if (unwrap) state = unwrap;
          try {
            if (promise === value)
              throw TypeError("Promise can't be resolved itself");
            var then = isThenable(value);
            if (then) {
              microtask(function () {
                var wrapper = { done: false };
                try {
                  then.call(
                    value,
                    bind(internalResolve, promise, wrapper, state),
                    bind(internalReject, promise, wrapper, state)
                  );
                } catch (error) {
                  internalReject(promise, wrapper, error, state);
                }
              });
            } else {
              state.value = value;
              state.state = FULFILLED;
              notify(promise, state, false);
            }
          } catch (error) {
            internalReject(promise, { done: false }, error, state);
          }
        };

        // constructor polyfill
        if (FORCED) {
          // 25.4.3.1 Promise(executor)
          PromiseConstructor = function Promise(executor) {
            anInstance(this, PromiseConstructor, PROMISE);
            aFunction(executor);
            Internal.call(this);
            var state = getInternalState(this);
            try {
              executor(
                bind(internalResolve, this, state),
                bind(internalReject, this, state)
              );
            } catch (error) {
              internalReject(this, state, error);
            }
          };
          // eslint-disable-next-line no-unused-vars
          Internal = function Promise(executor) {
            setInternalState(this, {
              type: PROMISE,
              done: false,
              notified: false,
              parent: false,
              reactions: [],
              rejection: false,
              state: PENDING,
              value: undefined,
            });
          };
          Internal.prototype = redefineAll(PromiseConstructor.prototype, {
            // `Promise.prototype.then` method
            // https://tc39.github.io/ecma262/#sec-promise.prototype.then
            then: function then(onFulfilled, onRejected) {
              var state = getInternalPromiseState(this);
              var reaction = newPromiseCapability(
                speciesConstructor(this, PromiseConstructor)
              );
              reaction.ok =
                typeof onFulfilled == "function" ? onFulfilled : true;
              reaction.fail = typeof onRejected == "function" && onRejected;
              reaction.domain = IS_NODE ? process.domain : undefined;
              state.parent = true;
              state.reactions.push(reaction);
              if (state.state != PENDING) notify(this, state, false);
              return reaction.promise;
            },
            // `Promise.prototype.catch` method
            // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
            catch: function (onRejected) {
              return this.then(undefined, onRejected);
            },
          });
          OwnPromiseCapability = function () {
            var promise = new Internal();
            var state = getInternalState(promise);
            this.promise = promise;
            this.resolve = bind(internalResolve, promise, state);
            this.reject = bind(internalReject, promise, state);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
            return C === PromiseConstructor || C === PromiseWrapper
              ? new OwnPromiseCapability(C)
              : newGenericPromiseCapability(C);
          };

          if (!IS_PURE && typeof NativePromise == "function") {
            nativeThen = NativePromise.prototype.then;

            // wrap native Promise#then for native async functions
            redefine(
              NativePromise.prototype,
              "then",
              function then(onFulfilled, onRejected) {
                var that = this;
                return new PromiseConstructor(function (resolve, reject) {
                  nativeThen.call(that, resolve, reject);
                }).then(onFulfilled, onRejected);
                // https://github.com/zloirock/core-js/issues/640
              },
              { unsafe: true }
            );

            // wrap fetch result
            if (typeof $fetch == "function")
              $(
                { global: true, enumerable: true, forced: true },
                {
                  // eslint-disable-next-line no-unused-vars
                  fetch: function fetch(input /* , init */) {
                    return promiseResolve(
                      PromiseConstructor,
                      $fetch.apply(global, arguments)
                    );
                  },
                }
              );
          }
        }

        $(
          { global: true, wrap: true, forced: FORCED },
          {
            Promise: PromiseConstructor,
          }
        );

        setToStringTag(PromiseConstructor, PROMISE, false, true);
        setSpecies(PROMISE);

        PromiseWrapper = getBuiltIn(PROMISE);

        // statics
        $(
          { target: PROMISE, stat: true, forced: FORCED },
          {
            // `Promise.reject` method
            // https://tc39.github.io/ecma262/#sec-promise.reject
            reject: function reject(r) {
              var capability = newPromiseCapability(this);
              capability.reject.call(undefined, r);
              return capability.promise;
            },
          }
        );

        $(
          { target: PROMISE, stat: true, forced: IS_PURE || FORCED },
          {
            // `Promise.resolve` method
            // https://tc39.github.io/ecma262/#sec-promise.resolve
            resolve: function resolve(x) {
              return promiseResolve(
                IS_PURE && this === PromiseWrapper ? PromiseConstructor : this,
                x
              );
            },
          }
        );

        $(
          { target: PROMISE, stat: true, forced: INCORRECT_ITERATION },
          {
            // `Promise.all` method
            // https://tc39.github.io/ecma262/#sec-promise.all
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = perform(function () {
                var $promiseResolve = aFunction(C.resolve);
                var values = [];
                var counter = 0;
                var remaining = 1;
                iterate(iterable, function (promise) {
                  var index = counter++;
                  var alreadyCalled = false;
                  values.push(undefined);
                  remaining++;
                  $promiseResolve.call(C, promise).then(function (value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.error) reject(result.value);
              return capability.promise;
            },
            // `Promise.race` method
            // https://tc39.github.io/ecma262/#sec-promise.race
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var reject = capability.reject;
              var result = perform(function () {
                var $promiseResolve = aFunction(C.resolve);
                iterate(iterable, function (promise) {
                  $promiseResolve
                    .call(C, promise)
                    .then(capability.resolve, reject);
                });
              });
              if (result.error) reject(result.value);
              return capability.promise;
            },
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.string.link.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/modules/es.string.link.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var createHTML = __webpack_require__(
          /*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js"
        );
        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */ "./node_modules/core-js/internals/forced-string-html-method.js"
        );

        // `String.prototype.link` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.link
        $(
          {
            target: "String",
            proto: true,
            forced: forcedStringHTMLMethod("link"),
          },
          {
            link: function link(url) {
              return createHTML(this, "a", "href", url);
            },
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.string.replace.js":
      /*!***********************************************************!*\
        !*** ./node_modules/core-js/modules/es.string.replace.js ***!
        \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var fixRegExpWellKnownSymbolLogic = __webpack_require__(
          /*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var toObject = __webpack_require__(
          /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );
        var advanceStringIndex = __webpack_require__(
          /*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js"
        );
        var regExpExec = __webpack_require__(
          /*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js"
        );

        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

        var maybeToString = function (it) {
          return it === undefined ? it : String(it);
        };

        // @@replace logic
        fixRegExpWellKnownSymbolLogic(
          "replace",
          2,
          function (REPLACE, nativeReplace, maybeCallNative) {
            return [
              // `String.prototype.replace` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.replace
              function replace(searchValue, replaceValue) {
                var O = requireObjectCoercible(this);
                var replacer =
                  searchValue == undefined ? undefined : searchValue[REPLACE];
                return replacer !== undefined
                  ? replacer.call(searchValue, O, replaceValue)
                  : nativeReplace.call(String(O), searchValue, replaceValue);
              },
              // `RegExp.prototype[@@replace]` method
              // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
              function (regexp, replaceValue) {
                var res = maybeCallNative(
                  nativeReplace,
                  regexp,
                  this,
                  replaceValue
                );
                if (res.done) return res.value;

                var rx = anObject(regexp);
                var S = String(this);

                var functionalReplace = typeof replaceValue === "function";
                if (!functionalReplace) replaceValue = String(replaceValue);

                var global = rx.global;
                if (global) {
                  var fullUnicode = rx.unicode;
                  rx.lastIndex = 0;
                }
                var results = [];
                while (true) {
                  var result = regExpExec(rx, S);
                  if (result === null) break;

                  results.push(result);
                  if (!global) break;

                  var matchStr = String(result[0]);
                  if (matchStr === "")
                    rx.lastIndex = advanceStringIndex(
                      S,
                      toLength(rx.lastIndex),
                      fullUnicode
                    );
                }

                var accumulatedResult = "";
                var nextSourcePosition = 0;
                for (var i = 0; i < results.length; i++) {
                  result = results[i];

                  var matched = String(result[0]);
                  var position = max(min(toInteger(result.index), S.length), 0);
                  var captures = [];
                  // NOTE: This is equivalent to
                  //   captures = result.slice(1).map(maybeToString)
                  // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                  // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                  // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                  for (var j = 1; j < result.length; j++)
                    captures.push(maybeToString(result[j]));
                  var namedCaptures = result.groups;
                  if (functionalReplace) {
                    var replacerArgs = [matched].concat(captures, position, S);
                    if (namedCaptures !== undefined)
                      replacerArgs.push(namedCaptures);
                    var replacement = String(
                      replaceValue.apply(undefined, replacerArgs)
                    );
                  } else {
                    replacement = getSubstitution(
                      matched,
                      S,
                      position,
                      captures,
                      namedCaptures,
                      replaceValue
                    );
                  }
                  if (position >= nextSourcePosition) {
                    accumulatedResult +=
                      S.slice(nextSourcePosition, position) + replacement;
                    nextSourcePosition = position + matched.length;
                  }
                }
                return accumulatedResult + S.slice(nextSourcePosition);
              },
            ];

            // https://tc39.github.io/ecma262/#sec-getsubstitution
            function getSubstitution(
              matched,
              str,
              position,
              captures,
              namedCaptures,
              replacement
            ) {
              var tailPos = position + matched.length;
              var m = captures.length;
              var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
              if (namedCaptures !== undefined) {
                namedCaptures = toObject(namedCaptures);
                symbols = SUBSTITUTION_SYMBOLS;
              }
              return nativeReplace.call(
                replacement,
                symbols,
                function (match, ch) {
                  var capture;
                  switch (ch.charAt(0)) {
                    case "$":
                      return "$";
                    case "&":
                      return matched;
                    case "`":
                      return str.slice(0, position);
                    case "'":
                      return str.slice(tailPos);
                    case "<":
                      capture = namedCaptures[ch.slice(1, -1)];
                      break;
                    default: // \d\d?
                      var n = +ch;
                      if (n === 0) return match;
                      if (n > m) {
                        var f = floor(n / 10);
                        if (f === 0) return match;
                        if (f <= m)
                          return captures[f - 1] === undefined
                            ? ch.charAt(1)
                            : captures[f - 1] + ch.charAt(1);
                        return match;
                      }
                      capture = captures[n - 1];
                  }
                  return capture === undefined ? "" : capture;
                }
              );
            }
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.string.split.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/modules/es.string.split.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var fixRegExpWellKnownSymbolLogic = __webpack_require__(
          /*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"
        );
        var isRegExp = __webpack_require__(
          /*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js"
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"
        );
        var speciesConstructor = __webpack_require__(
          /*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js"
        );
        var advanceStringIndex = __webpack_require__(
          /*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js"
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"
        );
        var callRegExpExec = __webpack_require__(
          /*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js"
        );
        var regexpExec = __webpack_require__(
          /*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js"
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"
        );

        var arrayPush = [].push;
        var min = Math.min;
        var MAX_UINT32 = 0xffffffff;

        // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
        var SUPPORTS_Y = !fails(function () {
          return !RegExp(MAX_UINT32, "y");
        });

        // @@split logic
        fixRegExpWellKnownSymbolLogic(
          "split",
          2,
          function (SPLIT, nativeSplit, maybeCallNative) {
            var internalSplit;
            if (
              "abbc".split(/(b)*/)[1] == "c" ||
              "test".split(/(?:)/, -1).length != 4 ||
              "ab".split(/(?:ab)*/).length != 2 ||
              ".".split(/(.?)(.?)/).length != 4 ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
            ) {
              // based on es5-shim implementation, need to rework it
              internalSplit = function (separator, limit) {
                var string = String(requireObjectCoercible(this));
                var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                if (lim === 0) return [];
                if (separator === undefined) return [string];
                // If `separator` is not a regex, use native split
                if (!isRegExp(separator)) {
                  return nativeSplit.call(string, separator, lim);
                }
                var output = [];
                var flags =
                  (separator.ignoreCase ? "i" : "") +
                  (separator.multiline ? "m" : "") +
                  (separator.unicode ? "u" : "") +
                  (separator.sticky ? "y" : "");
                var lastLastIndex = 0;
                // Make `global` and avoid `lastIndex` issues by working with a copy
                var separatorCopy = new RegExp(separator.source, flags + "g");
                var match, lastIndex, lastLength;
                while ((match = regexpExec.call(separatorCopy, string))) {
                  lastIndex = separatorCopy.lastIndex;
                  if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    if (match.length > 1 && match.index < string.length)
                      arrayPush.apply(output, match.slice(1));
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= lim) break;
                  }
                  if (separatorCopy.lastIndex === match.index)
                    separatorCopy.lastIndex++; // Avoid an infinite loop
                }
                if (lastLastIndex === string.length) {
                  if (lastLength || !separatorCopy.test("")) output.push("");
                } else output.push(string.slice(lastLastIndex));
                return output.length > lim ? output.slice(0, lim) : output;
              };
              // Chakra, V8
            } else if ("0".split(undefined, 0).length) {
              internalSplit = function (separator, limit) {
                return separator === undefined && limit === 0
                  ? []
                  : nativeSplit.call(this, separator, limit);
              };
            } else internalSplit = nativeSplit;

            return [
              // `String.prototype.split` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.split
              function split(separator, limit) {
                var O = requireObjectCoercible(this);
                var splitter =
                  separator == undefined ? undefined : separator[SPLIT];
                return splitter !== undefined
                  ? splitter.call(separator, O, limit)
                  : internalSplit.call(String(O), separator, limit);
              },
              // `RegExp.prototype[@@split]` method
              // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
              //
              // NOTE: This cannot be properly polyfilled in engines that don't support
              // the 'y' flag.
              function (regexp, limit) {
                var res = maybeCallNative(
                  internalSplit,
                  regexp,
                  this,
                  limit,
                  internalSplit !== nativeSplit
                );
                if (res.done) return res.value;

                var rx = anObject(regexp);
                var S = String(this);
                var C = speciesConstructor(rx, RegExp);

                var unicodeMatching = rx.unicode;
                var flags =
                  (rx.ignoreCase ? "i" : "") +
                  (rx.multiline ? "m" : "") +
                  (rx.unicode ? "u" : "") +
                  (SUPPORTS_Y ? "y" : "g");

                // ^(? + rx + ) is needed, in combination with some S slicing, to
                // simulate the 'y' flag.
                var splitter = new C(
                  SUPPORTS_Y ? rx : "^(?:" + rx.source + ")",
                  flags
                );
                var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                if (lim === 0) return [];
                if (S.length === 0)
                  return callRegExpExec(splitter, S) === null ? [S] : [];
                var p = 0;
                var q = 0;
                var A = [];
                while (q < S.length) {
                  splitter.lastIndex = SUPPORTS_Y ? q : 0;
                  var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                  var e;
                  if (
                    z === null ||
                    (e = min(
                      toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)),
                      S.length
                    )) === p
                  ) {
                    q = advanceStringIndex(S, q, unicodeMatching);
                  } else {
                    A.push(S.slice(p, q));
                    if (A.length === lim) return A;
                    for (var i = 1; i <= z.length - 1; i++) {
                      A.push(z[i]);
                      if (A.length === lim) return A;
                    }
                    q = p = e;
                  }
                }
                A.push(S.slice(p));
                return A;
              },
            ];
          },
          !SUPPORTS_Y
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/es.string.trim.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/modules/es.string.trim.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var $ = __webpack_require__(
          /*! ../internals/export */ "./node_modules/core-js/internals/export.js"
        );
        var $trim = __webpack_require__(
          /*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js"
        ).trim;
        var forcedStringTrimMethod = __webpack_require__(
          /*! ../internals/forced-string-trim-method */ "./node_modules/core-js/internals/forced-string-trim-method.js"
        );

        // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim
        $(
          {
            target: "String",
            proto: true,
            forced: forcedStringTrimMethod("trim"),
          },
          {
            trim: function trim() {
              return $trim(this);
            },
          }
        );

        /***/
      },

    /***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
      /*!**********************************************************************!*\
        !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
        \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */ "./node_modules/core-js/internals/global.js"
        );
        var DOMIterables = __webpack_require__(
          /*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js"
        );
        var forEach = __webpack_require__(
          /*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js"
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js"
        );

        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype && CollectionPrototype.forEach !== forEach)
            try {
              createNonEnumerableProperty(
                CollectionPrototype,
                "forEach",
                forEach
              );
            } catch (error) {
              CollectionPrototype.forEach = forEach;
            }
        }

        /***/
      },

    /***/ "./node_modules/regenerator-runtime/runtime.js":
      /*!*****************************************************!*\
        !*** ./node_modules/regenerator-runtime/runtime.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        !(function (global) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          var inModule = typeof module === "object";
          var runtime = global.regeneratorRuntime;
          if (runtime) {
            if (inModule) {
              // If regeneratorRuntime is defined globally and we're in a module,
              // make the exports object identical to regeneratorRuntime.
              module.exports = runtime;
            }
            // Don't bother evaluating the rest of this file if the runtime was
            // already defined globally.
            return;
          }

          // Define the runtime globally (as expected by generated code) as either
          // module.exports (if we're in a module) or a new, empty object.
          runtime = global.regeneratorRuntime = inModule ? module.exports : {};

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          runtime.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          if (
            NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
          ) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          GeneratorFunction.prototype = Gp.constructor =
            GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] =
            GeneratorFunction.displayName = "GeneratorFunction";

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          runtime.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction ||
                  // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === "GeneratorFunction"
              : false;
          };

          runtime.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          runtime.awrap = function (arg) {
            return { __await: arg };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (
                  value &&
                  typeof value === "object" &&
                  hasOwn.call(value, "__await")
                ) {
                  return Promise.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  );
                }

                return Promise.resolve(value).then(function (unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration. If the Promise is rejected, however, the
                  // result for this iteration will be rejected with the same
                  // reason. Note that rejections of yielded Promises are not
                  // thrown back into the generator function, as is the case
                  // when an awaited Promise is rejected. This difference in
                  // behavior between yield and await is important, because it
                  // allows the consumer to decide what to do with the yielded
                  // rejection (swallow it and continue, manually .throw it back
                  // into the generator, abandon iteration, whatever). With
                  // await, by contrast, there is no opportunity to examine the
                  // rejection reason outside the generator function, so the
                  // only option is to throw it from the await expression, and
                  // let the generator function handle the exception.
                  result.value = unwrapped;
                  resolve(result);
                }, reject);
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return (previousPromise =
                // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };
          runtime.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          runtime.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList)
            );

            return runtime.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done
                    ? GenStateCompleted
                    : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done,
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }

          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                if (delegate.iterator.return) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                );
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;

              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;

              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          Gp[toStringTagSymbol] = "Generator";

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          runtime.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    }

                    next.value = undefined;
                    next.done = true;

                    return next;
                  };

                return (next.next = next);
              }
            }

            // Return an iterator with no values.
            return { next: doneResult };
          }
          runtime.values = values;

          function doneResult() {
            return { value: undefined, done: true };
          }

          Context.prototype = {
            constructor: Context,

            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = "next";
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (
                    name.charAt(0) === "t" &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))
                  ) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function () {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function (exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },

            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (
                finallyEntry &&
                (type === "break" || type === "continue") &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc
              ) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete: function (record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            catch: function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
            },

            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc,
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            },
          };
        })(
          // In sloppy mode, unbound `this` refers to the global object, fallback to
          // Function constructor if we're in global strict mode. That is sadly a form
          // of indirect eval which violates Content Security Policy.
          (function () {
            return this;
          })() || Function("return this")()
        );

        /***/
      },

    /***/ "./node_modules/webpack/buildin/global.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var g;

        // This works in non-strict mode
        g = (function () {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },

    /***/ "./node_modules/wow.js/dist/wow.min.js":
      /*!*********************************************!*\
        !*** ./node_modules/wow.js/dist/wow.min.js ***!
        \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*! WOW wow.js - v1.2.1 - 2016-09-05
         * https://wowjs.uk
         * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (
          a,
          b
        ) {
          if (true)
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = b),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          else {
            var c;
          }
        })(this, function (a, b) {
          "use strict";
          function c(a, b) {
            if (!(a instanceof b))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(a, b) {
            return b.indexOf(a) >= 0;
          }
          function e(a, b) {
            for (var c in b)
              if (null == a[c]) {
                var d = b[c];
                a[c] = d;
              }
            return a;
          }
          function f(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              a
            );
          }
          function g(a) {
            var b =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? !1
                  : arguments[1],
              c =
                arguments.length <= 2 || void 0 === arguments[2]
                  ? !1
                  : arguments[2],
              d =
                arguments.length <= 3 || void 0 === arguments[3]
                  ? null
                  : arguments[3],
              e = void 0;
            return (
              null != document.createEvent
                ? ((e = document.createEvent("CustomEvent")),
                  e.initCustomEvent(a, b, c, d))
                : null != document.createEventObject
                ? ((e = document.createEventObject()), (e.eventType = a))
                : (e.eventName = a),
              e
            );
          }
          function h(a, b) {
            null != a.dispatchEvent
              ? a.dispatchEvent(b)
              : b in (null != a)
              ? a[b]()
              : "on" + b in (null != a) && a["on" + b]();
          }
          function i(a, b, c) {
            null != a.addEventListener
              ? a.addEventListener(b, c, !1)
              : null != a.attachEvent
              ? a.attachEvent("on" + b, c)
              : (a[b] = c);
          }
          function j(a, b, c) {
            null != a.removeEventListener
              ? a.removeEventListener(b, c, !1)
              : null != a.detachEvent
              ? a.detachEvent("on" + b, c)
              : delete a[b];
          }
          function k() {
            return "innerHeight" in window
              ? window.innerHeight
              : document.documentElement.clientHeight;
          }
          Object.defineProperty(b, "__esModule", { value: !0 });
          var l,
            m,
            n = (function () {
              function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                  var d = b[c];
                  (d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    "value" in d && (d.writable = !0),
                    Object.defineProperty(a, d.key, d);
                }
              }
              return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b;
              };
            })(),
            o =
              window.WeakMap ||
              window.MozWeakMap ||
              (function () {
                function a() {
                  c(this, a), (this.keys = []), (this.values = []);
                }
                return (
                  n(a, [
                    {
                      key: "get",
                      value: function (a) {
                        for (var b = 0; b < this.keys.length; b++) {
                          var c = this.keys[b];
                          if (c === a) return this.values[b];
                        }
                      },
                    },
                    {
                      key: "set",
                      value: function (a, b) {
                        for (var c = 0; c < this.keys.length; c++) {
                          var d = this.keys[c];
                          if (d === a) return (this.values[c] = b), this;
                        }
                        return this.keys.push(a), this.values.push(b), this;
                      },
                    },
                  ]),
                  a
                );
              })(),
            p =
              window.MutationObserver ||
              window.WebkitMutationObserver ||
              window.MozMutationObserver ||
              ((m = l =
                (function () {
                  function a() {
                    c(this, a),
                      "undefined" != typeof console &&
                        null !== console &&
                        (console.warn(
                          "MutationObserver is not supported by your browser."
                        ),
                        console.warn(
                          "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                        ));
                  }
                  return n(a, [{ key: "observe", value: function () {} }]), a;
                })()),
              (l.notSupported = !0),
              m),
            q =
              window.getComputedStyle ||
              function (a) {
                var b = /(\-([a-z]){1})/g;
                return {
                  getPropertyValue: function (c) {
                    "float" === c && (c = "styleFloat"),
                      b.test(c) &&
                        c.replace(b, function (a, b) {
                          return b.toUpperCase();
                        });
                    var d = a.currentStyle;
                    return (null != d ? d[c] : void 0) || null;
                  },
                };
              },
            r = (function () {
              function a() {
                var b =
                  arguments.length <= 0 || void 0 === arguments[0]
                    ? {}
                    : arguments[0];
                c(this, a),
                  (this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                  }),
                  (this.animate = (function () {
                    return "requestAnimationFrame" in window
                      ? function (a) {
                          return window.requestAnimationFrame(a);
                        }
                      : function (a) {
                          return a();
                        };
                  })()),
                  (this.vendors = ["moz", "webkit"]),
                  (this.start = this.start.bind(this)),
                  (this.resetAnimation = this.resetAnimation.bind(this)),
                  (this.scrollHandler = this.scrollHandler.bind(this)),
                  (this.scrollCallback = this.scrollCallback.bind(this)),
                  (this.scrolled = !0),
                  (this.config = e(b, this.defaults)),
                  null != b.scrollContainer &&
                    (this.config.scrollContainer = document.querySelector(
                      b.scrollContainer
                    )),
                  (this.animationNameCache = new o()),
                  (this.wowEvent = g(this.config.boxClass));
              }
              return (
                n(a, [
                  {
                    key: "init",
                    value: function () {
                      (this.element = window.document.documentElement),
                        d(document.readyState, ["interactive", "complete"])
                          ? this.start()
                          : i(document, "DOMContentLoaded", this.start),
                        (this.finished = []);
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      var a = this;
                      if (
                        ((this.stopped = !1),
                        (this.boxes = [].slice.call(
                          this.element.querySelectorAll(
                            "." + this.config.boxClass
                          )
                        )),
                        (this.all = this.boxes.slice(0)),
                        this.boxes.length)
                      )
                        if (this.disabled()) this.resetStyle();
                        else
                          for (var b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            this.applyStyle(c, !0);
                          }
                      if (
                        (this.disabled() ||
                          (i(
                            this.config.scrollContainer || window,
                            "scroll",
                            this.scrollHandler
                          ),
                          i(window, "resize", this.scrollHandler),
                          (this.interval = setInterval(
                            this.scrollCallback,
                            50
                          ))),
                        this.config.live)
                      ) {
                        var d = new p(function (b) {
                          for (var c = 0; c < b.length; c++)
                            for (
                              var d = b[c], e = 0;
                              e < d.addedNodes.length;
                              e++
                            ) {
                              var f = d.addedNodes[e];
                              a.doSync(f);
                            }
                        });
                        d.observe(document.body, {
                          childList: !0,
                          subtree: !0,
                        });
                      }
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      (this.stopped = !0),
                        j(
                          this.config.scrollContainer || window,
                          "scroll",
                          this.scrollHandler
                        ),
                        j(window, "resize", this.scrollHandler),
                        null != this.interval && clearInterval(this.interval);
                    },
                  },
                  {
                    key: "sync",
                    value: function () {
                      p.notSupported && this.doSync(this.element);
                    },
                  },
                  {
                    key: "doSync",
                    value: function (a) {
                      if (
                        (("undefined" != typeof a && null !== a) ||
                          (a = this.element),
                        1 === a.nodeType)
                      ) {
                        a = a.parentNode || a;
                        for (
                          var b = a.querySelectorAll(
                              "." + this.config.boxClass
                            ),
                            c = 0;
                          c < b.length;
                          c++
                        ) {
                          var e = b[c];
                          d(e, this.all) ||
                            (this.boxes.push(e),
                            this.all.push(e),
                            this.stopped || this.disabled()
                              ? this.resetStyle()
                              : this.applyStyle(e, !0),
                            (this.scrolled = !0));
                        }
                      }
                    },
                  },
                  {
                    key: "show",
                    value: function (a) {
                      return (
                        this.applyStyle(a),
                        (a.className =
                          a.className + " " + this.config.animateClass),
                        null != this.config.callback && this.config.callback(a),
                        h(a, this.wowEvent),
                        i(a, "animationend", this.resetAnimation),
                        i(a, "oanimationend", this.resetAnimation),
                        i(a, "webkitAnimationEnd", this.resetAnimation),
                        i(a, "MSAnimationEnd", this.resetAnimation),
                        a
                      );
                    },
                  },
                  {
                    key: "applyStyle",
                    value: function (a, b) {
                      var c = this,
                        d = a.getAttribute("data-wow-duration"),
                        e = a.getAttribute("data-wow-delay"),
                        f = a.getAttribute("data-wow-iteration");
                      return this.animate(function () {
                        return c.customStyle(a, b, d, e, f);
                      });
                    },
                  },
                  {
                    key: "resetStyle",
                    value: function () {
                      for (var a = 0; a < this.boxes.length; a++) {
                        var b = this.boxes[a];
                        b.style.visibility = "visible";
                      }
                    },
                  },
                  {
                    key: "resetAnimation",
                    value: function (a) {
                      if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                        var b = a.target || a.srcElement;
                        b.className = b.className
                          .replace(this.config.animateClass, "")
                          .trim();
                      }
                    },
                  },
                  {
                    key: "customStyle",
                    value: function (a, b, c, d, e) {
                      return (
                        b && this.cacheAnimationName(a),
                        (a.style.visibility = b ? "hidden" : "visible"),
                        c && this.vendorSet(a.style, { animationDuration: c }),
                        d && this.vendorSet(a.style, { animationDelay: d }),
                        e &&
                          this.vendorSet(a.style, {
                            animationIterationCount: e,
                          }),
                        this.vendorSet(a.style, {
                          animationName: b
                            ? "none"
                            : this.cachedAnimationName(a),
                        }),
                        a
                      );
                    },
                  },
                  {
                    key: "vendorSet",
                    value: function (a, b) {
                      for (var c in b)
                        if (b.hasOwnProperty(c)) {
                          var d = b[c];
                          a["" + c] = d;
                          for (var e = 0; e < this.vendors.length; e++) {
                            var f = this.vendors[e];
                            a[
                              "" + f + c.charAt(0).toUpperCase() + c.substr(1)
                            ] = d;
                          }
                        }
                    },
                  },
                  {
                    key: "vendorCSS",
                    value: function (a, b) {
                      for (
                        var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                        e < this.vendors.length;
                        e++
                      ) {
                        var f = this.vendors[e];
                        d = d || c.getPropertyCSSValue("-" + f + "-" + b);
                      }
                      return d;
                    },
                  },
                  {
                    key: "animationName",
                    value: function (a) {
                      var b = void 0;
                      try {
                        b = this.vendorCSS(a, "animation-name").cssText;
                      } catch (c) {
                        b = q(a).getPropertyValue("animation-name");
                      }
                      return "none" === b ? "" : b;
                    },
                  },
                  {
                    key: "cacheAnimationName",
                    value: function (a) {
                      return this.animationNameCache.set(
                        a,
                        this.animationName(a)
                      );
                    },
                  },
                  {
                    key: "cachedAnimationName",
                    value: function (a) {
                      return this.animationNameCache.get(a);
                    },
                  },
                  {
                    key: "scrollHandler",
                    value: function () {
                      this.scrolled = !0;
                    },
                  },
                  {
                    key: "scrollCallback",
                    value: function () {
                      if (this.scrolled) {
                        this.scrolled = !1;
                        for (var a = [], b = 0; b < this.boxes.length; b++) {
                          var c = this.boxes[b];
                          if (c) {
                            if (this.isVisible(c)) {
                              this.show(c);
                              continue;
                            }
                            a.push(c);
                          }
                        }
                        (this.boxes = a),
                          this.boxes.length || this.config.live || this.stop();
                      }
                    },
                  },
                  {
                    key: "offsetTop",
                    value: function (a) {
                      for (; void 0 === a.offsetTop; ) a = a.parentNode;
                      for (var b = a.offsetTop; a.offsetParent; )
                        (a = a.offsetParent), (b += a.offsetTop);
                      return b;
                    },
                  },
                  {
                    key: "isVisible",
                    value: function (a) {
                      var b =
                          a.getAttribute("data-wow-offset") ||
                          this.config.offset,
                        c =
                          (this.config.scrollContainer &&
                            this.config.scrollContainer.scrollTop) ||
                          window.pageYOffset,
                        d = c + Math.min(this.element.clientHeight, k()) - b,
                        e = this.offsetTop(a),
                        f = e + a.clientHeight;
                      return d >= e && f >= c;
                    },
                  },
                  {
                    key: "disabled",
                    value: function () {
                      return !this.config.mobile && f(navigator.userAgent);
                    },
                  },
                ]),
                a
              );
            })();
          (b["default"] = r), (a.exports = b["default"]);
        });

        /***/
      },

    /***/ "./src/js/main.js":
      /*!************************!*\
        !*** ./src/js/main.js ***!
        \************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var wow_js_dist_wow_min__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! wow.js/dist/wow.min */ "./node_modules/wow.js/dist/wow.min.js"
          );
        /* harmony import */ var wow_js_dist_wow_min__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            wow_js_dist_wow_min__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./modules/modal */ "./src/js/modules/modal.js"
          );
        /* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./modules/slider */ "./src/js/modules/slider.js"
          );
        /* harmony import */ var _modules_sendForms__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./modules/sendForms */ "./src/js/modules/sendForms.js"
          );
        /* harmony import */ var _modules_inputMask__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./modules/inputMask */ "./src/js/modules/inputMask.js"
          );
        /* harmony import */ var _modules_checkTextInput__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./modules/checkTextInput */ "./src/js/modules/checkTextInput.js"
          );
        /* harmony import */ var _modules_showMoreImg__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./modules/showMoreImg */ "./src/js/modules/showMoreImg.js"
          );
        /* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./modules/calculator */ "./src/js/modules/calculator.js"
          );
        /* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./modules/filter */ "./src/js/modules/filter.js"
          );
        /* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js"
          );
        /* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./modules/accordion */ "./src/js/modules/accordion.js"
          );
        /* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./modules/burger */ "./src/js/modules/burger.js"
          );
        /* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./modules/smoothScroll */ "./src/js/modules/smoothScroll.js"
          );
        /* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");

        document.addEventListener("DOMContentLoaded", function () {
          new wow_js_dist_wow_min__WEBPACK_IMPORTED_MODULE_0___default.a().init();
          Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
          Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(
            ".feedback-slider-item",
            ".main-prev-btn",
            ".main-next-btn",
            "fadeInRight",
            "fadeInLeft"
          );
          Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(
            ".main-slider-item",
            "",
            "",
            "fadeInUp",
            "fadeInDown"
          );
          Object(_modules_sendForms__WEBPACK_IMPORTED_MODULE_3__["default"])();
          Object(_modules_inputMask__WEBPACK_IMPORTED_MODULE_4__["default"])(
            "[name='phone']"
          );
          Object(
            _modules_checkTextInput__WEBPACK_IMPORTED_MODULE_5__["default"]
          )("[name='name']");
          Object(
            _modules_checkTextInput__WEBPACK_IMPORTED_MODULE_5__["default"]
          )("[name='message']");
          Object(_modules_showMoreImg__WEBPACK_IMPORTED_MODULE_6__["default"])(
            ".button-styles",
            "#styles .row"
          );
          Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_7__["default"])(
            "#size",
            "#material",
            "#options",
            ".promocode",
            ".calc-price"
          );
          Object(_modules_filter__WEBPACK_IMPORTED_MODULE_8__["default"])();
          Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_9__["default"])(
            ".sizes-block"
          );
          Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_10__["default"])(
            ".accordion-heading"
          );
          Object(_modules_burger__WEBPACK_IMPORTED_MODULE_11__["default"])(
            ".burger",
            ".burger-menu"
          );
          Object(
            _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_12__["default"]
          )(30);
          Object(_modules_drop__WEBPACK_IMPORTED_MODULE_13__["default"])();
        });

        /***/
      },

    /***/ "./src/js/modules/accordion.js":
      /*!*************************************!*\
        !*** ./src/js/modules/accordion.js ***!
        \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__
          );

        /**
         * Create accordion
         *
         * @function
         * @param {string} trigger - accordion trigger
         *
         * @module
         *
         */
        var accordion = function accordion(trigger) {
          var accordionTrigger = document.querySelectorAll(trigger);
          accordionTrigger.forEach(function (elem) {
            elem.addEventListener("click", function () {
              if (!this.classList.contains("active")) {
                accordionTrigger.forEach(function (elem) {
                  elem.classList.remove("active");
                  elem.nextElementSibling.style.maxHeight = 0;
                  elem.nextElementSibling.classList.remove("show");
                });
                this.classList.add("active");
                this.nextElementSibling.classList.add("show");
                this.nextElementSibling.style.maxHeight =
                  this.nextElementSibling.scrollHeight + 60 + "px";
              } else {
                this.classList.remove("active");
                this.nextElementSibling.classList.remove("show");
                this.nextElementSibling.style.maxHeight = 0;
              }
            });
          });
        };

        /* harmony default export */ __webpack_exports__["default"] = accordion;

        /***/
      },

    /***/ "./src/js/modules/burger.js":
      /*!**********************************!*\
        !*** ./src/js/modules/burger.js ***!
        \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /**
         * Initialize burger menu from 992 size
         *
         * @param {string} burgerSelector - btn selector burger menu
         * @param {string} burgerMenuSelector - burger menu selector
         *
         */
        var burger = function burger(burgerSelector, burgerMenuSelector) {
          var burgerTrigger = document.querySelector(burgerSelector),
            burgerMenu = document.querySelector(burgerMenuSelector);
          burgerMenu.style.display = "none";
          burgerTrigger.addEventListener("click", function () {
            if (
              burgerMenu.style.display === "none" &&
              window.screen.availWidth <= 992
            ) {
              burgerMenu.style.display = "block";
            } else {
              burgerMenu.style.display = "none";
            }
          });
          window.addEventListener("resize", function () {
            if (window.screen.availWidth >= 993)
              burgerMenu.style.display = "none";
          });
        };

        /* harmony default export */ __webpack_exports__["default"] = burger;

        /***/
      },

    /***/ "./src/js/modules/calculator.js":
      /*!**************************************!*\
        !*** ./src/js/modules/calculator.js ***!
        \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js"
          );
        /* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../services/request */ "./src/js/services/request.js"
          );

        var calculator = function calculator(
          size,
          material,
          options,
          promo,
          price
        ) {
          var sizeBlock = document.querySelector(size),
            materialBlock = document.querySelector(material),
            optionsBlock = document.querySelector(options),
            promoBlock = document.querySelector(promo),
            priceBlock = document.querySelector(price);

          function calcFunc() {
            var sum = 0;
            Object(_services_request__WEBPACK_IMPORTED_MODULE_1__["getResurs"])(
              "./assets/db.json"
            ).then(function (res) {
              var data = res.calcPrice;
              sum = Math.round(
                data.size[sizeBlock.value] *
                  data.material[materialBlock.value] +
                  data.options[optionsBlock.value]
              );

              if (sizeBlock.value === "" || materialBlock.value === "") {
                priceBlock.textContent =
                  "Пожалуйста, сделайте выбор размера и материала картины.";
              } else if (promoBlock.value.trim() === "IWANTPOPART") {
                priceBlock.textContent = Math.round(sum * 0.7) + " грн";
              } else {
                priceBlock.textContent = sum + " грн";
              }
            });
          }

          sizeBlock.addEventListener("change", calcFunc);
          materialBlock.addEventListener("change", calcFunc);
          optionsBlock.addEventListener("change", calcFunc);
          promoBlock.addEventListener("input", calcFunc);
        };

        /* harmony default export */ __webpack_exports__["default"] =
          calculator;

        /***/
      },

    /***/ "./src/js/modules/checkTextInput.js":
      /*!******************************************!*\
        !*** ./src/js/modules/checkTextInput.js ***!
        \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js"
          );
        /* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js"
          );
        /* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__
          );

        var checkTextInput = function checkTextInput(select) {
          var inputs = document.querySelectorAll(select);
          inputs.forEach(function (elem) {
            elem.addEventListener("input", function (e) {
              e.target.value = e.target.value.replace(/[^а-яё 0-9]/gi, "");
              e.target.value = e.target.value.trim();
            });
          });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          checkTextInput;

        /***/
      },

    /***/ "./src/js/modules/drop.js":
      /*!********************************!*\
        !*** ./src/js/modules/drop.js ***!
        \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js"
          );
        /* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js"
          );
        /* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js"
          );
        /* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js"
          );
        /* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js"
          );
        /* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js"
          );
        /* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js"
          );
        /* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js"
          );
        /* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__
          );
        /* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../services/request */ "./src/js/services/request.js"
          );

        // dragenter
        // dragleave
        // dragover
        // drop

        var drop = function drop() {
          function highlight(item) {
            item.closest(".file_upload").style.cssText =
              "\n                        background-color: #00000021;\n                        border: 2px solid #ff0000;\n                        border-radius: 5px;\n                        padding: 5px;\n                ";
          }

          function unHighlight(item) {
            item.closest(".file_upload").style.cssText =
              "\n                    background-color: transparent;\n                    border: none;\n                    border-radius: 5px;\n                    padding: 0;\n                ";
          }

          var upload = document.querySelectorAll("[name='upload']");
          ["dragenter", "dragleave", "dragover", "drop"].forEach(function (
            eventsDrag
          ) {
            upload.forEach(function (item) {
              item.addEventListener(eventsDrag, function (event) {
                event.preventDefault();
              });
            });
          });
          ["dragenter", "dragover"].forEach(function (eventDragenter) {
            upload.forEach(function (item) {
              item.addEventListener(eventDragenter, function () {
                return highlight(item);
              });
            });
          });
          ["dragleave", "drop"].forEach(function (eventDragenter) {
            upload.forEach(function (item) {
              item.addEventListener(eventDragenter, function () {
                return unHighlight(item);
              });
            });
          });
          upload.forEach(function (input) {
            ["change", "drop"].forEach(function (events) {
              input.addEventListener(events, function (e) {
                if (e.type === "drop") {
                  input.files = e.dataTransfer.files;
                }

                var uploadStr = input.files[0].name.split(".");
                input.previousElementSibling.textContent =
                  uploadStr[0].length > 6
                    ? ""
                        .concat(uploadStr[0].slice(0, 6), "...")
                        .concat(uploadStr[1])
                    : uploadStr.join(".");
                var alertForm = input.previousElementSibling;

                if (!input.closest("form")) {
                  var formData = new FormData();
                  formData.append("photo", input.files[0]);
                  console.log(formData);
                  Object(
                    _services_request__WEBPACK_IMPORTED_MODULE_9__["postData"]
                  )("assets/design.php", formData)
                    .then(function (elem) {
                      console.log(elem);
                      alertForm.textContent = "Данные отправлены";
                    })
                    .catch(function (error) {
                      console.error(error);
                      alertForm.textContent = "Произошла ошибка";
                    })
                    .finally(function () {
                      setInterval(function () {
                        alertForm.textContent = "Файл не выбран";
                      }, 3000);
                    });
                }
              });
            });
          });
        };

        /* harmony default export */ __webpack_exports__["default"] = drop;

        /***/
      },

    /***/ "./src/js/modules/filter.js":
      /*!**********************************!*\
        !*** ./src/js/modules/filter.js ***!
        \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__
          );

        var filter = function filter() {
          var portfolioMenu = document.querySelector(".portfolio-menu"),
            portfolioMenuBtn = document.querySelectorAll(".portfolio-menu li"),
            allPhoto = document.querySelectorAll(".portfolio-wrapper .all"),
            noPortfolioImg = document.querySelector(".portfolio-no");
          portfolioMenu.addEventListener("click", function (event) {
            var target = event.target;
            var isPortfolioImg = true;

            if (target && target.closest(".portfolio-menu li")) {
              portfolioMenuBtn.forEach(function (item) {
                item.classList.remove("active");
              });
              target.classList.add("active");
              noPortfolioImg.classList.add("animated");
              noPortfolioImg.classList.remove("fadeIn");
              noPortfolioImg.style.display = "none"; // show filter img

              allPhoto.forEach(function (item) {
                item.classList.add("animated");
                item.classList.remove("fadeIn");
                item.style.display = "none";

                if (item.classList.contains(target.classList[0])) {
                  item.style.display = "block";
                  setInterval(function () {
                    return item.classList.add("fadeIn");
                  });
                  isPortfolioImg = false;
                }
              });

              if (isPortfolioImg) {
                noPortfolioImg.style.display = "block";
                noPortfolioImg.classList.add("fadeIn");
              }
            }
          });
        };

        /* harmony default export */ __webpack_exports__["default"] = filter;

        /***/
      },

    /***/ "./src/js/modules/inputMask.js":
      /*!*************************************!*\
        !*** ./src/js/modules/inputMask.js ***!
        \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js"
          );
        /* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__
          );

        var inputMask = function inputMask(selector) {
          var setCursorPosition = function setCursorPosition(pos, elem) {
            elem.focus();

            if (elem.setSelectionRange) {
              elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
              var range = elem.createTextRange();
              range.collapse(true);
              range.moveEnd("cahracter", pos);
              range.moveStart("cahracter", pos);
              range.select();
            }
          };

          function createMask(event) {
            var matrix = "+380 (__) ___ __ __",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              value = this.value.replace(/\D/g, "");

            if (def.length >= value.length) {
              value = def;
            }

            this.value = matrix.replace(/./g, function (a) {
              return /[_\d]/.test(a) && i < value.length
                ? value.charAt(i++)
                : i >= value.length
                ? ""
                : a;
            });

            if (event.type === "blur") {
              if (this.value.length === 4) {
                this.value = "";
              }
            } else {
              setCursorPosition(this.value.length, this);
            }
          }

          var inputs = document.querySelectorAll(selector);
          inputs.forEach(function (input) {
            input.addEventListener("focus", createMask);
            input.addEventListener("blur", createMask);
            input.addEventListener("input", createMask);
            input.addEventListener("click", createMask);
          });
        };

        /* harmony default export */ __webpack_exports__["default"] = inputMask;

        /***/
      },

    /***/ "./src/js/modules/modal.js":
      /*!*********************************!*\
        !*** ./src/js/modules/modal.js ***!
        \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__
          );

        var modal = function modal() {
          var checkOpenModal = false;

          function bindModal(triggerOpen, modal, triggerClose) {
            var destruction =
              arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : false;
            var openBtn = document.querySelectorAll(triggerOpen),
              modalWindow = document.querySelector(modal),
              gift = document.querySelector(".fixed-gift"),
              body = document.querySelector("body");

            function showWindow() {
              if (modalWindow.querySelector("form")) {
                modalWindow.querySelector("form").classList.remove("bounceIn");
              }

              modalWindow.classList.add("modal-show");
              body.style.cssText =
                "\n            overflow: hidden;\n            margin-right: ".concat(
                  getWidthScrollBar(),
                  "px;\n        "
                );

              if (gift) {
                gift.style.marginRight = "".concat(getWidthScrollBar(), "px");
              }
            }

            function hiddenModal() {
              if (modalWindow.classList.contains("modal-show")) {
                modalWindow.classList.remove("modal-show");
              }

              body.style.cssText =
                '\n            overflow: "",\n            margin-right: 0,\n        ';

              if (gift) {
                gift.style.marginRight = "0";
              }
            }

            openBtn.forEach(function (elem) {
              elem.addEventListener("click", function () {
                showWindow();

                if (destruction) {
                  if (elem.matches(".fixed-gift")) {
                    elem.classList.add("gift-hidden");
                    setTimeout(function () {
                      elem.remove();
                    }, 750);
                  } else {
                    elem.remove();
                  }
                }

                checkOpenModal = true;
              });
            });
            modalWindow.addEventListener("click", function (e) {
              if (
                (e.target && e.target.matches(triggerClose)) ||
                e.target.matches(modal)
              ) {
                hiddenModal();
              }
            });
          }

          function getWidthScrollBar() {
            var body = document.querySelector("body");
            var div = document.createElement("div"),
              result = null;
            div.style.cssText =
              "\n          width: 50px;\n          height: 50px;\n          overflow-y: scroll;\n          visibility: hidden;\n        ";
            body.append(div);
            result = div.offsetWidth - div.clientWidth;
            div.remove();
            return result;
          }

          function showModalByTimer(selector, time) {
            setTimeout(function () {
              var status = true;
              var allModalWindow = document.querySelectorAll("[data-modal]"),
                modalWindow = document.querySelector(selector),
                gift = document.querySelector(".fixed-gift"),
                body = document.querySelector("body");
              allModalWindow.forEach(function (elem) {
                if (elem.classList.contains("modal-show")) {
                  status = false;
                }
              });

              if (status) {
                modalWindow.classList.add("modal-show");
                body.style.cssText =
                  "\n            overflow: hidden;\n            margin-right: ".concat(
                    getWidthScrollBar(),
                    "px;\n        "
                  );

                if (gift) {
                  gift.style.marginRight = "".concat(getWidthScrollBar(), "px");
                }
              }
            }, time);
          }

          function openByScroll(selector) {
            window.addEventListener("scroll", function () {
              if (!checkOpenModal) {
                var heightTotalWindow =
                    Math.max(
                      document.documentElement.scrollHeight,
                      document.body.scrollHeight
                    ) - 2,
                  heightVisibleWindow = document.documentElement.clientHeight,
                  scrollPositionNow = document.documentElement.scrollTop;

                if (
                  heightTotalWindow <=
                  heightVisibleWindow + scrollPositionNow
                ) {
                  document.querySelector(selector).click();
                }
              }
            });
          }

          bindModal(".button-design", ".popup-design", ".popup-close");
          bindModal(
            ".button-consultation",
            ".popup-consultation",
            ".popup-close"
          );
          bindModal(".fixed-gift", ".popup-gift", ".popup-close", true); // showModalByTimer(".popup-consultation", 3000)

          openByScroll(".fixed-gift");
        };

        /* harmony default export */ __webpack_exports__["default"] = modal;

        /***/
      },

    /***/ "./src/js/modules/pictureSize.js":
      /*!***************************************!*\
        !*** ./src/js/modules/pictureSize.js ***!
        \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js"
          );
        /* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__
          );

        var pictureSize = function pictureSize(sizeBlocks) {
          var blocks = document.querySelectorAll(sizeBlocks);

          function showImg(block) {
            var p = block.querySelectorAll("p:not(.sizes-hit)");
            var img = block.querySelector("img");
            p.forEach(function (elem) {
              elem.style.display = "none";
            });
            img.src = img.src.slice(0, -4) + "-1.png";
          }

          function hiddenImg(block) {
            var p = block.querySelectorAll("p:not(.sizes-hit)");
            var img = block.querySelector("img");
            p.forEach(function (elem) {
              elem.style.display = "block";
            });
            img.src = img.src.slice(0, -6) + ".png";
          }

          blocks.forEach(function (item) {
            item.addEventListener("mouseenter", function () {
              showImg(item);
            });
            item.addEventListener("mouseleave", function () {
              hiddenImg(item);
            });
          });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          pictureSize;

        /***/
      },

    /***/ "./src/js/modules/sendForms.js":
      /*!*************************************!*\
        !*** ./src/js/modules/sendForms.js ***!
        \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js"
          );
        /* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js"
          );
        /* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js"
          );
        /* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js"
          );
        /* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js"
          );
        /* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js"
          );
        /* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js"
          );
        /* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js"
          );
        /* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__
          );
        /* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../services/request */ "./src/js/services/request.js"
          );

        var sendForms = function sendForms() {
          var forms = document.querySelectorAll("form"),
            upload = document.querySelectorAll("[type='file']");
          var statusForm = {
            load: "Отправка....",
            success: "Мы с Вами скоро свяжемся. ;-)",
            failure: "Что-то пошло не так. :-(",
            spinner: "assets/img/spinner.gif",
            ok: "assets/img/ok.png",
            fail: "assets/img/fail.png",
          };
          var path = {
            design: "assets/design.php",
            consultation: "assets/server.php",
          };

          var clearForms = function clearForms() {
            forms.forEach(function (elem) {
              elem.reset();
            });
            upload.forEach(function (item) {
              item.previousElementSibling.textContent = "Файл не выбран";
            });
          };

          upload.forEach(function (item) {
            item.addEventListener("input", function () {
              var uploadStr = item.files[0].name.split(".");
              item.previousElementSibling.textContent =
                uploadStr[0].length > 6
                  ? ""
                      .concat(uploadStr[0].slice(0, 6), "...")
                      .concat(uploadStr[1])
                  : uploadStr.join(".");
            });
          });
          forms.forEach(function (el) {
            el.addEventListener("submit", function (e) {
              e.preventDefault();
              var formData = new FormData(el);

              if (el.querySelector(".calc-price")) {
                formData.append(
                  "price",
                  el.querySelector(".calc-price").textContent
                );
                el.querySelector(".calc-price").textContent =
                  "Для расчета нужно выбрать размер картины и материал картины";
              }

              var statusMessage = document.createElement("div");
              statusMessage.classList.add("status", "animated", "bounceIn");
              statusMessage.style.cssText =
                "\n                                        display: flex;\n                                        justify-content: center;\n                                        align-items: center;\n                                    ";
              var statusImg = document.createElement("img");
              statusImg.setAttribute("src", statusForm.spinner);
              statusImg.setAttribute("width", "150");
              statusImg.setAttribute("height", "150");
              var statusText = document.createElement("p");
              statusText.textContent = statusForm.load;
              statusMessage.append(statusImg);
              statusMessage.append(statusText);
              el.classList.add("animated", "fadeOutUp");
              setTimeout(function () {
                el.style.display = "none";
                el.parentNode.append(statusMessage);
              }, 750);
              var url =
                el.closest(".popup-design") || el.closest(".form_calc")
                  ? path.design
                  : path.consultation;
              Object(
                _services_request__WEBPACK_IMPORTED_MODULE_9__["postData"]
              )(url, formData)
                .then(function (res) {
                  console.log(res);
                  statusImg.setAttribute("src", statusForm.ok);
                  statusText.textContent = statusForm.success;
                })
                .catch(function (e) {
                  statusImg.setAttribute("src", statusForm.fail);
                  statusText.textContent = statusForm.failure;
                  console.error(e);
                })
                .finally(function () {
                  clearForms();
                  setTimeout(function () {
                    el.classList.remove("fadeOutUp");
                    el.style.display = "block";
                    el.classList.add("bounceIn");
                    statusMessage.remove();
                  }, 5000);
                });
            });
          });
        };

        /* harmony default export */ __webpack_exports__["default"] = sendForms;

        /***/
      },

    /***/ "./src/js/modules/showMoreImg.js":
      /*!***************************************!*\
        !*** ./src/js/modules/showMoreImg.js ***!
        \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js"
          );
        /* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js"
          );
        /* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../services/request */ "./src/js/services/request.js"
          );

        var showMoreImg = function showMoreImg(trigger, container) {
          var btn = document.querySelector(trigger);
          btn.addEventListener("click", function () {
            var _this = this;

            Object(_services_request__WEBPACK_IMPORTED_MODULE_3__["getResurs"])(
              "assets/db.json1"
            )
              .then(function (res) {
                if (
                  _this.nextElementSibling != null &&
                  _this.nextElementSibling.matches(".alert-error")
                ) {
                  _this.nextElementSibling.remove();
                }

                res["styles"].forEach(function (elem) {
                  var card = createCard(elem);
                  document.querySelector(container).append(card);
                });

                _this.remove();
              })
              .catch(function (error) {
                if (
                  _this.nextElementSibling != null &&
                  _this.nextElementSibling.matches(".alert-error")
                ) {
                  _this.nextElementSibling.remove();
                }

                var alertError = document.createElement("div");
                alertError.classList.add("alert-error", "animated", "bounceIn");
                alertError.textContent =
                  "Произошла ошибка при загрузке фотографий. Повторите попытку еще раз.";

                _this.after(alertError);

                console.error(error);
              });
          });

          function createCard(_ref) {
            var title = _ref.title,
              src = _ref.src,
              link = _ref.link;
            var card = document.createElement("div");
            card.classList.add(
              "col-sm-3",
              "col-sm-offset-0",
              "col-xs-10",
              "col-xs-offset-1",
              "animated",
              "fadeIn"
            );
            card.innerHTML =
              "\n            <div class=styles-block>\n                <img src="
                .concat(src, ' alt="card">\n                <h4>')
                .concat(title, '</h4>\n                <a href="')
                .concat(
                  link,
                  '">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n            </div>\n        '
                );
            return card;
          }
          /*
            cards.forEach(elem => {
                elem.classList.add("animated", "fadeIn");
            })
              btn.addEventListener("click", () => {
                cards.forEach(elem => {
                    elem.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2",);
                    elem.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
                })
                    btn.remove();
            })
            */
        };

        /* harmony default export */ __webpack_exports__["default"] =
          showMoreImg;

        /***/
      },

    /***/ "./src/js/modules/slider.js":
      /*!**********************************!*\
        !*** ./src/js/modules/slider.js ***!
        \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__
          );

        var slider = function slider(itemSlide, prev, next) {
          var animatePrev =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : "zoomIn";
          var animateNext =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : "zoomIn";
          var slide = document.querySelectorAll(itemSlide);
          var pauser = setInterval(nextSlide, 3000);
          var startSlide = 0;

          function showSlide(countSlide, animate) {
            slide.forEach(function (elem) {
              elem.style.display = "none";
              elem.classList.remove(animatePrev);
              elem.classList.remove(animateNext);
            });
            slide[countSlide].classList.add(animate);
            slide[countSlide].style.display = "block";
          }

          function prevSlide() {
            startSlide--;

            if (startSlide < 0) {
              startSlide = slide.length - 1;
            }

            showSlide(startSlide, animatePrev);
          }

          function nextSlide() {
            startSlide++;

            if (startSlide >= slide.length) {
              startSlide = 0;
            }

            showSlide(startSlide, animateNext);
          }

          slide.forEach(function (elem) {
            elem.classList.add("animated");
            elem.style.display = "none";
          });
          slide[0].parentElement.addEventListener("mouseover", function () {
            clearInterval(pauser);
          });
          slide[0].parentElement.addEventListener("mouseout", function () {
            pauser = setInterval(nextSlide, 3000);
          });

          function showFirstSlide() {
            slide[0].style.display = "block";
            slide[0].classList.add("zoomIn");
            setTimeout(function () {
              slide[0].classList.remove("zoomIn");
            }, 1000);
          }

          showFirstSlide();

          try {
            var btnPrev = document.querySelector(prev),
              btnNext = document.querySelector(next);
            btnPrev.addEventListener("click", function (e) {
              if (e.target.closest(prev)) {
                prevSlide();
              }
            });
            btnNext.addEventListener("click", function (e) {
              if (e.target.closest(next)) {
                nextSlide();
              }
            });
          } catch (e) {}
        };

        /* harmony default export */ __webpack_exports__["default"] = slider;

        /***/
      },

    /***/ "./src/js/modules/smoothScroll.js":
      /*!****************************************!*\
        !*** ./src/js/modules/smoothScroll.js ***!
        \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js"
          );
        /* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__
          );

        var smoothScroll = function smoothScroll(speed) {
          var triggerScroll = document.querySelectorAll("a");
          var btnUp = document.querySelector("[href='#up']"); // (show / hidden) up button

          document.addEventListener("scroll", function () {
            if (
              document.documentElement.clientHeight <=
              document.documentElement.scrollTop
            ) {
              btnUp.classList.add("animated", "fadeIn");
              btnUp.classList.remove("fadeOut");
            } else {
              btnUp.classList.add("fadeOut");
              btnUp.classList.remove("fadeIn");
            }
          });
          triggerScroll.forEach(function (elem) {
            if (elem.hash !== "") {
              var element = document.documentElement,
                to = document.querySelector(elem.hash).offsetTop;
              elem.addEventListener("click", function (event) {
                event.preventDefault();
                var scrolling = null;

                if (element.scrollTop < to) {
                  scrolling = setInterval(function () {
                    if (element.scrollTop < to) {
                      element.scrollTop += speed;
                    } else {
                      clearInterval(scrolling);
                    }
                  }, 4);
                }

                if (element.scrollTop > to) {
                  scrolling = setInterval(function () {
                    if (element.scrollTop > to) {
                      element.scrollTop -= speed;
                    } else {
                      clearInterval(scrolling);
                    }
                  }, 4);
                }
              });
            }
          });
        };

        /* harmony default export */ __webpack_exports__["default"] =
          smoothScroll;

        /***/
      },

    /***/ "./src/js/services/request.js":
      /*!************************************!*\
        !*** ./src/js/services/request.js ***!
        \************************************/
      /*! exports provided: postData, getResurs */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "postData",
          function () {
            return postData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getResurs",
          function () {
            return getResurs;
          }
        );
        /* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js"
          );
        /* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js"
          );
        /* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js"
          );
        /* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js"
          );
        /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__
          );

        var postData = function postData(url, data) {
          var response;
          return regeneratorRuntime.async(function postData$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return regeneratorRuntime.awrap(
                    fetch(url, {
                      method: "POST",
                      body: data,
                    })
                  );

                case 2:
                  response = _context.sent;

                  if (response.ok) {
                    _context.next = 5;
                    break;
                  }

                  throw new Error(
                    "Could not fetch "
                      .concat(url, ", status : ")
                      .concat(response.status)
                  );

                case 5:
                  _context.next = 7;
                  return regeneratorRuntime.awrap(response.text());

                case 7:
                  return _context.abrupt("return", _context.sent);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          });
        };

        var getResurs = function getResurs(url) {
          var response;
          return regeneratorRuntime.async(function getResurs$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.next = 2;
                  return regeneratorRuntime.awrap(fetch(url));

                case 2:
                  response = _context2.sent;

                  if (response.ok) {
                    _context2.next = 5;
                    break;
                  }

                  throw new Error(
                    "Could not fetch "
                      .concat(url, ", status : ")
                      .concat(response.status)
                  );

                case 5:
                  return _context2.abrupt("return", response.json());

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          });
        };

        /***/
      },

    /******/
  }
);

