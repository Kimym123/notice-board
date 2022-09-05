"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 5:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
var common_1 = __webpack_require__(6);
var app_controller_1 = __webpack_require__(7);
var app_service_1 = __webpack_require__(8);
var logger_middleware_1 = __webpack_require__(9);
var config_1 = __webpack_require__(10);
var typeorm_1 = __webpack_require__(11);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.prototype.configure = function (consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    };
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: 'password',
                    database: 'postgres',
                    synchronize: true,
                    logging: false,
                    entities: ['src/entity/**/*.ts'],
                    migrations: [],
                    subscribers: [],
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ 11:
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ab73b92e6f8de2f6ecf1")
/******/ })();
/******/ 
/******/ }
;