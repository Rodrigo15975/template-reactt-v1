import { MethodsAxios } from "./adapters-axios";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export class UseMethods extends MethodsAxios {}

export const useMethods = (urlBase: string) => {
  const methods = new UseMethods(urlBase);
  return methods;
};
