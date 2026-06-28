export function getScrollRoot(): Element | Window {
  const container = document.querySelector(".portfolio-page");
  if (
    container instanceof HTMLElement &&
    container.scrollHeight > container.clientHeight + 1
  ) {
    return container;
  }
  return window;
}

export function getScrollY(): number {
  const root = getScrollRoot();
  if (root === window) {
    return window.scrollY;
  }
  return root.scrollTop;
}

export function scrollToY(y: number, behavior: ScrollBehavior = "smooth") {
  const root = getScrollRoot();
  if (root === window) {
    window.scrollTo({ top: y, behavior });
  } else {
    root.scrollTo({ top: y, behavior });
  }
}

export function scrollToElement(id: string, offset = 80) {
  const element = document.getElementById(id);
  if (!element) return;

  const root = getScrollRoot();
  if (root === window) {
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    const y = element.getBoundingClientRect().top + root.scrollTop - offset;
    root.scrollTo({ top: y, behavior: "smooth" });
  }

  window.history.pushState(null, "", `#${id}`);
}

export function scrollToTop() {
  scrollToY(0);
  window.history.pushState(null, "", "#about");
}
