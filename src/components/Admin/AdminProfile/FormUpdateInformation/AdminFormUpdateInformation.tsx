import { Modal } from "@/components/Common";
import storeAdminUpdateInformation from "@/store/storeAdmin/storeAdminUpdateInformation";
import { AnimatePresence } from "framer-motion";
import FormUpdateInformation from "./FormUpdateinformation";

const AdminFormUpdateInformation = () => {
  const { openUpdateInformation, setOpenUpdateInformation } =
    storeAdminUpdateInformation();
  return (
    <>
      <AnimatePresence>
        {openUpdateInformation && (
          <Modal
            onClick={setOpenUpdateInformation}
            type="CENTER"
            className="border flex items-center justify-center flex-[0_1_40rem] py-[1rem] min-h-[90vh] bg-three  border-primary/20 rounded-xl shadow-md shadow-purple-100"
          >
            <FormUpdateInformation />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminFormUpdateInformation;
