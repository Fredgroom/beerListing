



class Beer {
        constructor(img_url, name, description, abv, ibu, pH) {
            const beer = response.data;
            const singleBeer = response.data[0];
            const img = singleBeer.image_url;
            const name = singleBeer.name;
            const description = singleBeer.description;
            const abv = singleBeer.abv;
            const ibu = singleBeer.ibu;
            const pH = singleBeer.ph;
        }