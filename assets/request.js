// const key = '41b24ea98e45ba3ef80d26f39bf2e510  fdc7b4ced04102cb4702a4a296bfec5ef5477d6f'


const requestCharacter = async(character) => {

    const baseURL =
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${character}&ts=1&apikey=41b24ea98e45ba3ef80d26f39bf2e510&hash=db0b049a5ee957a225cacedc6e478190`;
    const response = await fetch(baseURL);
    const info = await response.json();

    return info.data.results
};

const requestSeries = async(character) => {

    const baseURL =
        `https://gateway.marvel.com/v1/public/series?titleStartsWith=${character}&ts=1&apikey=41b24ea98e45ba3ef80d26f39bf2e510&hash=db0b049a5ee957a225cacedc6e478190`;
    const response = await fetch(baseURL);
    const info = await response.json();
    console.log(info)
     return info.data.results 
};

const requestComicsShoop = async() => {

    const baseURL =
        `https://gateway.marvel.com/v1/public/comics?format=digital%20comic&limit=100&offset=33&ts=1&apikey=41b24ea98e45ba3ef80d26f39bf2e510&hash=db0b049a5ee957a225cacedc6e478190`;
    const response = await fetch(baseURL);
    const info = await response.json();
    const baseURL2 =
        `https://gateway.marvel.com/v1/public/comics?format=digital%20comic&limit=100&offset=130&ts=1&apikey=41b24ea98e45ba3ef80d26f39bf2e510&hash=db0b049a5ee957a225cacedc6e478190`;
        const response2 = await fetch(baseURL2);
        const info2 = await response2.json();
    datax = info.data.results.filter(comic => comic.images.length !== 0)
    datax2 =  info2.data.results.filter(comic => comic.images.length !== 0)
    Totalcomix = [...datax, ...datax2]



     const splitProducts = () => {
        let dividedComics = [];
        for (let i = 0; i < Totalcomix.length; i += 14) {
            dividedComics.push(Totalcomix.slice(i, i + 14));
        }
        const indexTotal = dividedComics.length
        return {dividedComics,indexTotal, Totalcomix}
    }
    
    return splitProducts()
}

/* // Para hacer la paginacion de Ver Más
// Usamos el array de productos y lo dividimos en arrays de size elementos
const splitProducts = size => {
    let dividedProducts = [];
    for (let i = 0; i < productsData.length; i += size) {
      dividedProducts.push(productsData.slice(i, i + size));
    }
    return dividedProducts;
  };
  
  // Funcion para dividir los productos en arrays de 6 y manejar la paginacion
  const productsController = {
    dividedProducts: splitProducts(6),
    nextProductsIndex: 1,
    productsLimit: splitProducts(6).length,
  }; */


  "http://marvel.com/comics/issue/99708/marvel_action_spider-man_2021_5?&ts=1&apikey=41b24ea98e45ba3ef80d26f39bf2e510&hash=db0b049a5ee957a225cacedc6e478190utm_campaign=apiRef&utm_source=41b24ea98e45ba3ef80d26f39bf2e510"





requestComicsCharacter = async(comic) => {
    
    if (comic.comics.items.length > 0) {
  
    let urls = comic.comics.items
  
    urls = urls.slice(0,9);
    
    const finalUrl = urls.map(url =>
        url.resourceURI + '?limit=9&ts=1&apikey=41b24ea98e45ba3ef80d26f39bf2e510&hash=db0b049a5ee957a225cacedc6e478190'

    )
    const responses = await Promise.all(finalUrl.map(url => fetch(url)))
    
    return responses
    } 
        
}
