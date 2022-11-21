import * as Yup from "yup";

const required = "Campo requerido";

export const validation = () =>
  Yup.object().shape({
    club_name: Yup.string()
      .required("Indicar un nombre")
      .min(3, "Mínimo 2 letras"),
    total_field: Yup.number()
      .required("Escriba su número")
      .positive()
      .integer(),
    email: Yup.string().email("Correo inválido").required(),
    password: Yup.string().required(required),
    street: Yup.string().required("Indicar calle"),
    phone: Yup.number("Solo número")
      .required("Escriba su número")
      .integer("Solo número")
      .positive()
      .typeError("Número sin guiones"),
    country: Yup.string().required("Seleccione un país"),
    city: Yup.string().required(required),
    street: Yup.string().required(required),
    surface: Yup.array().min(1, "Seleccionar"),
    sky: Yup.array().min(1, "Seleccionar"),
    wall: Yup.array().min(1, "Seleccionar"),
  });
