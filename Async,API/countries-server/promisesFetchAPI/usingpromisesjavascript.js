'use strict';

// const { error } = require("console");

document.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM fully loaded and parsed");

  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  if (!btn) {
    console.error("Button with class 'btn-country' not found.");
    return;
  }

  if (!countriesContainer) {
    console.error("Container with class 'countries' not found.");
    return;
  }

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

  // const getCountryData = function(country) {
  //   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
  //     console.log(response);
  //     return response.json();
  //   }).then(function(data) {
  //     console.log(data);
  //     renderCountry(data[0]);
  //     btn.disabled=true;
  //   }).catch(function(error) {
  //     console.error('Error fetching data:', error);
  //   });
  // };

//   const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then(response => {
//         if(!response.ok)
//           throw new Error(`country not found ${response.status}`);
//         response.json()
//       })
//       .then(data => {
//         renderCountry(data[0]);
//         btn.disabled = true;

//         const neighbour = data[0].borders ? data[0].borders[0] : null;
//         if (!neighbour) return;

//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//           .then(response =>
            
//             {
//               if(!response.ok)
//                 throw new Error(`country not found ${response.status}`);
//               response.json()
//             })
//           .then(neighbourData => {
//             renderCountry(neighbourData[0], 'neighbour');
//           });
//       })
//       .catch(function(error) {
//         console.error('Error fetching data:', error);
//       });
//   };

//   btn.addEventListener('click', function() {
//     getCountryData('portugal');
//   });
// }); // sinc that manually throwing of error is getting duplicated so the below is the code where a new method is introduced 
//to call it instead of clumpsyness


const getJSON = function(url,errorMsg = 'Something went wrong'){
  return fetch(url)
  .then(response =>
            
                {
                  if(!response.ok)
                    throw new Error(`country not found ${response.status}`);
                  response.json();
                });
};

const getCountryData = function(country) {
getJSON(`https://restcountries.com/v3.1/name/${country}`,'Country not found')  
  .then(data => {
      renderCountry(data[0]);
      btn.disabled = true;

      const neighbour = data[0].borders ? data[0].borders[0] : null;
      if (!neighbour) return;
 return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,'country not found')
        .then(neighbourData => {
          renderCountry(neighbourData[0], 'neighbour');
        });
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
};

btn.addEventListener('click', function() {
  getCountryData('portugala');
});
});
