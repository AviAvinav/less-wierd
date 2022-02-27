const scrollToBottom = (element: HTMLElement) =>
  element.scrollIntoView({ behavior: "smooth", block: "end" });

export default scrollToBottom;
