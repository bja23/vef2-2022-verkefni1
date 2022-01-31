/* eslint-disable quotes */
import { describe, expect, it } from "@jest/globals";
import { calc } from "../calc.js";

describe("calc test with numbers", () => {
  it("calculates numbers", () => {
    const name = "1.txt";

    const data = {
      // eslint-disable-next-line object-shorthand
      name: name,
      hasData: true,
      data: [904, 688, 607, 299],
      total: 4,
    };

    const calc2 = calc(name, data);

    expect(calc2).toEqual({
      name: "1.txt",
      variance: 47102,
      max: 904,
      median: 648,
      min: 299,
      sd: 217,
      sum: 2498,
      range: 605,
      mean: 625,
      hasData: true,
      data: [299, 607, 688, 904],
    });
  });
});

describe("calc test with no numbers", () => {
  it("calculates numbers", () => {
    const name = "1.txt";

    const data = {
      // eslint-disable-next-line object-shorthand
      name: name,
      hasData: false,
      data: 0,
      total: 0,
    };

    const calc2 = calc(name, data);

    expect(calc2).toEqual({
      name: "1.txt",
      hasData: false,
    });
  });
});
