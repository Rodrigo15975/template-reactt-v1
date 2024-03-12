import { DataInputs } from "@/components/Common/Form/types/typeForm";

export const dataInputs: DataInputs[] = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    textPlaceHolder: "Nombre",
  },
  {
    label: "DNI",
    name: "dni",
    type: "text",
    textPlaceHolder: "Dni",
  },
  {
    label: "Apellido Paterno",
    name: "apellidoPaterno",
    type: "password",
    textPlaceHolder: "Apellido Paterno",
  },
  {
    label: "Apellido Materno",
    name: "apellidoMaterno",
    type: "password",
    textPlaceHolder: "Password",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    textPlaceHolder: "Email@hotmail.com",
  },
  {
    label: "Teléfono",
    name: "telefono",
    type: "text",
    textPlaceHolder: "Telefono",
  },
];
