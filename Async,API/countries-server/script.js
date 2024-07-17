// const { json } = require("body-parser");

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log("DOM fully loaded and parsed");
  
//     const btn = document.querySelector('.btn-country');
//     const countriesContainer = document.querySelector('.countries');
  
//     if (!btn) {
//       console.error("Button with class 'btn-country' not found.");
//       return;
//     }
  
//     if (!countriesContainer) {
//       console.error("Container with class 'countries' not found.");
//       return;
//     }
  
//     const getCountryData = function (country) {
//       const request = new XMLHttpRequest();
//       request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//       request.send();
  
//       request.addEventListener('load', function () {
//         if (this.status === 200) {
//           const [data] = JSON.parse(this.responseText);
//           console.log(data);
  
//           const html = `
//             <article class="country">
//               <img class="country__img" src="${data.flags.svg}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} million people</p>
//                 <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
//                 <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//               </div>
//             </article>
//           `;
//           countriesContainer.insertAdjacentHTML('beforeend', html);
//           countriesContainer.style.opacity = 1;
//           btn.disabled= true;
//         } else {
//           console.error('Failed to fetch data');
//         }
//       });
//     };
  
//     btn.addEventListener('click', function() {
//       console.log("Button clicked");
//       getCountryData('portugal'); 
//       getCountryData('USA');
//       getCountryData('Germany');// Replace 'portugal' with any country you want to fetch
      
//     });
//   });
  

  // so by writing above code if we refresh the browser the order would be different like portugal,usa,germany and next time germany,portugal,usa and other time it would be lke usa,germany,portugal
  //so to avoid this we perform call back ,
  // so after the first ajax call only,the remaining would come
  // so by this we make sure the code which is executing after which


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
  
    const getCountryAndNeighbour = function (country) {
      const request = new XMLHttpRequest();
      request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
      request.send();
  
      request.addEventListener('load', function () {
        if (this.status === 200) {
          const [data] = JSON.parse(this.responseText);
          console.log(data);
  
          renderCountry(data);
  
          const neighbours = data.borders;
          if (!neighbours || neighbours.length === 0) return;
  
          // Get neighbouring countries
          neighbours.forEach(neighbour => {
            const neighbourRequest = new XMLHttpRequest();
            neighbourRequest.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
            neighbourRequest.send();
  
            neighbourRequest.addEventListener('load', function () {
              if (this.status === 200) {
                const [neighbourData] = JSON.parse(this.responseText);
                console.log(neighbourData);
                renderCountry(neighbourData, 'neighbour');
              }
            });
          });
  
          // Disable the button after displaying the result
          btn.disabled = true;
        } else {
          console.error('Failed to fetch data');
        }
      });
    };
  
    btn.addEventListener('click', function() {
      console.log("Button clicked");
    //   getCountryAndNeighbour('portugal');
    //   getCountryAndNeighbour('usa');
      getCountryAndNeighbour('Germany'); // Replace 'portugal' with any country you want to fetch
    });
  });
  