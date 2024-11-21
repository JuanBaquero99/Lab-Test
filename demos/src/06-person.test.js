import Person from '../src/06-person';
import { test, expect, beforeEach, describe } from '@jest/globals';

describe ('Test for Person', () => {
  let person;
  // Arrange
  beforeEach(() => { // Se ejecuta antes de cada test y se puede usar para inicializar variables y no repetir código
    person = new Person('John', 45, 1.7);
  });

  test('should return down', () => {
    // AAA
    // Arrange: Alistar (preparar) los datos
    person.weight = 45;
    // Act: Actuar (ejecutar) el código a probar
    const imc = person.calcIMC();
    // Assert: Afirmar (verificar) que el resultado es el esperado
    expect(imc).toBe('down');
  });
  test('should return normal', () => {
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});

