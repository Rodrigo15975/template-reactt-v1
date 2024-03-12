import { ComponentType } from "react";
import { PathsAdminProtected, PathsAdminPublic } from "../pathAdmin";

export interface IRouterAdminProtected {
  path: PathsAdminProtected;
  Component: ComponentType;
}

export interface IRouterAdminPublic
  extends Omit<IRouterAdminProtected, "path"> {
  path: PathsAdminPublic;
}
