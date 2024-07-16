document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    const btn = document.querySelector('.btn-country');
    const countriesContainer = document.querySelector('.countries');
  
    btn.addEventListener('click', function() {
      console.log("Button clicked");
      const request = new XMLHttpRequest();
      request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
      request.send();
  
      request.addEventListener('load', function() {
        if (this.status === 200) {
          console.log("Request loaded successfully");
          const [data] = JSON.parse(this.responseText);
          console.log(data);
          const html = `
            <article class="country">
              <img src="${data.flags.svg}" class="country_img" alt="Flag of ${data.name.common}">
              <div class="country-details">
                <h3 class="country_name">country name :${data.name.common}</h3>
                <h4 class="country_region">Region:${data.region}</h4>
                <p class="country_row"><span>Population:${(data.population / 1000000).toFixed(1)} million people</span></p>
                <p class="country_row"><span>Language:${data.languages[Object.keys(data.languages)[0]]}</span></p>
                <p class="country_row"><span>Currency:${data.currencies[Object.keys(data.currencies)[0]].name}</span></p>
              </div>
            </article>`;
          countriesContainer.insertAdjacentHTML('beforeend',html);
          countriesContainer.style.opacity=1;
        } else {
          console.error('Error fetching data');
        }
      });
    });
  });
  