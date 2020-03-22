(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../dist/fesm2015/ngx-vertical-sortable-menu.js":
  /*!******************************************************!*\
    !*** ../dist/fesm2015/ngx-vertical-sortable-menu.js ***!
    \******************************************************/

  /*! exports provided: NgxVerticalSortableMenuModule, ɵa */

  /***/
  function distFesm2015NgxVerticalSortableMenuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxVerticalSortableMenuModule", function () {
      return NgxVerticalSortableMenuModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NgxVerticalSortableMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/fesm2015/common.js");

    let NgxVerticalSortableMenuComponent = class NgxVerticalSortableMenuComponent {
      constructor(el) {
        this.el = el;
        this.clickEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menuSort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.indexflg = -1;
        this.changeNum = 0;

        this.moveHandler = () => {
          const event = window.event;
          const top = this.indexflg * this.liHeight;
          const move = event.clientY - this.initClientY;
          const nowIndex = this.indexflg + this.changeNum;
          this.dragElement.style.top = top + move + 'px';

          if (move > this.liHeight / 2 + this.changeNum * this.liHeight && nowIndex < this.menuListClone.length - 1) {
            const moveElement = this.el.nativeElement.querySelector("#drag-lt-index_".concat(nowIndex + 1));
            this.dragElement.setAttribute('id', "drag-lt-index_".concat(nowIndex + 1));
            moveElement.setAttribute('id', "drag-lt-index_".concat(nowIndex));
            moveElement.style.top = nowIndex * this.liHeight + 'px';
            this.changeNum++;
            return;
          }

          if (move < -this.liHeight / 2 + this.changeNum * this.liHeight && nowIndex > 0) {
            const moveElement = this.el.nativeElement.querySelector("#drag-lt-index_".concat(nowIndex - 1));
            this.dragElement.setAttribute('id', "drag-lt-index_".concat(nowIndex - 1));
            moveElement.setAttribute('id', "drag-lt-index_".concat(nowIndex));
            moveElement.style.top = nowIndex * this.liHeight + 'px';
            this.changeNum--;
            return;
          }
        };

        this.removeHandler = () => {
          this.initListstatus();
          document.removeEventListener('mousemove', this.moveHandler);
          document.removeEventListener('mouseup', this.removeHandler);
        };
      }

      ngOnInit() {}

      ngOnChanges(changes) {
        if (changes.menuList && changes.menuList.currentValue) {
          this.menuListClone = this.singleDeepClone(changes.menuList.currentValue);
        }
      }

      getItemIndex(event, index) {
        this.dragElement = this.el.nativeElement.querySelectorAll('.lt-menu')[index];
        this.indexflg = index;
        this.initClientY = event.clientY;
        document.addEventListener('mousemove', this.moveHandler);
        document.addEventListener('mouseup', this.removeHandler);
      }

      singleDeepClone(arr) {
        return arr.map(v => Object.assign({}, v));
      }

      initListstatus() {
        this.dragElement.style.top = (this.indexflg + this.changeNum) * this.liHeight + 'px';
        const item = this.menuListClone.splice(this.indexflg, 1);
        this.menuListClone.splice(this.changeNum + this.indexflg, 0, item[0]);
        this.menuSort.emit(this.menuListClone);
        this.changeNum = 0;
        this.indexflg = -1;
      }

      clickHandler(event, item) {
        event.stopPropagation();
        this.clickEmit.emit(item);
      }

      closeItem(event, item) {
        event.stopPropagation();
        this.closeEmit.emit(item);
      }

    };

    NgxVerticalSortableMenuComponent.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }];

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxVerticalSortableMenuComponent.prototype, "menuList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxVerticalSortableMenuComponent.prototype, "liHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxVerticalSortableMenuComponent.prototype, "clickEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxVerticalSortableMenuComponent.prototype, "closeEmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxVerticalSortableMenuComponent.prototype, "menuSort", void 0);
    NgxVerticalSortableMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-vertical-sortable-menu',
      template: "<ul class=\"menu-detail-items\">\n  <ng-container *ngFor=\"let lt of menuListClone;let i=index\">\n    <li class=\"lt-menu menu-btn\" [style.height]=\"liHeight + 'px'\" [class.isdrag]=\"i === indexflg\"\n        [style.top]=\"i*liHeight + 'px'\" [id]=\"'drag-lt-index_' + i\">\n      <img [src]=\"lt.icon\" class=\"icon\" *ngIf=\"!lt.iconType\" />\n      <i [class]=\"lt.icon\" *ngIf=\"lt.iconType === 'class'\"></i>\n      <span class=\"icon-name\" (click)=\"clickHandler($event, lt)\" [title]=\"lt.name\">{{lt.name}}</span>\n      <div class=\"handler-span\">\n        <span class=\"close\" (click)=\"closeItem($event, lt)\"></span>\n        <span class=\"drag\" (mousedown)=\"getItemIndex($event, i)\"></span>\n      </div>\n    </li>\n  </ng-container>\n</ul>\n",
      styles: [".menu-btn{width:100%;box-sizing:border-box;padding:0 16px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.menu-btn .icon{margin-right:16px;width:16px;height:16px;vertical-align:middle}.menu-btn i{margin-right:16px}.menu-btn .icon-name{display:inline-block;vertical-align:middle;width:66%;height:100%;cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.menu-btn .icon-name::before{display:inline-block;content:\"\";height:100%;vertical-align:middle}.menu-btn .handler-span{height:100%;position:absolute;right:12px;top:0;display:none;justify-content:space-around;-webkit-box-align:center;align-items:center;width:34px}.menu-btn .handler-span .close{display:inline-block;width:16px;height:16px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4T62TsU7DMBCG71fE+yCxwcQAMwPtSHmFKtI5eQPOShYGli7MtFKZ26ELsML7IPuQpYDc9LKQer273///+QwaeTByno4r4L3fEdETMy8tZ03TnMUYG2a+/K3vOfDeT4johYimfZG2bc9DCO/92kEES0RErgBsLGGTQS6iqt8A1tZwijEIMRNJfQeRTAY5OBG5AZB4kKpOnXOvFtihCNcJpqreAzghokXnInHYOxbECwDLGOPMObdN3V2cxxjjpKqqt1yh/4ynRLQqiuKuLMuPvLETeQgh3NZ1/Tm0B2mR5sz8ZeUVkRmAZ2b+u/i4q/yfjzXawQ/J5WkRId2O1QAAAABJRU5ErkJggg==);cursor:pointer}.menu-btn .handler-span .drag{display:inline-block;width:16px;height:16px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVQ4T2NkoBAwUqifgXYGdHV1zWdgYFjLxMT0/O/fv77l5eUN2FyL0wVdXV3/GRgYwv7//y/IyMg4s6ysDKtamnoB7AKos1eR7IKurq7QsrKy1SADkNno4YAvDOAGdHZ2ppWXl88agYEITkj//v37zcTEFFFWVpZIUhgQm0dol5CIdQEANRU8EY9O/LsAAAAASUVORK5CYII=);cursor:move}.menu-btn:hover{background:rgba(0,0,0,.05)}.menu-btn:hover .handler-span{display:-webkit-box;display:flex}.menu-top{z-index:2;background:#fff;border-bottom:1px solid #eaeef5}.menu-detail-items{list-style:none;margin:0;padding:0;position:relative;height:100%;width:100%;overflow-x:hidden;overflow-y:auto}.menu-detail-items .lt-menu{position:absolute;-webkit-transition:.2s ease-out;transition:.2s ease-out}.menu-detail-items .isdrag{z-index:1;background:#f5f7fa;-webkit-transition:none;transition:none}.menu-detail-items .isdrag .handler-span{display:-webkit-box;display:flex}"]
    })], NgxVerticalSortableMenuComponent);
    let NgxVerticalSortableMenuModule = class NgxVerticalSortableMenuModule {};
    NgxVerticalSortableMenuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [NgxVerticalSortableMenuComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [NgxVerticalSortableMenuComponent]
    })], NgxVerticalSortableMenuModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-vertical-sortable-menu.js.map

    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!***************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wp\">\n  <div style=\"height: 100vh;border-right: 1px solid #cccccc;width: 240px;\">\n    <ngx-vertical-sortable-menu\n    (closeEmit)=\"closeEmit($event)\"\n    (clickEmit)=\"clickEmit($event)\"\n    (menuSort)=\"menuSort($event)\"\n    [menuList]=\"menus\"\n    liHeight=\"40\"></ngx-vertical-sortable-menu>\n  </div>\n  <div class=\"right\" >\n    <p>Hi~ This is demo</p>\n    <div class=\"btn\">\n      <button (click)=\"pushHandler()\">+ Push</button>\n      <button (click)=\"shiftHandler()\">- Shift</button>\n    </div>\n    <div class=\"content-1\">\n      <div class=\"title\">Click Event</div>\n      <div class=\"con\"><b>Clicked: </b>{{clickEv}}</div>\n    </div>\n    <div class=\"content-2\">\n      <div class=\"title\">Menu Data</div>\n      <div class=\"pre-wp\">\n        <pre>{{groups}}</pre>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/tslib/tslib.es6.js":
  /*!******************************************!*\
    !*** ../node_modules/tslib/tslib.es6.js ***!
    \******************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wp {\n  display: -webkit-box;\n  display: flex;\n}\n.wp .right {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 35px 44px;\n}\n.wp .right .btn {\n  margin-bottom: 41px;\n  margin-top: 20px;\n}\n.wp .right .btn button {\n  padding: 5px 20px;\n  outline: 0;\n  border: 2px solid #2D8CF0;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.wp .right .btn button:first-child {\n  background: #2D8CF0;\n  margin-right: 29px;\n  color: #ffffff;\n}\n.wp .right .btn button:last-child {\n  background: #ffffff;\n}\n.wp .right .content-1 {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);\n  height: 90px;\n  width: 100%;\n  margin-bottom: 30px;\n  padding: 20px;\n}\n.wp .right .content-1 .title {\n  color: #aaaaaa;\n  margin-bottom: 20px;\n}\n.wp .right .content-1 .con {\n  margin: auto;\n  text-align: center;\n}\n.wp .right .content-1 .con b {\n  font-size: 14px;\n}\n.wp .right .content-2 {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);\n  height: 590px;\n  width: 100%;\n  padding: 20px;\n}\n.wp .right .content-2 .title {\n  color: #aaaaaa;\n  margin-bottom: 20px;\n}\n.wp .right .content-2 .pre-wp {\n  width: calc(100% - 20px);\n  height: 500px;\n  overflow: auto;\n}\n.wp .right .content-2 .pre-wp pre {\n  word-wrap: normal;\n  word-break: break-all;\n  white-space: pre;\n  overflow-x: scroll;\n  overscroll-behavior-x: contain;\n  margin-top: 0;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  z-index: 0;\n  padding: 1em;\n  line-height: 1.5;\n  color: #ccc;\n  background: #2d2d2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaWljL1JMRkUvbmd4LXZlcnRpYWwtc29ydGFibGUtbWVudS9leGFtcGxlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNDSjtBREFJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0daO0FERlk7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0loQjtBREhnQjtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDS3BCO0FESGdCO0VBQ0ksbUJBQUE7QUNLcEI7QUREUTtFQUNJLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNHWjtBREZZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDSWhCO0FERlk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNJaEI7QURIZ0I7RUFDSSxlQUFBO0FDS3BCO0FERFE7RUFDSSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0daO0FERlk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNJaEI7QURGWTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNJaEI7QURIZ0I7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDS3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5yaWdodCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IDM1cHggNDRweDtcbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMkQ4Q0YwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyRDhDRjA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjlweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29udGVudC0xIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMTIpO1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQtMiB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjEyKTtcbiAgICAgICAgICAgIGhlaWdodDogNTkwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJlLXdwIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICBwcmUge1xuICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJzY3JvbGwtYmVoYXZpb3IteDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgIH1cbn0iLCIud3Age1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndwIC5yaWdodCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDM1cHggNDRweDtcbn1cbi53cCAucmlnaHQgLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDQxcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ud3AgLnJpZ2h0IC5idG4gYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyRDhDRjA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndwIC5yaWdodCAuYnRuIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICMyRDhDRjA7XG4gIG1hcmdpbi1yaWdodDogMjlweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ud3AgLnJpZ2h0IC5idG4gYnV0dG9uOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLndwIC5yaWdodCAuY29udGVudC0xIHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi53cCAucmlnaHQgLmNvbnRlbnQtMSAudGl0bGUge1xuICBjb2xvcjogI2FhYWFhYTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi53cCAucmlnaHQgLmNvbnRlbnQtMSAuY29uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud3AgLnJpZ2h0IC5jb250ZW50LTEgLmNvbiBiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLndwIC5yaWdodCAuY29udGVudC0yIHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgaGVpZ2h0OiA1OTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ud3AgLnJpZ2h0IC5jb250ZW50LTIgLnRpdGxlIHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ud3AgLnJpZ2h0IC5jb250ZW50LTIgLnByZS13cCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ud3AgLnJpZ2h0IC5jb250ZW50LTIgLnByZS13cCBwcmUge1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteDogY29udGFpbjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiAwO1xuICBwYWRkaW5nOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'my-app';
        this.clickEv = '';
        this.index = 1;
      }

      ngOnInit() {
        setTimeout(() => {
          this.menus = [{
            name: 'weixin',
            url: '/weixin',
            icon: 'fa fa-weixin',
            iconType: 'class'
          }, {
            name: 'reddit',
            url: '/reddit',
            icon: 'fa fa-reddit',
            iconType: 'class'
          }, {
            name: 'weibo',
            url: '/weibo',
            icon: 'fa fa-weibo',
            iconType: 'class'
          }, {
            name: 'github',
            url: '/github',
            icon: 'fa fa-github',
            iconType: 'class'
          }, {
            name: 'slack',
            url: '/slack',
            icon: 'fa fa-slack',
            iconType: 'class'
          }, {
            name: 'stack-overflow',
            url: '/stack-overflow',
            icon: 'fa fa-stack-overflow',
            iconType: 'class'
          }, {
            name: 'wordpress',
            url: '/wordpress',
            icon: 'fa fa-wordpress',
            iconType: 'class'
          }, {
            name: 'vk',
            url: '/vk',
            icon: 'fa fa-vk',
            iconType: 'class'
          }, {
            name: 'usb',
            url: '/usb',
            icon: 'fa fa-usb',
            iconType: 'class'
          }];
        }, 1000);
      }

      clickEmit(item) {
        this.clickEv = item.name;
      }

      closeEmit(item) {
        this.menus = this.menus.filter(l => l.name !== item.name);
      }

      get groups() {
        return JSON.stringify(this.menus, null, '\t');
      }

      menuSort(groups) {
        this.menus = groups;
      }

      shiftHandler() {
        this.menus.shift();
        this.menus = [...this.menus];
      }

      pushHandler() {
        this.menus = [...this.menus, {
          name: 'test' + this.index,
          url: '/test' + this.index,
          icon: 'fa fa-weixin',
          iconType: 'class'
        }];
        this.index++;
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../dist */
    "../dist/fesm2015/ngx-vertical-sortable-menu.js"); // import { NgxVertialSortableMenuModule } from './ngx-vertial-sortable-menu/ngx-vertial-sortable-menu.module';


    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _dist__WEBPACK_IMPORTED_MODULE_4__["NgxVerticalSortableMenuModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/chiic/RLFE/ngx-vertial-sortable-menu/example/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map