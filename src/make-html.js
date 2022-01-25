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

export function makeIndex(entries) {
    let list = '';
    for (const entry of entries) {
        const link = `<li><a href="${`${entry}.html`}">${entry}</a></li>`;
        console.log(link);
        list += link;
    }
    return `<section><ul>${list}</ul></section>`;
}

export function dataTemplate(name, rData, showBack = false){
    const back = showBack ? `<p><a href="/">Til baka</a></>` : '';
    return `
    <!doctype html>
    <html>
        <head>
            <title>${name}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            ${rData}
            ${back}
        </body>
    </html>
`;  
}