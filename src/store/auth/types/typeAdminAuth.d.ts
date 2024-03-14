type FunctionalityAuth = {
  setIsAuth: () => void;
};

interface StoreAuth extends FunctionalityAuth {
  isAuth: boolean;
}
