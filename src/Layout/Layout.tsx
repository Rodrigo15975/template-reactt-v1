import AppAdminSidebar from "@/components/Admin/AdminSidebar/AppAdminSidebar";
import { FC, PropsWithChildren } from "react";

// Configuras a tu gusto
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex">
      <AppAdminSidebar />
      {children}
    </main>
  );
};

export default Layout;
