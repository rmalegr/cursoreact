import { Fragment } from 'react'
import PropTypes from 'prop-types'

const getResul = (a, b) => {
  return a + b
}
const getNuevaLista = () => {
  /*   const arreglo = ['papa ', 'manzana ', 'naranja']
  let cadena = ''
  for (let index = 0; index < arreglo.length; index++) {
    cadena = cadena + arreglo[index]
  } */
  return cadena.toUpperCase()
}
export const HelloWorldApp = ({ title, subtitle }) => {
  return (
    <Fragment>
      <h1>{getResul(1, 6)}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h3>{getNuevaLista()}</h3>
      {/* JSON.stringify(mensaje) */}
      <p>Soy un subtitulo</p>
    </Fragment>
  )
}

HelloWorldApp.PropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
}
