import axios from 'axios';
import Beer from './functions';



    //add event listener to buttons
    // document.querySelector('#beerList').addEventListener
    // document.querySelectorAll('button').forEach(button => {
    //     button.addEventListener('click', function(event) {
    //       const page = event.target.id;
    //     })
    //   });
    
        //Call API-axios
        axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=6')

        .then(response => {
            const beers = response.data;

            for(let singleBeer of beers) {
                
                let beer = createClassInstances(singleBeer);
                
                beer.appendToPage();
            }

            const singleBeer = response.data[0];
      
    })

        console.log()

        //create class instances
        function createClassInstances(singleBeer) {
            const img = singleBeer.image_url;
            const name = singleBeer.name;
            const description = singleBeer.description;
            const abv = singleBeer.abv;
            const ibu = singleBeer.ibu;
            const pH = singleBeer.pH;

            console.log(Beer);

            let beer = new Beer(img, name, description, abv, ibu, pH);
            return beer;
            }
            
        
    //get a random beer on QuickFind

    var element = document.getElementById("quickFind");
    element.addEventListener('click', function() {
            //clear previous html div
            document.getElementById('main').innerHTML = "";
            //get random beer from JSON
            axios.get('https://api.punkapi.com/v2/beers/random')
                .then(response => {
                //put response data in const variable
                const randomBeer = response.data[0];

                let beer = createClassInstances(randomBeer);
                
                beer.appendToPage();
                })       
            });

    var element = document.getElementById("1");
    element.addEventListener('click', function() {
            console.log(1);
            //clear previous html div
            document.getElementById('main').innerHTML = "";
            //get random beer from JSON
            axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=6')
                .then(response => {
                //put response data in const variable
                const beers = response.data;

            for(let singleBeer of beers) {
                
                let beer = createClassInstances(singleBeer);
                
                beer.appendToPage();
            }

            const singleBeer = response.data[0];
      
            });

    var element = document.getElementById("2");
    element.addEventListener('click', function() {
            console.log(2);
            //clear previous html div
            document.getElementById('main').innerHTML = "";
            //get random beer from JSON
            axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=6')
                .then(response => {
                //put response data in const variable
                const beers = response.data;

            for(let singleBeer of beers) {
                
                let beer = createClassInstances(singleBeer);
                
                beer.appendToPage();
            }

            const singleBeer = response.data[0];
      
            });
        })
        var element = document.getElementById("3");
    element.addEventListener('click', function() {
            //clear previous html div
            document.getElementById('main').innerHTML = "";
            //get random beer from JSON
            axios.get('https://api.punkapi.com/v2/beers?page=3&per_page=6')
                .then(response => {
                //put response data in const variable
                const beers = response.data;

            for(let singleBeer of beers) {
                
                let beer = createClassInstances(singleBeer);
                
                beer.appendToPage();
            }

            const singleBeer = response.data[0];
      
            });
        })
        var element = document.getElementById("4");
    element.addEventListener('click', function() {
            //clear previous html div
            document.getElementById('main').innerHTML = "";
            //get random beer from JSON
            axios.get('https://api.punkapi.com/v2/beers?page=4&per_page=6')
                .then(response => {
                //put response data in const variable
                const beers = response.data;

            for(let singleBeer of beers) {
                
                let beer = createClassInstances(singleBeer);
                
                beer.appendToPage();
            }

            const singleBeer = response.data[0];
      
            });
        })
        var element = document.getElementById("5");
    element.addEventListener('click', function() {
            //clear previous html div
            document.getElementById('main').innerHTML = "";
            //get random beer from JSON
            axios.get('https://api.punkapi.com/v2/beers?page=5&per_page=6')
                .then(response => {
                //put response data in const variable
                const beers = response.data;

            for(let singleBeer of beers) {
                
                let beer = createClassInstances(singleBeer);
                
                beer.appendToPage();
            }

            const singleBeer = response.data[0];
      
            });
        })
    })
