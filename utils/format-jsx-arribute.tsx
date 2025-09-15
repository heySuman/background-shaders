export function formatJsxAttribute(key: string, value: unknown): string {
  if (typeof value === "string") return `${key}="${value}"`;
  if (typeof value === "number" || typeof value === "boolean") return `${key}={${value}}`;
  if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
    return `${key}={${JSON.stringify(value)}}`;
  }
  return `${key}={${String(value)}}`;
}