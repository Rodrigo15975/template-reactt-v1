import AdminForm from "./AdminForm";
import { AdminImgForm } from "./AdminImgForm";

const AppAdminForm = () => {
  return (
    <main className="m-auto max-2xl:px-4 flex items-center justify-center min-h-screen max-md:py-[1rem] container">
      <article className="flex-[0_1_83.75rem] shadow-lg max-md:flex-[0_1_30rem] max-md:min-h-[70vh] max-md:justify-center flex min-h-[90vh] justify-between rounded-3xl border border-primary/40">
        <AdminForm />
        <AdminImgForm />
      </article>
    </main>
  );
};

export default AppAdminForm;
