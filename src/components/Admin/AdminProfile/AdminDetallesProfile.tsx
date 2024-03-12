import { AppProfile } from "@/components/Common";
import storeAdminProfile from "@/store/storeAdmin/storeAdminProfile";
import { Drawer } from "antd";

const AdminDetallesProfile = () => {
  const { openProfile, setOpenProfile } = storeAdminProfile();
  return (
    <>
      <Drawer
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        closable={true}
        placement={"right"}
        key={"Profile"}
        onClose={setOpenProfile}
        title="Profile"
        open={openProfile}
      >
        <AppProfile />
      </Drawer>
    </>
  );
};

export default AdminDetallesProfile;
