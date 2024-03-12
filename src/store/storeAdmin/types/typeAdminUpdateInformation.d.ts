type FunctionalityAdminUpdateInformation = {
  setOpenUpdateInformation: () => void;
};
interface StoreAdminUpdateInformation
  extends FunctionalityAdminUpdateInformation {
  openUpdateInformation: boolean;
}
