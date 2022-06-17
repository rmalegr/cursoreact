import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

describe(' Test Promesas  09', () => {
  test('getHeroeByIdAsync debe  obtener  un error si hero no existe ', (done) => {
    const id = 100
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsy()
        done()
      })
      .catch(error => {
        expect(error).toBe('No se pudo econtrar el heroe')

        done()
      })
    // .then(hero => {
    //   expect(hero).toEqual({
    //     id: 1,
    //     name: 'Batman1!!!',
    //     owner: 'DC'
    //   })
    //   console.log(hero)
    //   //
    //   // llamar el done hasta que se termine el proceso
    //   done()
    // })
  })
})
