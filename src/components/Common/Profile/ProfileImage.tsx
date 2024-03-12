import { Avatar } from "antd";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
const ProfileImage = () => {
  // Cambiar esto por la foto del admin o del cliente
  const [image, setImage] = useState("");
  return (
    <>
      <div className="bg-primary py-[0.5rem] rounded-tr-xl rounded-tl-xl flex items-center justify-center min-h-[20.5vh]">
        {image ? (
          <Avatar src={image} icon={<AiOutlineUser />} alt="Profile" />
        ) : (
          <Avatar
            className="bg-white rounded-full p-4 min-h-[6rem] w-[6rem] text-black/30"
            icon={<AiOutlineUser className="w-full h-full" />}
            alt="default"
          />
        )}
      </div>
    </>
  );
};

export default ProfileImage;
