import Home from "@/pages/home/Home";
import { IRoutePublic } from "./types/typeRouter";
import { PathsPublic } from "./enum/routerPaths";

export const routerPublics: IRoutePublic[] = [
  {
    path: PathsPublic.INICIO,
    Componente: Home,
  },
];
