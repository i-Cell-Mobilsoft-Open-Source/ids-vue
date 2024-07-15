export function addClassPrefix(componentClass: string, className: string): string {
  return `${componentClass}-${className}`;
}