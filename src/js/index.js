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
        //change the page depends on API url -- pagination
function changePage(page) {

    document.getElementById('main').innerHTML = "";
    
    axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=6`)

        //done() = .then(function(response)){} =
        .then(response => {

            let beerData = response.data; //console.log(beerData);

            for (let value of beerData) {

                if (beerData.length) {

                    let beer = createClassInstances(beerData);

                    beer.addToPage();
                }
            }
        })
        //fail()
        .catch(function(error) {
            console.log(error);
        });
    }

changePage(1); //for opening page

        var element = document.getElementById('')

        function onLoad() {
            document.getElementById('main').innerHTML = "";

            axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=6')
            .then(response => {
            //define data within the console
            const beers = response.data;
            //iterate through array and append to screen
            for(let singleBeer of beers) {
                //create class
                let beer = createClassInstances(singleBeer);
                //create html and append to page
                beer.appendToPage();
            }
            phColor();
            const singleBeer = response.data[0];
        
    });
        };
        onLoad();
        //create class instances
        function createClassInstances(singleBeer) {
            const img = singleBeer.image_url;
            const name = singleBeer.name;
            const description = singleBeer.description;
            const abv = singleBeer.abv;
            const ibu = singleBeer.ibu;
            const ph = singleBeer.ph;

            console.log(Beer);

            let beer = new Beer(img, name, description, abv, ibu, ph);
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
                
                beer.appendRandomToPage();                
                phColor();
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
            phColor();
            const singleBeer = response.data[0];
      
            });
        })
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
            phColor();
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
            phColor();
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
            phColor();
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
            phColor();
            const singleBeer = response.data[0];
      
            });
        })

        function phColor() {
            let elements = document.getElementsByClassName('ph');
            for (var i = 0; i < elements.length; i++) {
                console.log(elements[i]);
                if (elements[i].innerText < 4.6) { 
                    elements[i].style.backgroundColor="#FBBA00"
            } else if (4.6 <= elements[i].innerText <= 5.4) {
                    elements[i].style.backgroundColor="#DF932C"
            } else if (5.4 <= elements[i].innerText <= 5.8) {
                elements[i].style.backgroundColor="#D96A38"
            } else {
                elements[i].style.backgroundColor="#9E2C1D"
            }
        }
        
        var element = document.getElementById("home");
    element.addEventListener('click', function() {
            onLoad();
    });
}