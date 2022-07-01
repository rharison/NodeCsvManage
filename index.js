const fs = require('fs')

fs.readFile('./csv/life_expectance.csv', 'utf8', (err, data) => {
  const originalDataArray = data.split(/\r?\n/);
  const filteredData = originalDataArray.filter(data => data.split(',')[1] === '2015')
  const organizedDataByCountry = filteredData.map(data => {
    return {
      country: data.split(',')[0],
      lifeExpectancy: Math.round(+(data.split(',')[2]))
    }
  })
  fs.writeFileSync('./json/life-expectance-by-country.json', JSON.stringify(organizedDataByCountry, null, 2));

});