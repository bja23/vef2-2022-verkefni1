/* eslint-disable quotes */
import { describe } from "@jest/globals";
import { read } from "../read";

const DATA_DIR = "././data";
const DATA_DIR_NOT = "./thisDirectoryDoesNoteExist";

const tester = await read(DATA_DIR);

const expected = [
  "1.txt",
  "10.txt",
  "11.txt",
  "12.txt",
  "2.txt",
  "3.txt",
  "4.txt",
  "5.txt",
  "6.txt",
  "7.txt",
  "8.txt",
  "9.txt",
];

describe("directory exist", () => {
  it("return the files from directory", () => {
    expect(tester).toMatchObject(expected);
  });
});
