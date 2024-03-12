import Layout from "@/Layout/Layout";
import { PathsAdminPublic } from "@/router";
import storeAdminAuth from "@/store/storeAdmin/storeAdminAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedAdmin = () => {
  const { isAuth } = storeAdminAuth();
  const location = useLocation();

  if (isAuth)
    return (
      <Layout>
        <Outlet />
      </Layout>
    );

  return (
    <Navigate
      to={PathsAdminPublic.LOGINADMIN}
      replace
      // Obtiene el valor de la ubicacion de donde proviene antes de redireccionarlo
      state={{ from: location }}
    />
  );
};

export default ProtectedAdmin;
