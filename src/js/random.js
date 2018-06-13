

export default class Random {
    constructor(img, name, description, abv, ibu, pH) {
        this.img_url = img;
        this.name = name;
        this.description = description;
        this.abv = abv;
        this.ibu = ibu;
        this.pH = pH;
    }

    appendRandomToPage() {
         let container = document.getElementById('main');
        let beerTempor = document.createElement('div');
            beerTempor.setAttribute('class','Random');

        let imgElement = document.createElement('img');
            imgElement.setAttribute('src',this.img_url);

        let nameElement = document.createElement('h1');
            nameElement.innerText = this.name;

        let descriptionElement = document.createElement('p');
            descriptionElement.innerText = this.description;
        
        let abvElement = document.createElement('div');
            abvElement.setAttribute('class','data')
            abvElement.innerText = this.abv;

        let ibuElement = document.createElement('div');
            ibuElement.setAttribute('class','data')
            ibuElement.innerText = this.ibu;
        
        let phElement = document.createElement('div');
            phElement.setAttribute('class','data pH')
            phElement.innerText = this.pH;

        let ingredientsButton = document.createElement('button');
            ingredientsButton.setAttribute('class','ingredients')
            ingredientsButton.innerText = 'Ingredients';

        console.log(beerTempor);
        beerTempor.appendChild(imgElement);
        beerTempor.appendChild(nameElement);
        beerTempor.appendChild(descriptionElement);
        beerTempor.appendChild(abvElement);
        beerTempor.appendChild(ibuElement);
        beerTempor.appendChild(phElement);
        // beerTempor.appendChild(ingredientsButton);
        container.appendChild(beerTempor);
        console.log(container);
    }
};



