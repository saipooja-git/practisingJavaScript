
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    const countriesContainer = document.querySelector('.countries');

    const renderCountry = function (data, className = '') {
        const html = `
          <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
              <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
            </div>
          </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
      };

    const geoData = function(lat,lng){
        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(res => {
            if(!res.ok) throw new Error(`problem with geoCoding ${res.status}`);
               return res.json();
            
        }).then(data => {
            console.log(`you are in ${data.city}, ${data.country}`);
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`);

        }).then(res=> {
            if(!res.ok) throw new Error(`country not found ${res.status}`);
            return res.json();
        }).then(data=>renderCountry(data[0]))
             .catch(err => console.error(`${err.message}`));
    };
geoData(40.730610, -73.935242);

});