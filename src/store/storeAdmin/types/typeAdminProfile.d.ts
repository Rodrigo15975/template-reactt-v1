type FunctionalityAdminProfile = {
  setOpenProfile: () => void;
  setOpenOption: () => void;
};

interface StoreAdminProfile extends FunctionalityAdminProfile {
  openProfile: boolean;
  openOption: boolean;
}
