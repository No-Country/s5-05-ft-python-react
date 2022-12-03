import * as Yup from "yup";

export function scheme() {
  return Yup.object().shape({
    email: Yup.string().email("Email no válido").required("Email requerido"),
    password: Yup.string()
      .required("No olvides la contraseña")
      .min(3, "Mínimo 3 caracteres")
      .max(20, "Máximo 20 caracteres"),
    password2: Yup.string()
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
      .required("Campo requerido"),
    type: Yup.string().required("Seleccionar una opción"),
  });
}
