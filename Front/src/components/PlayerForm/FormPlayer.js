import React, { useState } from "react";
import { Field, Form, Formik } from "formik";

import styles from "./playerForm.module.css";
import { schemePlayer } from "./schema";
import { Modal_selectTime } from "./Modal_selectTime";
import { instance } from "../../axios/axiosConfig";
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
          console.log(availability.cells);

          /* instance
            .put("", {
              numero:telefono,
              nivel,
              apellido,
              rol,
              nombre,
              sexo,
              grilla: availability.cells,
              cancha_specs: [...sky, surface].concat(wall),
              [days[0][0]]: days[0][1],
              [days[1][0]]: days[1][1],
              [days[2][0]]: days[2][1],
              [days[3][0]]: days[3][1],
              [days[4][0]]: days[4][1],
              [days[5][0]]: days[5][1],
              [days[6][0]]: days[6][1],
            })
            .then((resp) => console.log(resp))
            .catch((err) => console.error(err)); */
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
                  placeholder="Agustín"
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
                  Número
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
                <p>{errors.numero && touched.numero ? errors.numero : ""}</p>
              </div>
              <div className={input_container}>
                <label className={label}>Sexo</label>
                <div
                  className={radio_container}
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field type="radio" name="sexo" value="masculino" />
                    Hombre
                  </label>
                  <label>
                    <Field type="radio" name="sexo" value="femenino" />
                    Mujer
                  </label>
                </div>
              </div>
              <div className={errorText}>
                <p>{errors.sexo && touched.sexo ? errors.sexo : ""}</p>
              </div>
              <div className={input_container}>
                <label className={label}>Categoría</label>
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
                    <Field type="radio" name="rol" value="drive" />
                    Drive
                  </label>
                  <label>
                    <Field type="radio" name="rol" value="reves" />
                    Revés
                  </label>
                  <label>
                    <Field type="radio" name="rol" value="ambos" />
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
                  <Field type="checkbox" name="surface" value="SP" />
                  Cemento
                </label>
                <label>
                  <Field type="checkbox" name="surface" value="SS" />
                  Sintético
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
                    "Elegir días disponibles"}
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