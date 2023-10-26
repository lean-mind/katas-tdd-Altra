// ## Palíndromos
// Escribe un programa que reciba una palabra y determine si es un palíndromo.
// Un palíndromo es una palabra que se lee igual de izquierda a derecha que de
// derecha a izquierda.

// ### Ejemplos
// - "oro" -> true
// - "ana" -> true
// - "juan" -> false

export const checkIfIsPalindrome = (message: string): boolean => {
  const validCharactersRegex = /^[a-zA-Z ]*$/;
  const hasInvalidCharacter = message
    .split("")
    .some((character) => !validCharactersRegex.test(character));
  if (hasInvalidCharacter) return false;

  const reversedMessage = message.split("").reverse().join("");
  return message.toLowerCase() === reversedMessage.toLowerCase();
};
