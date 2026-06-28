export type AppLanguage = "en" | "hu";

export const STORAGE_KEY = "portfolio-lang";
export const SUPPORTED_LANGUAGES: AppLanguage[] = ["en", "hu"];

export function isAppLanguage(value: string): value is AppLanguage {
  return value === "en" || value === "hu";
}

export function parseLangFromPath(pathname = window.location.pathname): AppLanguage | null {
  const segment = pathname.replace(/^\/+|\/+$/g, "").split("/")[0];
  return isAppLanguage(segment) ? segment : null;
}

export function getStoredLanguage(): AppLanguage | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored || !isAppLanguage(stored)) return null;
  return stored;
}

export function hasLanguagePreference(): boolean {
  return parseLangFromPath() !== null || getStoredLanguage() !== null;
}

export function getCurrentLanguage(): AppLanguage {
  return parseLangFromPath() ?? getStoredLanguage() ?? "en";
}

export function buildLangUrl(lang: AppLanguage, hash = window.location.hash): string {
  return `/${lang}${hash}`;
}

export function syncUrlLanguage(lang: AppLanguage, replace = true): void {
  const url = buildLangUrl(lang);
  if (`${window.location.pathname}${window.location.hash}` === url) return;

  if (replace) {
    window.history.replaceState(null, "", url);
  } else {
    window.history.pushState(null, "", url);
  }
}

export function applyLanguage(lang: AppLanguage): void {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  syncUrlLanguage(lang, true);
}

export function resolveInitialLanguage(): AppLanguage | null {
  const fromPath = parseLangFromPath();
  if (fromPath) return fromPath;
  return getStoredLanguage();
}
