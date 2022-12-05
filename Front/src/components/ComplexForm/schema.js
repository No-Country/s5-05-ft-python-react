import * as Yup from "yup";

const required = "Campo requerido";

export const validation = () =>
  Yup.object().shape({
    nombre: Yup.string().required("Elegir un nombre"),
    cant_cancha: Yup.number().required("Requerido").positive().integer(),
    calle: Yup.string().required("Indicar calle"),
    telefono: Yup.number("Solo número")
      .required("Escriba su número")
      .integer("Solo número")
      .positive()
      .typeError("Número sin guiones"),
    pais: Yup.string().required("Seleccione un país"),
    ciudad: Yup.string().required(required),
    /*   surface: Yup.array().min(1, "Seleccionar"),
    sky: Yup.array().min(1, "Seleccionar"),
    wall: Yup.array().min(1, "Seleccionar"), */
  });
