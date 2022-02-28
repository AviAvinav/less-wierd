"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scrollToTop = (element) => element.scrollIntoView({ behavior: "smooth", block: "start" });
exports.default = scrollToTop;
