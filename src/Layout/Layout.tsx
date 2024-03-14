// import { Sidebar } from "@/components/Sidebar";
import { FC, PropsWithChildren } from "react";

// Configuras a tu gusto
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {/* <Sidebar /> */}
      {children}
    </>
  );
};

export default Layout;
