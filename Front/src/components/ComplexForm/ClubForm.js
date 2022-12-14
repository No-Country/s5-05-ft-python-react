import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { instance } from "../../axios/axiosConfig";
import { countries } from "../../helper/contants";
import style from "./clubForm.module.css";
import { validation } from "./schema";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { alertOk } from "../Alerts/alerts";

const {
  container,
  form,
  form_container,
  background_form,
  background_content,
  btn_submit,
  select_container,
  select,
  redirect,
  field_background,
  error,
} = style;
export const ClubForm = () => {
  const { userCredentials, updateUser, token } = useContext(UserContext);

  const navigate = useNavigate();

  const { id, username, password } = userCredentials;
  return (
    <div className={container}>
      <h2>Completar</h2>
      <Formik
        initialValues={{
          calle: "",
          numero: "",
          cant_cancha: "",
          /*  surface: [],
          sky: [],
          wall: [], */
          altura: "",
          pais: "",
          nombre: "",
          ciudad: "",
        }}
        validationSchema={validation}
        onSubmit={(value) => {
          const { calle, cant_cancha, ciudad, nombre, numero, pais, altura } =
            value;
          //hacer el post

          instance
            .put(
              `complejo/${id}/`,
              {
                calle,
                altura: Number(altura),
                telefono: numero,
                cant_cancha,
                pais,
                nombre,
                ciudad,
                usuario: id,
              },
              {
                auth: {
                  username,
                  password,
                },
              }
            )
            .then((resp) => {
              updateUser({ ...userCredentials, perfil_completo: true });

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
                  alertOk("Perfil completado");
                  setTimeout(() => {
                    navigate("/");
                  }, 1600);
                });
            })
            .catch((err) => console.error(err));
        }}
      >
        {({ values, errors, touched }) => (
          <div className={form_container}>
            <Form className={form}>
              <div className={field_background}>
                <Field type="text" name="nombre" placeholder="Nombre" />
                <div className={error}>
                  <p>{errors.nombre && touched.nombre ? errors.nombre : ""}</p>
                </div>

                <div className={select_container}>
                  <Field id="pais" as="select" name="pais" className={select}>
                    <option value="" disabled>
                      Seleccionar Pa??s
                    </option>
                    {countries.map((pais) => (
                      <option key={pais} value={pais}>
                        {pais}
                      </option>
                    ))}
                  </Field>
                  <div className={error}>
                    <p>{errors.pais && touched.pais ? errors.pais : ""}</p>
                  </div>
                </div>

                <Field type="text" name="ciudad" placeholder="Ciudad" />
                <div className={error}>
                  <p>{errors.ciudad && touched.ciudad ? errors.ciudad : ""}</p>
                </div>

                <Field type="text" name="calle" placeholder="Calle" />
                <div className={error}>
                  <p>{errors.calle && touched.calle ? errors.calle : ""}</p>
                </div>
                <Field
                  type="text"
                  name="altura"
                  placeholder="Altura"
                  value={values.altura.replace(/\D/g, "")}
                />
                <div className={error}>
                  <p>{errors.altura && touched.altura ? errors.altura : ""}</p>
                </div>

                <Field
                  type="text"
                  name="numero"
                  placeholder="WhatsApp"
                  value={values.numero.replace(/\D/g, "")}
                />
                <div className={error}>
                  <p>{errors.numero && touched.numero ? errors.numero : ""}</p>
                </div>

                <Field
                  type="number"
                  name="cant_cancha"
                  placeholder="N??mero de canchas"
                />
                <div className={error}>
                  <p>
                    {errors.cant_cancha && touched.cant_cancha
                      ? errors.cant_cancha
                      : ""}
                  </p>
                </div>

                {/* <div role="group">
                  <h3>Cobertura</h3>
                  <label>
                    <Field type="checkbox" name="sky" value="Techada" />
                    Techada
                  </label>
                  <label>
                    <Field type="checkbox" name="sky" value="Aire Libre" />
                    Aire Libre
                  </label>
                </div>
                <div className={error}>
                  <p>{errors.sky && touched.sky ? errors.sky : ""}</p>
                </div>

                <div role="group">
                  <h3>Superficie</h3>
                  <label>
                    <Field type="checkbox" name="surface" value="Cemento" />
                    Cemento
                  </label>
                  <label>
                    <Field type="checkbox" name="surface" value="Sint??tico" />
                    Sint??tico
                  </label>
                </div>
                <div className={error}>
                  <p>
                    {errors.surface && touched.surface ? errors.surface : ""}
                  </p>
                </div>

                <div role="group">
                  <h3>Tipo de Pared</h3>
                  <label>
                    <Field type="checkbox" name="wall" value="Cemento" />
                    Cemento
                  </label>
                  <label>
                    <Field type="checkbox" name="wall" value="Blindex" />
                    Blindex
                  </label>
                </div>
                <div className={error}>
                  <p>{errors.wall && touched.wall ? errors.wall : ""}</p>
                </div> */}

                <button type="submit" className={btn_submit}>
                  Completar
                </button>
              </div>
            </Form>
            <div className={background_form}>
              <div className={background_content}>
                <h3>Completa tu Registro!</h3>
                <p>Que no queden turnos libres!</p>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
