const scrollToTop = (element: HTMLElement) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });

export default scrollToTop;
