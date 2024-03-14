import { isValid, parse, format } from "date-fns";

export function transformDateTime(value: string): string | null {
  const date = parse(value, "dd/MM/yyyy", new Date());
  return isValid(date) ? format(date, "dd/MM/yyyy HH:mm:ss") : null;
}
