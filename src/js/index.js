import axios from 'axios';
import { WSAEINVALIDPROCTABLE } from 'constants';

//$.ajax()
axios.get('https://api.punkapi.com/v2/beers')
  //done()
  .then(response => {
    
    class Beer {
        constructor(img, name, description, abv, ibu, pH) {
            const beer = response.data;
            const firstBeer = response.data[0];

            const img = response.data[this].image_url;
            const name = response.data[this].name;
            const description = response.data[this].description;
            const abv = response.data[this].abv;
            const ibu = response.data[this].ibu;
            const pH = response.data[this].ph;
        }

        container() {
            document.getElementById('main');
        }

        beer() {
            document.createElement('div');
            beer.setAttribute('class','beer');
        }

        imgElement() {
            document.createElement('img');
            imgElement.setAttribute('src', img);
        }

        nameElement() {
            document.createElement('h1');
            nameElement.innterText = name;
        }

        abvElement() {
            document.createElement('div');
            abvElement.setAttribute('class','data')
            abvElement.innerText = abv;
        }

        ibuElement() {
            document.createElement('div');
            ibuElement.setAttribute('class','data')
            ibuElement.innerText = ibu;
        }

        phElement() {
            document.createElement('div');
            phElement.setAttribute('class','data pH')
            phElement.innerText = pH;
        }

    }

    // const img = response.data[0].image_url;
    // const name = response.data[0].name;
    // const description = response.data[0].description;
    // const abv = response.data[0].abv;
    // const ibu = response.data[0].ibu;
    // const pH = response.data[0].ph;
  
    // const container = document.getElementById('main');

    // let beer = document.createElement('div');
    //     beer.setAttribute('class','beer');

    // let imgElement = document.createElement('img');
    //     imgElement.setAttribute('src', img);

    // let nameElement = document.createElement('h1');
    //     nameElement.innerText = name;

    // let descriptionElement = document.createElement('p');
    //     descriptionElement.innerText = description;
    
    // let abvElement = document.createElement('div');
    //     abvElement.setAttribute('class','data')
    //     abvElement.innerText = abv;

    // let ibuElement = document.createElement('div');
    //     ibuElement.setAttribute('class','data')
    //     ibuElement.innerText = ibu;
    
    // let phElement = document.createElement('div');
    //     phElement.setAttribute('class','data pH')
    //     phElement.innerText = pH;

    beer.appendChild(imgElement());
    beer.appendChild(nameElement());
    beer.appendChild(descriptionElement());
    beer.appendChild(abvElement());
    beer.appendChild(ibuElement());
    beer.appendChild(phElement());

    container.appendChild(beer());

  })
  //fail()
  .catch(function (error) {
    console.log(error);
  });