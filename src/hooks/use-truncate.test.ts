import { renderHook } from "@testing-library/react-hooks/dom";
import { useTruncate } from "./use-truncate";

describe("useTruncate", () => {
  describe("should return something", () => {
    it("when the string passed is empty", () => {
      const { result } = renderHook(() => useTruncate(""));

      expect(result.current).toBe("");
    });
  });

  describe("should respect maxLength", () => {
    it("when it's defined", () => {
      const { result } = renderHook(() =>
        useTruncate("This string is too long I guess", { maxLength: 10 })
      );

      expect(result.current).toBe("This strin...");
    });

    it("when it's not defined", () => {
      const { result } = renderHook(() =>
        useTruncate("This string is too long I guess")
      );

      expect(result.current).toBe("This string is too long I guess");
    });
  });

  describe("should add elipsis", () => {
    it("when string length passed is greater than maxLength option", () => {
      const { result } = renderHook(() =>
        useTruncate("This string is too long I guess", { maxLength: 10 })
      );

      expect(result.current.slice(-3)).toBe("...");
    });
  });
});
