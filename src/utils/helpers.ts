export function isEmpty(obj: { [key: string]: string } | {}): boolean {
  return Object.keys(obj).length === 0;
}
