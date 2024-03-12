import { Modal } from "@/components/Common";
import storeAdminProfile from "@/store/storeAdmin/storeAdminProfile";
import { AnimatePresence } from "framer-motion";
import Options from "./Options";

const AdminOption = () => {
  const { openOption, setOpenOption } = storeAdminProfile();
  return (
    <>
      <AnimatePresence>
        {openOption && (
          <Modal
            className="flex flex-[0_1_20rem] min-h-[40vh] bg-common p-[2rem] shadow-md rounded-xl mx-4 mb-4"
            type="BOTTOM-RIGHT"
            onClick={setOpenOption}
          >
            <Options />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminOption;
