/* eslint-disable no-undef */
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'

describe('pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'Rodrigo'
    }

    const user = getUser()
    expect(user).toEqual(testUser)
  })
  test('getUsuario debe retornar un objeto', () => {
    const name = 'Rodrigo'
    const userr = getUsuarioActivo(name)
    expect(userr).toStrictEqual({
      uid: 'ABC567',
      username: name
    })
  })
})
