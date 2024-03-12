import Title from "@/components/Common/Title/Title";
import Typography from "@/components/Common/Typography/Typography";

const AdminTitleForm = () => {
  return (
    <div className="flex-[0_1_9rem] text-center flex justify-end gap-4 flex-col">
      <Title type="h1" className="text-4xl text-primary/70 font-robotoSlab_500" label="Artes Pizarro" />
      <Typography className="text-secondary/80 text-xl font-robotoSlab_200" label="Sign In Admin" />
    </div>
  );
};

export default AdminTitleForm;
