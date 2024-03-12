import { Button } from "@/components/Common";
import storeAdminProfile from "@/store/storeAdmin/storeAdminProfile";
import storeAdminUpdateInformation from "@/store/storeAdmin/storeAdminUpdateInformation";
import storeAdminUpdateProfile from "@/store/storeAdmin/storeAdminUpdateProfile";

const Options = () => {
  const { setOpenOption, setOpenProfile } = storeAdminProfile();
  const { setUpdateProfile } = storeAdminUpdateProfile();
  const { setOpenUpdateInformation } = storeAdminUpdateInformation();
  const openProfile = () => {
    setOpenOption();
    setOpenProfile();
  };

  const openUpdateProfile = () => {
    setOpenOption();
    setUpdateProfile();
  };

  const openProfileUpdateInformation = () => {
    setOpenOption();
    setOpenUpdateInformation();
  };

  return (
    <div className="flex-[0_1_20rem] text-secondary text-[1rem] font-robotoSlab_400 flex flex-col gap-4">
      <Button
        btnDefault
        className="hover:bg-white transition bg-white/50 w-full h-[3.5rem]"
        label="Detalles del perfil"
        onClick={openProfile}
        type="button"
      />
      <Button
        onClick={openUpdateProfile}
        btnDefault
        className="hover:bg-white transition bg-white/50 w-full h-[3.5rem]"
        label="Editar foto de perfil"
        type="button"
      />
      <Button
        btnDefault
        className="hover:bg-white transition bg-white/50 w-full h-[3.5rem]"
        label="Actualizar perfil"
        onClick={openProfileUpdateInformation}
        type="button"
      />
      <Button
        onClick={setOpenOption}
        btnDefault
        className="hover:bg-white transition bg-white/80 w-full mt-[7rem] h-[3.5rem]"
        label="Volver"
        type="button"
      />
    </div>
  );
};

export default Options;
