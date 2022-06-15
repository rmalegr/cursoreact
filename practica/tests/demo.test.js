/* eslint-disable no-undef */
describe('Pruebas en <DemoComponent', () => {
  test('Esta prueba no debe fallar', () => {
  // 1. inicializacion
    const message1 = 'hola mundo'
    // estimulo
    const message2 = message1.trim()

    // 3. Observar el comportmiento .. esperado
    expect(message1).toBe(message2)
  })
})
