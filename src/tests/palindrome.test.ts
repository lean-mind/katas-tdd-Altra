import { checkIfIsPalindrome } from "@core/palindrome";

describe("checkIfIsPalindrome function", () => {
  it("should check if an empty text is palindrome", () => {
    const isPalindrome = checkIfIsPalindrome("");

    expect(isPalindrome).toBe(true);
  });

  it("should check if a text with one character is palindrome", () => {
    expect(checkIfIsPalindrome("a")).toBe(true);
    expect(checkIfIsPalindrome("e")).toBe(true);
  });

  it("should check if a space is palindrome", () => {
    expect(checkIfIsPalindrome(" ")).toBe(true);
  });

  it("should check if an stranger character is not palindrome", () => {
    expect(checkIfIsPalindrome("?")).toBe(false);
    expect(checkIfIsPalindrome("*")).toBe(false);
    expect(checkIfIsPalindrome("(")).toBe(false);
    expect(checkIfIsPalindrome(")")).toBe(false);
    expect(checkIfIsPalindrome("-")).toBe(false);
  });

  it("should check if a number is not palindrome", () => {
    expect(checkIfIsPalindrome("1")).toBe(false);
    expect(checkIfIsPalindrome("5")).toBe(false);
    expect(checkIfIsPalindrome("11")).toBe(false);
  });

  it("should check if a text contains a stranger character is not palindrome", () => {
    expect(checkIfIsPalindrome("1a1")).toBe(false);
    expect(checkIfIsPalindrome(".a.")).toBe(false);
    expect(checkIfIsPalindrome("*a*")).toBe(false);
  });

  it("should check if a text with two characters is palindrome", () => {
    expect(checkIfIsPalindrome("ab")).toBe(false);
    expect(checkIfIsPalindrome("bb")).toBe(true);
    expect(checkIfIsPalindrome("gg")).toBe(true);
    expect(checkIfIsPalindrome("aa")).toBe(true);
  });

  it("should check if a text with two characters with lower and camellcase is palindrome", () => {
    expect(checkIfIsPalindrome("Aa")).toBe(true);
  });

  it("should check if a text ignoring spaces is palindrome", () => {
    expect(checkIfIsPalindrome("Ab b a")).toBe(true);
  });

  it("should check if a text with more than two characters is palindrome", () => {
    expect(checkIfIsPalindrome("oro")).toBe(true);
    expect(checkIfIsPalindrome("ana")).toBe(true);
    expect(checkIfIsPalindrome("ana ana")).toBe(true);
    expect(checkIfIsPalindrome("A man a plan a canal Panama")).toBe(true);
  });
});
