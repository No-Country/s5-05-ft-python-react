import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { instance } from "../../axios/axiosConfig";
import styles from "./login.module.css";
import { scheme } from "./scheme";

const {
  container,
  form_container,
  form,
  title,
  error,
  input_container,
  ball,
  button,
  link_container,
} = styles;

export const Login = () => {
  return (
    <section className={container}>
      <div className={form_container}>
        <img
          className={ball}
          src={require("../../assets/tennis_ball.svg").default}
          alt=""
          style={{ color: "red" }}
        />

        <Formik
          initialValues={{ password: "", email: "" }}
          onSubmit={(values) => {
            const { email, password } = values;

            /* instance
              .post("", {
                email,
                password,
              })
              .then((resp) => console.log(resp))
              .catch((err) => console.error(err)); */
          }}
          validationSchema={scheme}
        >
          {({ errors }) => (
            <Form className={form}>
              <h2 className={title}>Login</h2>
              <div className={input_container}>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ejemplo@gmail.com"
                />
              </div>
              <div className={error}>
                <p> {errors.email && errors.email}</p>
              </div>
              <div className={input_container}>
                <label htmlFor="password">Contraseña</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                />
              </div>
              <div className={error}>
                <p> {errors.password && errors.password}</p>
              </div>

              <button type="submit" className={button}>
                Ingresar
              </button>

              <div className={link_container}>
                <p>¿No tienes una cuenta?</p>
                <Link to={"/register"}>Crear</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
