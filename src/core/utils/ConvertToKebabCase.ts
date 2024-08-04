export function ConvertToKebabCase(str: string = ''): string {
  if (ConvertToKebabCase.cache.has(str)) {
    return ConvertToKebabCase.cache.get(str)!;
  };

  const value = str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase();

  ConvertToKebabCase.cache.set(str, value);
  return value;
}
ConvertToKebabCase.cache = new Map<string, string>();