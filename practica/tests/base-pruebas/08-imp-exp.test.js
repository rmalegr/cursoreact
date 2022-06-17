/* eslint-disable no-undef */
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'
import heroes from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1
    const hero = getHeroeById(id)

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })
  test('getHeroesByOwner Debe regresar HEROES DE DC  ', () => {
    const owner = 'DC'
    const heroOwner = getHeroesByOwner(owner)
    console.log(heroOwner)
    // expect(heroOwner.length).toBe(3)
    expect(heroOwner).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])
    expect(heroOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  })
})
