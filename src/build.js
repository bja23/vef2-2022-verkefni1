import { join } from 'path';
import { writeFile, readFile, readdir, stat } from 'fs/promises';

import graymatter from 'gray-matter';
import { marked } from 'marked';

import { makeHTML, dataTemplate } from './make-html.js';
import { parse } from './parser.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
    const files = await readdir(DATA_DIR);

    for (const file of files){
        const path = join(DATA_DIR, file);
        const info = await stat(path);

        if (info.isDirectory()) {
            continue;
        }
        
        const data = await readFile(path);
        const str = await data.toString('utf-8');
        
        /*console.log('file name: ', file);
        console.log('str :>>', str); */
        const calculated = parse(file, str);
        console.log('parsed :>> ', calculated);

        const html = makeHTML(calculated);
        console.log('html :>> ', html);

        const rData = dataTemplate(calculated.name, html);

        const nnn = calculated.name;
        const filename = join(OUTPUT_DIR, `${nnn}.html`);

        await writeFile(filename, rData);


    }

    /*console.log('files :>> ', files);*/
}


main().catch((err) => console.error(err));
