import { props, Dragger } from "./adminHookFormUpdateProfile";
import { BsCloudUpload } from "react-icons/bs";

const AdminFormUpdateProfile = () => {
  return (
    <>
      <Dragger
        {...props}
        style={{
          width: "100%",
          background: "white",
        }}
      >
        <p className="flex items-center justify-center mb-2 text-2xl">
          <BsCloudUpload />
        </p>
        <p className="font-robotoSlab">Haga un click o arrastre la imagen</p>
        <p className="font-robotoSlab font-robotoSlab_400 mt-4 text-secondary/80">
          Soporte para una carga única. Estrictamente prohibido cargar datos de
          la empresa u otros archivos prohibidos.
        </p>
      </Dragger>
    </>
  );
};

export default AdminFormUpdateProfile;
