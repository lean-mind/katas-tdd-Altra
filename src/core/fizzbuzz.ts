// ## FizzBuzz
// Escribe un programa que imprima los números del 1 al 100, pero aplicando
// las siguientes normas:

// * Devuelve Fizz si el número es divisible por 3.
// * Devuelve Buzz si el número es divisible por 5.
// * Devuelve FizzBuzz si el número es divisible por 3 y por 5.
// * En cualquier otro caso devuelve el número como cadena.

// ### Ejemplos:

// Entrada: 1   -> Salida: 1
// Entrada: 2   -> Salida: 2
// Entrada: 3   -> Salida: Fizz
// Entrada: 4   -> Salida: 4
// Entrada: 5   -> Salida: Buzz
// Entrada: 6   -> Salida: Fizz
// Entrada: 15  -> Salida: FizzBuzz
// ...
// Entrada: 100 -> Salida: Buzz

export const fizzbuzz = (): string[] => {
  const values: string[] = [];

  for (let value = 1; value <= 100; value++) {
    const isFizz = value % 3 === 0;
    const isBuzz = value % 5 === 0;

    if (isFizz && isBuzz) {
      values.push("FizzBuzz");
    } else if (isFizz) {
      values.push("Fizz");
    } else if (isBuzz) {
      values.push("Buzz");
    } else {
      values.push(value.toString());
    }
  }

  return values;
};

const fizzbuzzAnother = (): string[] => {
  const values: string[] = [];

  for (let value = 1; value <= 100; value++) {
    values.push(calculateFizzBuzzFor(value));
  }

  return values;
};

const fizzbuzzWithMap = (): string[] => {
  return Array.from({ length: 100 })
    .map((_, index) => index + 1)
    .map(calculateFizzBuzzFor);
};

const calculateFizzBuzzFor = (value: number) => {
  const isFizz = value % 3 === 0;
  const isBuzz = value % 5 === 0;

  if (isFizz && isBuzz) return "FizzBuzz";
  if (isFizz) return "Fizz";
  if (isBuzz) return "Buzz";
  return value.toString();
};
