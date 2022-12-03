import React, { useState } from "react";
import { Field, Form, Formik } from "formik";

import styles from "./playerForm.module.css";
import { schemePlayer } from "./schema";
import { Modal_selectTime } from "./Modal_selectTime";
const {
  content,
  form,
  input_container,
  button,
  title,
  label,
  errorText,
  radio_container,
} = styles;

export const FormPlayer = () => {
  const [availability, setAvailability] = useState({
    election: false,
    cells: false,
  });

  const changeAvailavility = (data) => {
    console.log(data);
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
      }}
      validationSchema={schemePlayer}
      onSubmit={(values) => {
        if (availability.election) {
          //hacer el post
          console.log({ values, election: availability.election });
        }
      }}
    >
      {({ errors, touched }) => {
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
              <Modal_selectTime
                changeAvailavility={changeAvailavility}
                initialState={availability.cells}
              />
              <div className={errorText}>
                <p>{!availability.election && "Elegir días disponibles"}</p>
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
