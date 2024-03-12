import {
  routerProtectedAdmin,
  routerPublicAdmin,
} from "@/router/admin/routersAdmin";
import ProtectedAdmin from "./ProtectedAdmin/ProtectedAdmin";

import { Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  // const { isAuth } = storeAdminAuth();
  // const navigate = useNavigate();

  // // PROBAR OCN LOADING , PARA HACER QUE APAREZCA UNA VENTANA DE CARGA
  // useEffect(() => {
  //   if (isAuth) {
  //     navigate("/dashboard");
  //   }
  //   // Aquí puedes agregar lógica adicional si es necesario
  // }, [isAuth, navigate]);
  return (
    <Routes>
      {/* Admin */}
      {/* Protected */}
      {/* Aca pones el componente Autenticado , donde solo si esta  auth-admin*/}
      <Route element={<ProtectedAdmin />}>
        {routerProtectedAdmin.map(({ Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
      {/* Public */}
      {routerPublicAdmin.map(({ Component, path }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
