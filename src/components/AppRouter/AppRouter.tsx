import { routerPublics } from "@/router";
import { Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        {routerPublics.map(({ Componente, path }) => (
          <Route key={path} path={path} element={<Componente />} />
        ))}
      </Routes>

    </>
  );
};

export default AppRouter;
