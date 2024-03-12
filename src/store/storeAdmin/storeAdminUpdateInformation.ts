import { create } from "zustand";

const storeAdminUpdateInformation = create<StoreAdminUpdateInformation>(
  (set, get) => ({
    openUpdateInformation: false,
    setOpenUpdateInformation() {
      const { openUpdateInformation } = get();
      set({ openUpdateInformation: !openUpdateInformation });
    },
  })
);

export default storeAdminUpdateInformation;
