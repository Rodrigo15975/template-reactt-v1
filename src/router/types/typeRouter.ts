import { ComponentType } from "react";
import { PathsProtected, PathsPublic } from "../enum/routerPaths";

export interface IRoutePublic {
  path: PathsPublic;
  Componente: ComponentType;
}

export interface IRouterProtected {
  path: PathsProtected;
  Componente: ComponentType;
}
