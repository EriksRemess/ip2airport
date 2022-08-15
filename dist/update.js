const fs = require('fs').promises;
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
(async () => {
  const csv = await fetch('https://davidmegginson.github.io/ourairports-data/airports.csv')
    .then(res => res.text());
  const lines = csv.split('\n');
  let data = [];
  for (let nr = 1; nr < lines.length; nr++) {
    const line = lines[nr].split(',').map(x => x.replace(/"/g, ''));
    if (line[13] && line[11] === 'yes') {
      data.push({
        country_code: line[8],
        region_name: line[10],
        iata: line[13],
        airport: line[3],
        ll: [parseFloat(line[4]), parseFloat(line[5])]
      })
    }
  }
  fs.writeFile('../airports.json', JSON.stringify(data, null, 2), 'utf8');
})();
