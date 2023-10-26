import { fizzbuzz } from "@core/fizzbuzz";

describe("fizzbuzz function", () => {
  const getValueFrom = (result: string[], valueToCheck: number): string => {
    const index = valueToCheck - 1;
    return result[index];
  };

  it("should have length a 100 values", () => {
    const result = fizzbuzz();

    expect(result).toHaveLength(100);
  });

  it("should receive a FizzBuzz when the number is divisible by 3 and 5", () => {
    const result = fizzbuzz();

    expect(getValueFrom(result, 15)).toBe("FizzBuzz");
    expect(getValueFrom(result, 30)).toBe("FizzBuzz");
  });

  it("should receive a Fizz when the number is divisible only by 3", () => {
    const result = fizzbuzz();

    expect(getValueFrom(result, 3)).toBe("Fizz");
    expect(getValueFrom(result, 6)).toBe("Fizz");
    expect(getValueFrom(result, 99)).toBe("Fizz");
  });

  it("should receive a Buzz when the number is divisible only by 5", () => {
    const result = fizzbuzz();

    expect(getValueFrom(result, 5)).toBe("Buzz");
    expect(getValueFrom(result, 10)).toBe("Buzz");
    expect(getValueFrom(result, 100)).toBe("Buzz");
  });

  it("should receive the number when it is not divisible by 3 or 5", () => {
    const result = fizzbuzz();

    expect(getValueFrom(result, 1)).toBe("1");
    expect(getValueFrom(result, 2)).toBe("2");
    expect(getValueFrom(result, 98)).toBe("98");
  });
});
