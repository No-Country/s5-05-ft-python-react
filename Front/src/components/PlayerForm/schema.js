import * as Yup from "yup";

export function schemePlayer() {
  return Yup.object().shape({
    nombre: Yup.string().required("Nombre requerido"),
    apellido: Yup.string().required("Apellido requerido"),
    sexo: Yup.string().required("Elegir sexo"),
    nivel: Yup.string().required("Seleccionar nivel"),
    rol: Yup.string().required("Seleccionar rol"),
  });
}
