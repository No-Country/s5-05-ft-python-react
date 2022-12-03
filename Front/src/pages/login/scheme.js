import * as Yup from "yup";

export function scheme(params) {
  return Yup.object().shape({
    email: Yup.string().email("Email no válido").required("Email requerido"),
    password: Yup.string().required("No olvides la contraseña"),
  });
}
