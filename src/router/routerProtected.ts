import Dashboard from "@/pages/dashboard/Dashboard";
import { IRouterProtected } from "./types/typeRouter";
import { PathsProtected } from "./enum/routerPaths";

// Ingresa tus rutas
export const routerProtected: IRouterProtected[] = [
  {
    Componente: Dashboard,
    path: PathsProtected.DASHBOARD,
  },
];
