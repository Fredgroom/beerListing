import axios from 'axios';


    //add event listener to buttons
    // element.addEventListener("click", function(){ alert("Hello World!"); });

        //Call API-axios
        axios.get('https://api.punkapi.com/v2/beers')
        .then(function (response) {
                const beer = response.data;
                const singleBeer = response.data[0];
                const img = response.image_url;
                const name = response.name;
                const description = response.description;
                const abv = response.abv;
                const ibu = response.ibu;
                const pH = response.ph;
                console.log(singleBeer);
          
        })
        .catch(function (error) {
          console.log(error);
        });


            //define terms to manage the data
            // class Beer {
            //     constructor(img_url, name, description, abv, ibu, pH) {
            //         const beer = response.data;
            //         const singleBeer = response.data[0];
            //         const img = singleBeer.image_url;
            //         const name = singleBeer.name;
            //         const description = singleBeer.description;
            //         const abv = singleBeer.abv;
            //         const ibu = singleBeer.ibu;
            //         const pH = singleBeer.ph;
            //     }
            //             let beer = document.createElement('div');
            //                 beer.setAttribute('class','beer');

            //             let imgElement = document.createElement('img');
            //                 imgElement.setAttribute('src', img);

            //             let nameElement = document.createElement('h1');
            //                 nameElement.innerText = name;

            //             let descriptionElement = document.createElement('p');
            //                 descriptionElement.innerText = description;
                        
            //             let abvElement = document.createElement('div');
            //                 abvElement.setAttribute('class','data')
            //                 abvElement.innerText = abv;

            //             let ibuElement = document.createElement('div');
            //                 ibuElement.setAttribute('class','data')
            //                 ibuElement.innerText = ibu;
                        
            //             let phElement = document.createElement('div');
            //                 phElement.setAttribute('class','data pH')
            //                 phElement.innerText = pH;
            //             }
                

            // const container = document.getElementById('main');

            // beer.appendChild(imgElement());
            // beer.appendChild(nameElement());
            // beer.appendChild(descriptionElement());
            // beer.appendChild(abvElement());
            // beer.appendChild(ibuElement());
            // beer.appendChild(phElement());

            // container.appendChild(beer());
            

        
     