import FormCommon from "@/components/Common/Form/FormCommon";
import { dataInitialValues } from "./dataInputs/dataInitialValues";
import { dataInputs } from "./dataInputs/dataInputs";
import { validationSchema } from "./validations/validationsDataInitialValues";

const FormUpdateInformation = () => {
  return (
    <>
      <FormCommon
        classNameTitle="text-2xl font-robotoSlab_400 text-center my-[1.5rem] text-secondary"
        classNameForm="border min-h-[80vh] rounded-2xl bg-white w-full flex justify-center items-center flex-col "
        initialValues={dataInitialValues}
        validationSchema={validationSchema}
        // Agregar la fuincion que agarra todo los datos del formulario
        onSubmit={(data, helper) => {
          console.log(data, helper);
        }}
        classNameInput="h-[2.8rem] transition focus:border-primary font-robotoSlab_400 text-secondary rounded-md text-[.9rem] pl-2 "
        classNameContainerInputs="flex w-full my-2 min-h-[50vh] flex-col justify-center items-center"
        labelClassName="text-primary font-robotoSlab_400 text-[.9rem]"
        classNameButton="bg-primary text-white text-[1rem]  font-robotoSlab_500 h-[3.2rem] rounded-md flex-[0_1_330px]"
        classNameContainerButton="min-h-[10vh] py-[1rem] flex items-center justify-center w-full"
        labelButton="Guardar cambios"
        classNameFormik="flex flex-col gap-4 justify-between rounded-2xl"
        classNameParent="flex flex-col rounded-2xl flex-[0_1_28.125rem]"
        dataInputs={dataInputs}
        title="Actualizando información"
      />
    </>
  );
};

export default FormUpdateInformation;
