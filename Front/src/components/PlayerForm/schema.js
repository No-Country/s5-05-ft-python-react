import * as Yup from "yup";

export function schemePlayer() {
  return Yup.object().shape({
    nombre: Yup.string().required("Nombre requerido"),
    apellido: Yup.string().required("Apellido requerido"),
    sexo: Yup.string().required("Elegir sexo"),
    nivel: Yup.string().required("Seleccionar nivel"),
    rol: Yup.string().required("Seleccionar rol"),
    surface: Yup.array()
      .min(1, "Seleccionar")
      .required("Seleccionar una opción"),
    sky: Yup.array().min(1, "Seleccionar").required("Seleccionar una opción"),
    wall: Yup.array().min(1, "Seleccionar").required("Seleccionar una opción"),
    telefono: Yup.number("Solo número")
      .required("Escriba su número")
      .integer("Solo número")
      .positive()
      .typeError("Número sin guiones"),
  });
}
