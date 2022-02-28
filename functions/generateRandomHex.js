"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
exports.default = generateRandomHexColor;
