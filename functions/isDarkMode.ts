const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export default isDarkMode;
