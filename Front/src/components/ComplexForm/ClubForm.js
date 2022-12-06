import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { instance } from "../../axios/axiosConfig";
import { countries } from "../../helper/contants";
import style from "./clubForm.module.css";
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
					calle: "",
					numero: "",
					cant_cancha: "",
					/*  surface: [],
          sky: [],
          wall: [], */
					pais: "",
					nombre: "",
					ciudad: "",
				}}
				// validationSchema={validation}
				onSubmit={(value) => {
					const { calle, cant_cancha, ciudad, nombre, numero, pais } =
						value;
					//hacer el post
					console.log("HOLA");
					instance
						.put(
							"complejo/9/",
							{
								calle,
								altura: 120,
								telefono: 12312312,
								cant_cancha,
								pais,
								nombre,
								ciudad,
								usuario: 9,
							},
							{
								auth: {
									username: "nico11@gmail.com",
									password: 123456789,
								},
							}
						)
						.then((resp) => console.log(resp))
						.catch((err) => console.error(err));
				}}>
				{({ values, errors, touched }) => (
					<div className={form_container}>
						<Form className={form}>
							<div className={field_background}>
								<Field
									type='text'
									name='nombre'
									placeholder='Nombre'
								/>
								<div className={error}>
									<p>
										{errors.nombre && touched.nombre
											? errors.nombre
											: ""}
									</p>
								</div>

								<div className={select_container}>
									<Field
										id='pais'
										as='select'
										name='pais'
										className={select}>
										<option value='' disabled>
											Seleccionar País
										</option>
										{countries.map((pais) => (
											<option key={pais} value={pais}>
												{pais}
											</option>
										))}
									</Field>
									<div className={error}>
										<p>
											{errors.pais && touched.pais
												? errors.pais
												: ""}
										</p>
									</div>
								</div>

								<Field
									type='text'
									name='ciudad'
									placeholder='Ciudad'
								/>
								<div className={error}>
									<p>
										{errors.ciudad && touched.ciudad
											? errors.ciudad
											: ""}
									</p>
								</div>

								<Field
									type='text'
									name='calle'
									placeholder='Calle y Número'
								/>
								<div className={error}>
									<p>
										{errors.calle && touched.calle
											? errors.calle
											: ""}
									</p>
								</div>

								<Field
									type='numero'
									name='numero'
									placeholder='WhatsApp'
									value={values.numero.replace(/\D/g, "")}
								/>
								<div className={error}>
									<p>
										{errors.numero && touched.numero
											? errors.numero
											: ""}
									</p>
								</div>

								<Field
									type='number'
									name='cant_cancha'
									placeholder='Número de canchas'
								/>
								<div className={error}>
									<p>
										{errors.cant_cancha &&
										touched.cant_cancha
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
                </div> */}

								<button type='submit' className={btn_submit}>
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
