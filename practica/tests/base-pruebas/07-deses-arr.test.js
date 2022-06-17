
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'

/* eslint-disable no-undef */
describe('Pruebas en 07-deses-arr', () => {
  test('debe retornar un arreglo ', () => {
    const [letters, numbers] = retornaArreglo()
    expect(letters).toBe('ABC')
    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')
  })
})
