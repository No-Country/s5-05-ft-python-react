import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../../axios/axiosConfig";
import { alertOk, errorAlert } from "../../components/Alerts/alerts";

import styles from "./preRegister.module.css";
import { scheme } from "./schemaPreRegister";
const {
  container,
  inputs_container,
  form,
  input_content,
  label,
  button,
  error,
  redirection,
  title,
} = styles;

export const Register = () => {
  const navigate = useNavigate();
  return (
    <section className={container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          password2: "",
          type: "",
        }}
        onSubmit={(values) => {
          const { email, password, type } = values;
          let is_jugador = false;
          let is_complejo = false;

          if (type === "player") is_jugador = true;
          else is_complejo = true;

          instance
            .post("usuario/", {
              email,
              password,
              is_complejo,
              is_jugador,
              perfil_completo: false,
            })
            // GUARDAR ID en context
            .then(({ status }) => {
              alertOk("Usuario Creado");
              if (status === 201) {
                setTimeout(() => {
                  navigate("/login");
                }, 1600);
                if (status === 403) {
                  errorAlert("Parece haber un usuario con ese correo");
                }
              }
            })
            .catch((err) => {
              errorAlert();
              console.log(err);
            });
        }}
        validationSchema={scheme}
      >
        {({ errors, touched }) => (
          <Form className={form}>
            <h2 className={title}>Registrarse</h2>
            <div className={inputs_container}>
              <div className={input_content}>
                <label className={label} htmlFor="email">
                  Correo
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ejemplo@gmail.com"
                />
              </div>
              <div className={error}>
                <p> {errors.email && touched.email ? errors.email : ""}</p>
              </div>
              <div
                className={input_content}
                role="group"
                aria-labelledby="my-radio-group"
              >
                <label className={label}>Registrarse como:</label>
                <label>
                  <Field
                    style={{ margin: "8px" }}
                    type="radio"
                    name="type"
                    value="player"
                  />
                  Jugador
                </label>
                <label>
                  <Field
                    style={{ margin: "8px" }}
                    type="radio"
                    name="type"
                    value="complex"
                  />
                  Complejo
                </label>
              </div>
              <div className={error}>
                <p> {errors.type && touched.type ? errors.type : ""}</p>
              </div>
              <div className={input_content}>
                <label className={label} htmlFor="password">
                  Contrase??a
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Escribir contrase??a"
                />
              </div>
              <div className={error}>
                <p>
                  {errors.password && touched.password ? errors.password : ""}
                </p>
              </div>
              <div className={input_content}>
                <label className={label} htmlFor="password2">
                  Repetir
                </label>
                <Field
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Repetir contrase??a"
                />
              </div>
              <div className={error}>
                <p>
                  {errors.password2 && touched.password2
                    ? errors.password2
                    : ""}
                </p>
              </div>

              <button className={button} type="submit">
                Completar
              </button>
              <div className={redirection}>
                <p>??Est??s registrado? </p>
                <Link to={"/login"}>Iniciar</Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
