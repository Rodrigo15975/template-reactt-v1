import { create } from "zustand";

const storeAdminProfile = create<StoreAdminProfile>((set, get) => ({
  openProfile: false,
  openOption: false,
  // Open profile
  setOpenProfile() {
    const { openProfile } = get();
    set({ openProfile: !openProfile });
  },
  // open options
  setOpenOption() {
    const { openOption } = get();
    set({ openOption: !openOption });
  },
}));

export default storeAdminProfile;
