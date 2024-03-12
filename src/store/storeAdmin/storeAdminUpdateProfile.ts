import { create } from "zustand";

const storeAdminUpdateProfile = create<StoreAdminUpdateProfile>((set, get) => ({
  openUpdateProfile: false,
  setUpdateProfile() {
    const { openUpdateProfile } = get();
    set({ openUpdateProfile: !openUpdateProfile });
  },
}));

export default storeAdminUpdateProfile;
