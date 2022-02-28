'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
const scrollToBottom = (element) => element.scrollIntoView({ behavior: "smooth", block: "end" });
exports.default = scrollToBottom;
