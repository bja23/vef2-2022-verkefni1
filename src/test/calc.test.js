import { describe, expect, it } from "@jest/globals";
import { calc } from "../calc.js";

describe("calc test with numbers", () => {
  it("calculates numbers", () => {
    const name = "1.txt";

    const data = {
      name: name,
      hasData: true,
      data: [904, 688, 607, 299],
      total: 4,
    };

    let calc2 = calc(name, data);

    expect(calc2).toEqual({
      name: "1.txt",
      variance: 47102.25,
      max: 904,
      median: 647.5,
      min: 299,
      sd: 217.0305278065738,
      sum: 2498,
      range: 605,
      mean: 624.5,
      hasData: true,
      data: [299, 607, 688, 904],
    });
  });
});

describe("calc test with no numbers", () => {
  it("calculates numbers", () => {
    const name = "1.txt";

    const data = {
      name: name,
      hasData: false,
      data: 0,
      total: 0,
    };

    let calc2 = calc(name, data);

    expect(calc2).toEqual({
      name: "1.txt",
      hasData: false,
    });
  });
});
