"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isDarkMode = () => window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
exports.default = isDarkMode;
