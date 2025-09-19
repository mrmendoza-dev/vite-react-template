import { describe, it, expect } from "vitest";
import { formatCurrency } from "@/utils/formatUtility";

describe("format utils", () => {
  it("formats currency", () => {
    expect(formatCurrency(2)).toBe("$2.00");
  });
});
