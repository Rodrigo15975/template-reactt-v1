type FunctionalityAdminAuth = {
  setIsAuth: () => void;
};

interface StoreAdminAuth extends FunctionalityAdminAuth {
  isAuth: boolean;
}
