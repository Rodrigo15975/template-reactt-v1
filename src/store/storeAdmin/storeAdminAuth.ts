import { create } from "zustand";

const storeAdminAuth = create<StoreAdminAuth>(() => ({
  setIsAuth() {},
  isLoadingAuth: false,
  isAuth: true,
}));

export default storeAdminAuth;
