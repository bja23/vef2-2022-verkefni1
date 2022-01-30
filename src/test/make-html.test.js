/* eslint-disable quotes */
import { describe, expect, it } from "@jest/globals";
import { makeIndex, makeNoDataHtml } from "../make-html";

describe("make html with no data", () => {
  it("creates a html string", () => {
    const input = {
      name: "1.txt",
      hasData: false,
    };

    const parsed = makeNoDataHtml(input);

    const output = `<section><p>Þetta gangasett hefur engar eða aðeins ólöglegar niðurstöður </section>`;
    expect(parsed).toBe(output);
  });
});

describe("test index", () => {
  it("recive name list and makes ul/li list with names", () => {
    const parsed = makeIndex("1.txt");

    const output = `<section><ul><li><a href='1.html'>1</a></li><li><a href='..html'>.</a></li><li><a href='t.html'>t</a></li><li><a href='x.html'>x</a></li><li><a href='t.html'>t</a></li></ul></section>`;
    expect(parsed).toBe(output);
  });
});
