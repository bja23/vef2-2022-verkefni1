/* eslint-disable quotes */
export function makeHTML(entry, showData) {
  const back = showData
    ? `
        <p>Variance: ${entry.variance}</p>
        <p>Max: ${entry.max}</p>
        <p>Median: ${entry.median}</p>
        <p>Min: ${entry.min}</p>
        <p>Sd: ${entry.sd}</p>
        <p>Sum: ${entry.sum}</p>
        <p>Range: ${entry.range}</p>
        <p>Mean: ${entry.mean}</p>
        <div class='DataList'>${entry.data} </div>
        `
    : ` <p>Þetta gagnasafn hefur engar niðurstöður/aðeins ólögleg gögn</p>
        `;

  const template = `
        <section>
            ${back}
        </section>
        `;

  return template;
}

export function makeNoDataHtml() {
  const template = `<section><p>Þetta gangasett hefur engar eða aðeins ólöglegar niðurstöður </section>`;
  return template;
}

export function makeIndex(entries) {
  let list = "";
  for (const entry of entries) {
    const link = `<li><a href='${`${entry}.html`}'>${entry}</a></li>`;
    list += link;
  }
  return `<section><ul>${list}</ul></section>`;
}

export function dataTemplate(name, rData, showBack = false) {
  const back = showBack ? `<p><a href='/'>Til baka</a></>` : ""; // eslint-disable-line quotes
  return `
    <!doctype html>
    <html>
        <head>
            <title>${name}</title>
            <link rel='stylesheet' href='styles.css'>
        </head>
        <body>
            ${rData}
            ${back}
        </body>
    </html>
`;
}
