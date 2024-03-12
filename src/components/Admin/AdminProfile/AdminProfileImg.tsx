import storeAdminProfile from "@/store/storeAdmin/storeAdminProfile";

import { Avatar } from "antd";
import { AiOutlineUser } from "react-icons/ai";

const AdminProfileImg = () => {
  const { setOpenOption } = storeAdminProfile();
  return (
    <>
      <div className="border rounded-full relative border-primary">
        <Avatar
          onClick={setOpenOption}
          className="rounded-full cursor-pointer h-8 w-8"
          style={{
            background: "white",
          }}
          icon={<AiOutlineUser className="text-primary" />}
          alt="default"
        />
      </div>
    </>
  );
};

export default AdminProfileImg;
