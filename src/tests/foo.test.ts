import {foo} from "@core/foo";

describe("foo", () => {
  it("should work", () => {
    expect(foo("foo")).toBe("foo");
  });
});