"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var MikuLogger = /** @class */ (function () {
    function MikuLogger(logDir) {
        fs_extra_1.default.mkdirSync(logDir);
    }
    return MikuLogger;
}());
exports.default = MikuLogger;
