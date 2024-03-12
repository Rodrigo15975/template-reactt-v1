import { BiArrowBack } from "react-icons/bi";
import { Button } from "..";
import storeAdminProfile from "@/store/storeAdmin/storeAdminProfile";
const ProfileButton = () => {
  const { setOpenProfile } = storeAdminProfile();
  return (
    <>
      <Button
        className="w-full border gap-1 font-robotoSlab_500 hover:bg-gray-800/5 flex items-center justify-center border-primary bg-white rounded-xl h-[3rem] mt-[1.5rem]"
        label="Volver"
        type="button"
        onClick={setOpenProfile}
      >
        <BiArrowBack className="text-xl" />
      </Button>
    </>
  );
};

export default ProfileButton;
