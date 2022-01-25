import { join } from 'path';
import { writeFile, mkdir, readFile, readdir, stat } from 'fs/promises';

import graymatter from 'gray-matter';
import { marked } from 'marked';

import { makeHTML, dataTemplate, makeIndex } from './make-html.js';
import { parse } from './parser.js';


const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function direxists(dir) {
    try {
        const info = await stat(dir);
        return info.isDirectory;
    } catch (e) {
        return false;
    }
}


async function main() {
    const files = await readdir(DATA_DIR);

    if (!(await direxists(OUTPUT_DIR))) {
        await mkdir(OUTPUT_DIR);
    }

    const myData = [];

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

        const rData = dataTemplate(calculated.name, html, true);

        const nnn = calculated.name;
        const filename = join(OUTPUT_DIR, `${nnn}.html`);

        await writeFile(filename, rData, { flag: 'w+' });

        myData.push(calculated.name);


    }

    const index = dataTemplate('gögn', makeIndex(myData));
    await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });

    /*console.log('files :>> ', files);*/
}


main().catch((err) => console.error(err));
