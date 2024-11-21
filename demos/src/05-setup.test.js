const { beforeAll } = require('jest-circus');
const { test, expect, describe } = require('@jest/globals');

beforeAll(() => {
  console.log('beforeAll');
  // Instrucciones anteriores. Por ejemplo levantar una base de datos
});

describe('Example test suite', () => {
  test('Example test', () => {
    expect(true).toBe(true);
  });
});

describe('Set', () => { //Describe adjuntar varias prueba
test('case 1', () => {
  console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  test('case 3', () => {
    console.log('case 3');
    expect(1 + 5).toBe(6);
  });

  test('case 4', () => {
    console.log('case 4');
    expect(1 + 7).toBe(8);
  });

  test('case 5', () => {
    console.log('case 5');
    expect(2 + 2).toBe(4);
  });

  test('case 6', () => {
    console.log('case 6');
    expect(2 + 3).toBe(5);
  });

  test('case 7', () => {
    console.log('case 7');
    expect(2 + 4).toBe(6);
  });

  test('case 8', () => {
    console.log('case 8');
    expect(2 + 5).toBe(7);
  });
});

describe('Set', () => { //Describe adjuntar varias prueba
test('case 1', () => {
  console.log('case 1');
    expect(1 + 1).toBe(2);

  });
  test('case 2', () => {
    console.log('case 1');
    expect(1 + 3).toBe(4);
  });
  test('case 3', () => {
    console.log('case 1');
    expect(1 + 5).toBe(6);
  });
  test('case 4', () => {
    console.log('case 1');
    expect(1 + 7).toBe(8);
  });
});
