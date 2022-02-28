export default [
  {
    input: "main.js",
    output: {
      file: "dist/index.js",
      format: "cjs",
    },
  },
  {
    input: "functions/capitalize.js",
    output: {
      file: "dist/capitalize.js",
      format: "cjs",
    },
  },
  {
    input: "functions/generateRandomHex.js",
    output: {
      file: "dist/generateRandomHex.js",
      format: "cjs",
    },
  },
  {
    input: "functions/copyToClipboard.js",
    output: {
      file: "dist/copyToClipboard.js",
      format: "cjs",
    },
  },
  {
    input: "functions/isDarkMode.js",
    output: {
      file: "dist/isDarkMode.js",
      format: "cjs",
    },
  },
  {
    input: "functions/scrollToTop.js",
    output: {
      file: "dist/scrollToTop.js",
      format: "cjs",
    },
  },
  {
    input: "functions/scrollToBottom.js",
    output: {
      file: "dist/scrollToBottom.js",
      format: "cjs",
    },
  },
];
