'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
const copyToClipboard = (text) => {
    var _a;
    (_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(text);
};
exports.default = copyToClipboard;
