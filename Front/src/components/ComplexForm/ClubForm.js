import React from "react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import style from "./clubForm.module.css";
import { countries } from "../../helper/contants";
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
export const ClubForm = () => {
  return (
    <div className={container}>
      <h2>Completar</h2>
      <Formik
        initialValues={{
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
        {({ values, errors, touched }) => (
          <div className={form_container}>
            <Form className={form}>
              <div className={field_background}>
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
                    <p>
                      {errors.country && touched.country ? errors.country : ""}
                    </p>
                  </div>
                </div>

                <Field type="text" name="city" placeholder="Ciudad" />
                <div className={error}>
                  <p>{errors.city && touched.city ? errors.city : ""}</p>
                </div>

                <Field type="text" name="street" placeholder="Calle y Número" />
                <div className={error}>
                  <p>{errors.street && touched.street ? errors.street : ""}</p>
                </div>

                <Field
                  type="phone"
                  name="phone"
                  placeholder="WhatsApp"
                  value={values.phone.replace(/\D/g, "")}
                />
                <div className={error}>
                  <p>{errors.phone && touched.phone ? errors.phone : ""}</p>
                </div>

                <Field
                  type="number"
                  name="total_field"
                  placeholder="Total de canchas"
                />
                <div className={error}>
                  <p>
                    {errors.total_field && touched.total_field
                      ? errors.total_field
                      : ""}
                  </p>
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
                  <p>{errors.sky && touched.sky ? errors.sky : ""}</p>
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
                </div>

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
