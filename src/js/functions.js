


export default class Beer {
        constructor(img, name, description, abv, ibu, ph) {
            this.img_url = img;
            this.name = name;
            this.description = description;
            this.abv = abv;
            this.ibu = ibu;
            this.ph = ph;
        }


        appendToPage() {
             const container = document.getElementById('main');
            let beerTempor = document.createElement('div');
                beerTempor.setAttribute('class','beer');

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
                phElement.setAttribute('class','data ph')
                phElement.innerText = this.ph;

            console.log(beerTempor);
            beerTempor.appendChild(imgElement);
            beerTempor.appendChild(nameElement);
            beerTempor.appendChild(descriptionElement);
            beerTempor.appendChild(abvElement);
            beerTempor.appendChild(ibuElement);
            beerTempor.appendChild(phElement);
            console.log(phElement);

            container.appendChild(beerTempor);
            console.log(container);
        }

        appendRandomToPage() {
            const container = document.getElementById('main');
            let beerTempor = document.createElement('div');
                beerTempor.setAttribute('class','beer');

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
                phElement.setAttribute('class','data ph')
                phElement.innerText = this.ph;

            console.log(beerTempor);
            beerTempor.appendChild(imgElement);
            beerTempor.appendChild(nameElement);
            beerTempor.appendChild(descriptionElement);
            beerTempor.appendChild(abvElement);
            beerTempor.appendChild(ibuElement);
            beerTempor.appendChild(phElement);
            console.log(phElement);

            container.appendChild(beerTempor);
            console.log(container);
        }
       
    };


    


