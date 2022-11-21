import React from "react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import style from "./clubRegister.module.css";
import { countries } from "../../../helper/contants";
import { validation } from "./schema";

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
export const ClubRegister = () => {
  return (
    <div className={container}>
      <h2>Completar Registro</h2>
      <Formik
        className=""
        initialValues={{
          club_name: "",
          email: "",
          password: "",
          street: "",
          phone: "",
          total_field: "",
          surface: [],
          sky: [],
          wall: [],
          country: "",
          city: "",
          street: "",
        }}
        validationSchema={validation}
        onSubmit={(value) =>
          //hacer el post
          console.log(value)
        }
      >
        {({ values, errors }) => (
          <div className={form_container}>
            <Form className={form}>
              <div className={field_background}>
                <Field type="text" name="club_name" placeholder="Nombre" />
                <div className={error}>
                  <p> {errors.club_name && errors.club_name}</p>
                </div>

                <Field type="email" name="email" placeholder="Correo" />
                <div className={error}>
                  <p>{errors.email && errors.email}</p>
                </div>

                <Field
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
                <div className={error}>
                  <p>{errors.password && errors.password}</p>
                </div>

                <div className={select_container}>
                  <Field
                    id="country"
                    as="select"
                    name="country"
                    className={select}
                  >
                    <option value="" disabled>
                      Seleccionar País
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </Field>
                  <div className={error}>
                    <p>{errors.country && errors.country}</p>
                  </div>
                </div>

                <Field type="text" name="city" placeholder="Ciudad" />
                <div className={error}>
                  <p>{errors.city && errors.city}</p>
                </div>

                <Field type="text" name="street" placeholder="Calle y Número" />
                <div className={error}>
                  <p>{errors.street && errors.street}</p>
                </div>

                <Field
                  type="phone"
                  name="phone"
                  placeholder="WhatsApp"
                  value={values.phone.replace(/\D/g, "")}
                />
                <div className={error}>
                  <p>{errors.phone && errors.phone}</p>
                </div>

                <Field
                  type="number"
                  name="total_field"
                  placeholder="Total de canchas"
                />
                <div className={error}>
                  <p>{errors.total_field && errors.total_field}</p>
                </div>

                <div role="group">
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
                  <p>{errors.sky && errors.sky}</p>
                </div>

                <div role="group">
                  <h3>Superficie</h3>
                  <label>
                    <Field type="checkbox" name="surface" value="Cemento" />
                    Cemento
                  </label>
                  <label>
                    <Field type="checkbox" name="surface" value="Sintético" />
                    Sintético
                  </label>
                </div>
                <div className={error}>
                  <p>{errors.surface && errors.surface}</p>
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
                  <p>{errors.wall && errors.wall}</p>
                </div>

                <button type="submit" className={btn_submit}>
                  Registrarse
                </button>
              </div>
            </Form>
            <div className={background_form}>
              <div className={background_content}>
                <h3>¡Registra tu complejo!</h3>
                <p>Que no queden turnos libres!</p>

                <article className={redirect}>
                  <p>¿Ya tenés cuenta?</p>
                  <Link to={"/login"}>Ingresá</Link>
                </article>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
