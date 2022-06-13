/** @format */

import { Fragment } from "react";
import PropTypes from "prop-types";
const getResul = (a, b) => {
	return a + b;
};
const getNuevaLista = () => {
	let arreglo = ["papa ", "manzana ", "naranja"];
	let cadena = "";
	for (let index = 0; index < arreglo.length; index++) {
		cadena = cadena + arreglo[index];
	}
	return cadena.toUpperCase();
};
export const HelloWorldApp = ({ title, subtitle }) => {
	if (!title) {
		throw new Error("El title no existe");
	}
	const mensaje = {
		nombre: "rodrigo",
		message: "Holaaa",
	};
	return (
		<>
			<h1>{getResul(1, 6)}</h1>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
			<h3>{getNuevaLista()}</h3>
			{/*JSON.stringify(mensaje)*/}
			<p>Soy un subtitulo</p>
		</>
	);
};

HelloWorldApp.PropTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.number.isRequired,
};
