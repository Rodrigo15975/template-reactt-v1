import { routerProtected, routerPublics } from "@/router";
import { Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Aca pones el componente Autenticado , donde solo peuda el auth */}
      <Route>
        {routerProtected.map(({ Componente, path }) => (
          <Route key={path} path={path} element={<Componente />} />
        ))}
      </Route>

      {routerPublics.map(({ Componente, path }) => (
        <Route key={path} path={path} element={<Componente />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
