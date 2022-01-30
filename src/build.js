/* eslint-disable no-await-in-loop */
/* eslint-disable quotes */
import { mkdir, readFile, stat, writeFile } from "fs/promises";
import { join } from "path";
import { calc } from "./calc.js";
import { dataTemplate, makeHTML, makeIndex } from "./make-html.js";
import { parse } from "./parser.js";
import { read } from "./read.js";

const DATA_DIR = "./data";
const OUTPUT_DIR = "./dist";

async function direxists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory;
  } catch (e) {
    return false;
  }
}

async function main() {
  const files = await read(DATA_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const myData = [];

  for (const file of files) {
    const path = join(DATA_DIR, file);
    const info = await stat(path);

    if (info.isDirectory()) {
      continue; // eslint-disable-line no-continue
    }

    const data = await readFile(path);
    const str = await data.toString("utf-8");

    const parsed = parse(file, str);

    const calculated = calc(file, parsed);

    const html = makeHTML(calculated, calculated.hasData);

    const rData = dataTemplate(calculated.name, html, true);

    const nnn = calculated.name;
    const filename = join(OUTPUT_DIR, `${nnn}.html`);

    await writeFile(filename, rData, { flag: "w+" });

    myData.push(calculated.name);
  }

  const index = dataTemplate("gagnavinnsla", makeIndex(myData));
  await writeFile(join(OUTPUT_DIR, "index.html"), index, { flag: "w+" });
}

main().catch((err) => console.error(err));
