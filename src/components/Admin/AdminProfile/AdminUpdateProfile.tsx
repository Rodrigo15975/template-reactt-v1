import { Modal } from "@/components/Common";
import storeAdminUpdateProfile from "@/store/storeAdmin/storeAdminUpdateProfile";
import { AnimatePresence } from "framer-motion";
import AdminFormUpdateProfile from "./FormUpdateProfile/AdminFormUpdateProfile";

const AdminUpdateProfile = () => {
  const { setUpdateProfile, openUpdateProfile } = storeAdminUpdateProfile();
  return (
    <>
      <AnimatePresence>
        {openUpdateProfile && (
          <Modal
            onClick={setUpdateProfile}
            className="flex border bg-white shadow-md rounded-xl flex-[0_1_40rem] min-h-[50vh]"
            type="CENTER"
          >
            <AdminFormUpdateProfile />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminUpdateProfile;
