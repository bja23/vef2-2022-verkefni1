export function makeHTML(entry) {
    const html = entry.data;
    const sum = entry.sum;

    const template = `
        <section>
            <p>Sum: ${sum}</p>
            ${html}
        </section>
        `; 

    return template;
}

export function dataTemplate(name, rData){
    return `
    <!doctype html>
    <html>
        <head>
            <title>${name}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            ${rData}
        </body>
    </html>
`;  
}