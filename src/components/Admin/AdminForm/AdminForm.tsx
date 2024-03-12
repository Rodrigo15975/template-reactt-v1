import { Form, Formik } from "formik";

import Input from "@/components/Common/Inputs/Input";
import { converterUppercase } from "@/utils/convertedMayuscula";
import AdminButtonForm from "./AdminButtonForm";
import AdminTitleForm from "./AdminTitleForm";
import { adminInitialValuesForm } from "./adminDataForm/adminInitialValuesForm";
import { admindInputsForm } from "./adminDataForm/adminInputsForm";
import { adminValidationForm } from "./adminDataForm/adminValidationsForm";

const AdminForm = () => {
  return (
    <section className="flex flex-col justify-center max-lg:p-[2rem] max-md:p-[1.5rem] p-[4rem] flex-[0_1_33.125rem]">
      <AdminTitleForm />
      <Formik
        initialValues={adminInitialValuesForm}
        validationSchema={adminValidationForm}
        onSubmit={(data) => {
          const dataMayuscula = converterUppercase(data);
          console.log(dataMayuscula);
        }}
      >
        {({ errors, getFieldProps, touched }) => (
          <Form className="min-h-[50vh] flex flex-col justify-center gap-4">
            {admindInputsForm.map((inputs) => (
              <Input
                labelClassName="text-secondary/40 pl-2 font-robotoSlab_500"
                type={inputs.type}
                className="rounded-full mt-1 font-robotoSlab_500 min-h-[3.2rem] border-primary/40 pl-6 text-[0.8rem] text-secondary/80"
                label={inputs.label}
                textPlaceHolder={inputs.placeHolder}
                key={inputs.name}
                name={inputs.name}
                errors={errors}
                fieldProps={getFieldProps}
                touched={touched}
              />
            ))}
            <AdminButtonForm />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AdminForm;
