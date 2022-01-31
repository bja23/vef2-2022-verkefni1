/* eslint-disable quotes */
export function makeHTML(entry, showData) {
  const back = showData
    ? `
  <li><p>Variance: ${entry.variance}</p></li>
  <li><p>Max: ${entry.max}</p></li>
  <li><p>Median: ${entry.median}</p></li>
  <li><p>Min: ${entry.min}</p></li>
  <li> <p>Sd: ${entry.sd}</p></li>
  <li> <p>Sum: ${entry.sum}</p></li>
  <li><p>Range: ${entry.range}</p></li>
  <li><p>Mean: ${entry.mean}</p></li>
  <li> <div class='DataList'>Legal data: ${entry.data} </div></li>
  `
    : ` <p>Þetta gagnasafn hefur engar niðurstöður/aðeins ólögleg gögn</p>
  `;
  /*
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

        */
  const template = `<section><ul>${back}</ul></section>`;
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
  const back = showBack
    ? `<div class='BackButton'><p><a href='/'>Til baka</a></></div>`
    : ""; // eslint-disable-line quotes
  return `
    <!doctype html>
    <html>
        <head>
            <title>${name}</title>
            <link rel='stylesheet' href='styles.css'>
        </head>
        <body>
            ${back}
            ${rData}
        </body>
    </html>
`;
}
