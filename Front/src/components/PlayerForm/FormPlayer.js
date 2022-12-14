import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { array } from "yup";

import { instance } from "../../axios/axiosConfig";
import { UserContext } from "../../context/userContext";
import { alertOk } from "../Alerts/alerts";
import { Modal_selectTime } from "./Modal_selectTime";
import styles from "./playerForm.module.css";
import { schemePlayer } from "./schema";
const {
  content,
  form,
  input_container,
  button,
  title,
  label,
  errorText,
  radio_container,
  check,
} = styles;

export const FormPlayer = () => {
  const [availability, setAvailability] = useState({
    election: [],
    cells: false,
  });

  const navigate = useNavigate();

  const { userCredentials, updateUser, token } = useContext(UserContext);

  const { id, username, password } = userCredentials;

  const changeAvailavility = (data) => {
    setAvailability(data);
  };
  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        sexo: "",
        nivel: "",
        rol: "",
        surface: "",
        sky: "",
        wall: "",
        telefono: "",
      }}
      validationSchema={schemePlayer}
      onSubmit={(values) => {
        if (availability.cells) {
          const {
            apellido,
            nivel,
            nombre,
            rol,
            sexo,
            sky,
            surface,
            wall,
            telefono,
          } = values;

          const days = Object.entries(availability.election);

          //hacer el post

          instance
            .put(
              `jugador/${id}/`,
              {
                telefono,
                nivel,
                apellido,
                rol,
                nombre,
                sexo,
                grilla: availability.cells,
                cancha_specs: [...sky, surface].concat(wall).flat(2),
                usuario: id,
                /* [days[0][0]]: days[0][1],
                [days[1][0]]: days[1][1],
                [days[2][0]]: days[2][1],
                [days[3][0]]: days[3][1],
                [days[4][0]]: days[4][1],
                [days[5][0]]: days[5][1],
                [days[6][0]]: days[6][1], */
              },
              {
                auth: {
                  username,
                  password,
                },
              }
            )
            .then(({ data }) => {
              instance
                .patch(
                  `/usuario/${id}/`,
                  {
                    perfil_completo: true,
                  },
                  {
                    auth: {
                      username,
                      password,
                      token,
                    },
                  }
                )
                .then((resp) => {
                  console.log(resp);
                  updateUser({ ...userCredentials, perfil_completo: true });
                  alertOk("Perfil completado");
                  setTimeout(() => {
                    navigate("/");
                  }, 1600);
                });
            })
            .catch((err) => console.error(err));
        }
      }}
    >
      {({ errors, touched, values }) => {
        return (
          <Form className={form}>
            <h2 className={title}>Formulario Jugador</h2>
            <div className={content}>
              <div className={input_container}>
                <label className={label} htmlFor="nombre">
                  Nombre
                </label>
                <Field
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Agust??n"
                />
              </div>
              <div className={errorText}>
                <p>{errors.nombre && touched.nombre ? errors.nombre : ""}</p>
              </div>
              <div className={input_container}>
                <label className={label} htmlFor="apellido">
                  Apellido
                </label>
                <Field
                  type="text"
                  name="apellido"
                  id="apellido"
                  placeholder="Tapia"
                />
              </div>
              <div className={errorText}>
                <p>
                  {errors.apellido && touched.apellido ? errors.apellido : ""}
                </p>
              </div>
              <div className={input_container}>
                <label className={label} htmlFor="telefono">
                  N??mero
                </label>
                <Field
                  type="text"
                  name="telefono"
                  id="telefono"
                  value={values.telefono.replace(/\D/g, "")}
                  placeholder="123456"
                />
              </div>
              <div className={errorText}>
                <p>
                  {errors.telefono && touched.telefono ? errors.telefono : ""}
                </p>
              </div>
              <div className={input_container}>
                <label className={label}>Sexo</label>
                <div
                  className={radio_container}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field type="radio" name="sexo" value="Masculino" />
                    Hombre
                  </label>
                  <label>
                    <Field type="radio" name="sexo" value="Femenino" />
                    Mujer
                  </label>
                </div>
              </div>
              <div className={errorText}>
                <p>{errors.sexo && touched.sexo ? errors.sexo : ""}</p>
              </div>
              <div className={input_container}>
                <label className={label}>Categor??a</label>
                <div
                  className={radio_container}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field type="radio" name="nivel" value="1" />1
                  </label>
                  <label>
                    <Field type="radio" name="nivel" value="2" />2
                  </label>
                  <label>
                    <Field type="radio" name="nivel" value="3" />3
                  </label>
                  <label>
                    <Field type="radio" name="nivel" value="4" />4
                  </label>
                  <label>
                    <Field type="radio" name="nivel" value="5" />5
                  </label>
                  <label>
                    <Field type="radio" name="nivel" value="6" />6
                  </label>
                  <label>
                    <Field type="radio" name="nivel" value="7" />7
                  </label>
                </div>
              </div>
              <div className={errorText}>
                <p>{errors.nivel && touched.nivel ? errors.nivel : ""}</p>
              </div>
              <div className={input_container}>
                <label className={label}>Rol</label>
                <div
                  className={radio_container}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field type="radio" name="rol" value="Drive" />
                    Drive
                  </label>
                  <label>
                    <Field type="radio" name="rol" value="Rev??s" />
                    Rev??s
                  </label>
                  <label>
                    <Field type="radio" name="rol" value="Ambos" />
                    Ambos
                  </label>
                </div>
                <div className={errorText}>
                  <p>{errors.rol && touched.rol ? errors.rol : ""}</p>
                </div>
              </div>
              <div role="group" className={check}>
                <h3>Cobertura</h3>
                <label>
                  <Field type="checkbox" name="sky" value="T" />
                  Techada
                </label>
                <label>
                  <Field type="checkbox" name="sky" value="AL" />
                  Aire Libre
                </label>
              </div>
              <div className={errorText}>
                <p>{errors.sky && touched.sky ? errors.sky : ""}</p>
              </div>
              <div role="group" className={check}>
                <h3>Superficie</h3>
                <label>
                  <Field type="checkbox" name="surface" value="SC" />
                  Cemento
                </label>
                <label>
                  <Field type="checkbox" name="surface" value="SS" />
                  Sint??tico
                </label>
              </div>
              <div className={errorText}>
                <p>{errors.surface && touched.surface ? errors.surface : ""}</p>
              </div>
              <div role="group" className={check}>
                <h3>Tipo de Pared</h3>
                <label>
                  <Field type="checkbox" name="wall" value="PC" />
                  Cemento
                </label>
                <label>
                  <Field type="checkbox" name="wall" value="PB" />
                  Blindex
                </label>
              </div>
              <div className={errorText}>
                <p>{errors.wall && touched.wall ? errors.wall : ""}</p>
              </div>
              <Modal_selectTime
                changeAvailavility={changeAvailavility}
                initialState={availability.cells}
              />
              <div className={errorText}>
                <p>
                  {availability.election.length < 1 &&
                    "Elegir d??as disponibles"}
                </p>
              </div>
              <button type="submit" className={button}>
                Completar
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
