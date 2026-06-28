const stores = new Map<string, Map<string, number[]>>();

export type RateLimitConfig = {
  max: number;
  windowMs: number;
};

export function isRateLimited(
  namespace: string,
  ip: string,
  { max, windowMs }: RateLimitConfig
): boolean {
  if (!stores.has(namespace)) {
    stores.set(namespace, new Map());
  }

  const store = stores.get(namespace)!;
  const now = Date.now();
  const timestamps = store.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < windowMs);
  store.set(ip, recent);

  if (recent.length >= max) return true;
  recent.push(now);
  return false;
}

export function getClientIp(
  forwardedFor: string | string[] | undefined
): string {
  if (Array.isArray(forwardedFor)) {
    return forwardedFor[0] ?? "unknown";
  }
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown";
}
