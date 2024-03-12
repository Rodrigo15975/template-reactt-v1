import {
  PageAdminDashboard,
  PageAdminLogin,
  PageAdminAdministrator,
  PageAdminCategories,
  PageAdminHistoryOrder,
  PageAdminListOrder,
  PageAdminProducts,
  PageAdminReports,
} from "@/pages";
import {
  IRouterAdminProtected,
  IRouterAdminPublic,
} from "./types/typeRouterAdmin";
import { PathsAdminProtected, PathsAdminPublic } from "./pathAdmin";

// FALTA COMPONENTES DEL OTRO LADO
// Ingresa tus rutas
export const routerProtectedAdmin: IRouterAdminProtected[] = [
  {
    Component: PageAdminDashboard,
    path: PathsAdminProtected.DASHBOARD,
  },
  {
    Component: PageAdminProducts,
    path: PathsAdminProtected.PRODUCTS,
  },
  {
    Component: PageAdminCategories,
    path: PathsAdminProtected.CATEGORIES,
  },
  {
    Component: PageAdminAdministrator,
    path: PathsAdminProtected.ADMINISTRATOR,
  },
  {
    Component: PageAdminListOrder,
    path: PathsAdminProtected.LIST_ORDER,
  },
  {
    Component: PageAdminReports,
    path: PathsAdminProtected.REPORTS,
  },
  {
    Component: PageAdminHistoryOrder,
    path: PathsAdminProtected.HISTORY_ORDER,
  },
];

export const routerPublicAdmin: IRouterAdminPublic[] = [
  {
    Component: PageAdminLogin,
    path: PathsAdminPublic.LOGINADMIN,
  },
];
