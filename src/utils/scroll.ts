import { buildLangUrl, getCurrentLanguage } from "../i18n/language";

const SCROLL_SELECTOR = ".portfolio-scroll";

export function getScrollRoot(): HTMLElement {
  const container = document.querySelector(SCROLL_SELECTOR);
  if (container instanceof HTMLElement) {
    return container;
  }
  const fallback = document.querySelector(".portfolio-page");
  if (fallback instanceof HTMLElement) {
    return fallback;
  }
  return document.documentElement;
}

export function getScrollY(): number {
  return getScrollRoot().scrollTop;
}

export function scrollToY(y: number, behavior: ScrollBehavior = "smooth") {
  getScrollRoot().scrollTo({ top: y, behavior });
}

export function scrollToElement(id: string, offset = 80) {
  const element = document.getElementById(id);
  if (!element) return;

  const container = getScrollRoot();
  const y = element.getBoundingClientRect().top + container.scrollTop - offset;
  container.scrollTo({ top: y, behavior: "smooth" });

  const lang = getCurrentLanguage();
  window.history.pushState(null, "", buildLangUrl(lang, `#${id}`));
}

export function scrollToTop() {
  scrollToY(0);
  const lang = getCurrentLanguage();
  window.history.pushState(null, "", buildLangUrl(lang, "#about"));
}
