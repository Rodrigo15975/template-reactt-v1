import AdminDetallesProfile from "./AdminDetallesProfile";
import AdminProfileImg from "./AdminProfileImg";
import AdminUpdateProfile from "./AdminUpdateProfile";
import AdminFormUpdateInformation from "./FormUpdateInformation/AdminFormUpdateInformation";
import AdminOption from "./Options/AdminOption";

const AdminProfile = () => {
  return (
    <div className="flex gap-4">
      <p className="text-[1rem] text-secondary/50 font-robotoSlab_500">
        {/* Aca tiene que ir el role que usaran, por este caso solo sera el admin */}
        Administrador
      </p>
      {/* Perfil admin */}
      <AdminProfileImg />
      {/* Detalles del perfil */}
      <AdminDetallesProfile />
      {/* Opctions */}
      <AdminOption />
      {/* Actualizar photo */}
      {<AdminUpdateProfile />}
      {/* Actuializar informacion del administrador */}
      {<AdminFormUpdateInformation />}
    </div>
  );
};

export default AdminProfile;
