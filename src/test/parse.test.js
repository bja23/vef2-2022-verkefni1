/* eslint-disable quotes */
import { describe, expect, it } from "@jest/globals";
import { parse } from "../parser.js";

describe("parser0", () => {
  it("parses data", () => {
    const name = "1.txt";

    const input = "688\n904\n607\n299";

    const parsed = parse(name, input);

    expect(parsed).toEqual({
      name: "1.txt",
      hasData: true,
      data: [688, 904, 607, 299],
      total: 4,
    });
  });
});

describe("parser1 (with one extra string)", () => {
  it("parses data", () => {
    const name = "1.txt";

    const input = "688\n904\nhallo\n607\n299";

    const parsed = parse(name, input);

    expect(parsed).toEqual({
      name: "1.txt",
      hasData: true,
      data: [688, 904, 607, 299],
      total: 4,
    });
  });
});

describe("parser2 (one extra string and numer with (þúsund og kommu)", () => {
  it("parses data", () => {
    const name = "1.txt";

    const input = "688\n904\nhallo\n607\n299\n1.000.000,123";

    const parsed = parse(name, input);

    expect(parsed).toEqual({
      name: "1.txt",
      hasData: true,
      data: [688, 904, 607, 299, 1000000.123],
      total: 5,
    });
  });
});

describe("parser3 (with no data just some strings", () => {
  it("parses and returns name", () => {
    const name = "1.txt";

    const input = "ttt\ndv\nhallo\n";

    const parsed = parse(name, input);

    expect(parsed).toEqual({
      name: "1.txt",
      hasData: false,
      data: [],
      total: 0,
    });
  });
});

describe("parser3(with no data) ", () => {
  it("parses and returns name and no data", () => {
    const name = "1.txt";

    const input = "";

    const parsed = parse(name, input);

    expect(parsed).toEqual({
      name: "1.txt",
      hasData: false,
      data: [],
      total: 0,
    });
  });
});
