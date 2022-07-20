const fs = require('fs')

function v1() {
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
}

function v2() {
  fs.readFile('./csv/clientes.csv', 'utf8', (err, data) => {
    const originalDataArray = data.split(/\r?\n/);
    console.log(originalDataArray[0].split('\t'));

    const organizedData = originalDataArray.map(data => {
      const [name, shortName, urlMainWebsite, phone, email, urlSalesWebsite, urlInstagram, city, state, urlLogo, salesEngine] = data.split('\t')
      return {
        name,
        shortName,
        urlMainWebsite,
        phone,
        email,
        urlSalesWebsite,
        urlInstagram,
        city,
        state,
        urlLogo,
        salesEngine,
      }
    })

    fs.writeFileSync('./json/clientes.json', JSON.stringify(organizedData, null, 2));
  
  });
}

v2()