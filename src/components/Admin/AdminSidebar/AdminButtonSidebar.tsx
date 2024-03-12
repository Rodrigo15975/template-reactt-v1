import { Button } from "@/components/Common";
import { IoArrowBack } from "react-icons/io5";

const AdminButtonSidebar = () => {
  return (
    <div className="min-h-[8vh] px-[1rem]">
      <Button
        className="w-full flex justify-center hover:translate-y-1 bg-common text-white shadow-md gap-2 items-center h-[3rem] "
        label="Salir"
        type="button"
        btnDefault
      >
        <IoArrowBack className="text-2xl" />
      </Button>
    </div>
  );
};
// VER SI LA CARPETA SE LLEVARA TODO ADMINDASHBOARD, ADMINGESTIONES, ECT
export default AdminButtonSidebar;
