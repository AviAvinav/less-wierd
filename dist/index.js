'use strict';

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.generateRandomHexColor = exports.scrollToBottom = exports.scrollToTop = exports.isDarkMode = exports.copyToClipboard = void 0;
const copyToClipboard_1 = __importDefault(require("./functions/copyToClipboard"));
exports.copyToClipboard = copyToClipboard_1.default;
const isDarkMode_1 = __importDefault(require("./functions/isDarkMode"));
exports.isDarkMode = isDarkMode_1.default;
const scrollToTop_1 = __importDefault(require("./functions/scrollToTop"));
exports.scrollToTop = scrollToTop_1.default;
const scrollToBottom_1 = __importDefault(require("./functions/scrollToBottom"));
exports.scrollToBottom = scrollToBottom_1.default;
const generateRandomHex_1 = __importDefault(require("./functions/generateRandomHex"));
exports.generateRandomHexColor = generateRandomHex_1.default;
const capitalize_1 = __importDefault(require("./functions/capitalize"));
exports.capitalize = capitalize_1.default;
