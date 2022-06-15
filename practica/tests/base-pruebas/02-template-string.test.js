/* eslint-disable no-undef */

import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe retornar Hola Rodrigo', () => {
    const nombre = 'Rodrigo'
    const mensaje = getSaludo(nombre)

    expect(mensaje).toBe(`Hola ${nombre}!!!!`)
  })
})
