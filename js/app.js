 const loadCountry = () => {
     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => displayCountry(data))
 }
 loadCountry()

const displayCountry = countries => {
    // console.log(countries);
    const countryList = document.getElementById('country-box');
    countries.forEach(country => {
        console.log(country);
        const name = country.name.common;
        const div = document.createElement('div');
        // div.classList.add('box')
        div.innerHTML = `
        <div class="col">
              <div  id="box" class="card h-100">
                <div class="card-body">
                  <h4 class="card-title">${name}</h4>
                  <h5 class="card-text">Capital: ${country.capital}</h5>
                  <p>Area: ${country.area}</p>
                  <button onclick="displayCountryDetails('${name}')" class="btn btn-info text-white">Details</button>
                </div>
              </div>
            </div>
        `;
        countryList.appendChild(div)
    });
}

const displayCountryDetails = country => {
     fetch(`https://restcountries.com/v3.1/name/${country}`)
     .then(res => res.json())
     .then(data => getCountryDetails(data[0]))
}
const getCountryDetails = detail => {
     const name = detail.name.common;
      const countryBox = document.getElementById('country-detail')
      countryBox.innerHTML =`
      <h3>${name}</h3>
      <h5>Population: ${detail.population}</h5>
      <p>Time-Zone: ${detail.timezones}</p>
      <img src="${detail.flags.png}" width="200px">
      `;
}