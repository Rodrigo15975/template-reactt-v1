import { create } from "zustand";

const storeAuth = create<StoreAuth>(() => ({
  setIsAuth() {},
  isLoadingAuth: false,
  isAuth: true,
}));

export default storeAuth;
