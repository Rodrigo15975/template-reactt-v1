import Data from "./Data";
import ProfileImage from "./ProfileImage";

const ProfileData = () => {
  return (
    <div className="w-full border min-h-[75vh]  rounded-2xl border-primary">
      <ProfileImage />
      <Data />
    </div>
  );
};

export default ProfileData;
