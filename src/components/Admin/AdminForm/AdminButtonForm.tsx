import { BiLogIn } from "react-icons/bi";

import { Button, Typography } from "@/components/Common";
const AdminButtonForm = () => {
  return (
    <>
      <Typography
        className="text-primary/50 pl-2 cursor-pointer underline underline-offset-2"
        label="Restablecer contraseña"
      />
      <Button
        type="submit"
        label="Iniciar sesión"
        className="bg-primary shadow-md hover:shadow-none transition shadow-[#653FFF] gap-2 flex items-center justify-center w-full mt-[3rem] min-h-[3.2rem] rounded-full text-default"
      >
        <BiLogIn className="text-2xl" />
      </Button>
    </>
  );
};

export default AdminButtonForm;
