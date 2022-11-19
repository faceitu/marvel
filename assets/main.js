


const btnCharacter = document.querySelector('.btn_option_box');
const boxCharacter = document.querySelector('.option_character');
const heroValue = document.getElementById('heroe_value');
const characterBox = document.getElementById('character');
const btnnextCharacter = document.getElementById('next_character')
const btnantCharacter = document.getElementById('ant_character')
const characterComicsBox = document.getElementById('character_comics');
const subBoxCharacter = document.getElementById('sub_box_character');
const btnSearchSerie = document.getElementById('btn_search_serie');
const serieBox = document.getElementById('series');
const serieValue = document.getElementById('serie_value')
const seriesComicsBox = document.getElementById('comics_series');
const subBoxSeries = document.getElementById('sub_box_series');
const shoopContainer = document.getElementById('shoop_container');
const more = document.getElementById('more')
const overlay = document.querySelector('.overlay');
const cartMenu = document.querySelector('.cart');
const btnClose = document.querySelector('.btn_close')
const cartBtn = document.querySelector('.cart_container');
const showItemShoop = document.getElementById('show_item_shoop');
const sellCart = document.getElementById('sell_cart')
const btnnextSerie = document.getElementById('next_serie')
const btnantserie = document.getElementById('ant_serie')
const priceTotal = document.getElementById('price_total')
const counterCart = document.querySelector('.counter_cart')
const remove = document.getElementById('item_show_sell_cart')
const loginIn = document.getElementById('login_in')
const loginOut = document.getElementById('login_out')
const Shoopcart = document.getElementById('Shoopcart')
const navbar = document.getElementById('navbar')
const header = document.getElementById('hamburguesa')
const btnHambur = document.getElementById('btnhambur')
const btnSpider = document.getElementById('btn_spider')
const btnBuy = document.querySelector('.btn_container_cart')








indexCharacter = 0;
totalCharacters = []

indexSeries = 0;
totalSeries = []

dividetotalShoop = [];
indexShoop = 0;
maxIndexShoop = 0;
totalComix = [];
cantCartTotal = 0

let totalCart = JSON.parse(localStorage.getItem("comics")) || []
let user = JSON.parse(localStorage.getItem("user")) || {}

loginIn.textContent = user.name




actualCart = [];
total = 0;



const cantCart = () => {
    let cantCartTotal = totalCart.length 
    return cantCartTotal
}



const renderCharacter = (character, comics) => {
    characterBox.innerHTML = ` 
    <div class = "card_character" >
        <img src="${character.thumbnail.path + "." +  character.thumbnail.extension}" alt="">
        <div class= "character_info">
             <h2>${character.name}</h2>
             <p>${character.description}</p>
             <span>Comics avaible: ${character.comics.available}
        </div>
    </div>
    
    `
}
const renderComics = async(comic,place) => {
    const conjson = await comic.json()
    
    if (place === 1) {
    characterComicsBox.innerHTML += `
      <img src="${conjson.data.results[0].thumbnail.path + "." + conjson.data.results[0].thumbnail.extension}" class = "img_character_comics" alt="" data-id = "${conjson.data.results[0].title}">
     `
    } else {
        console.log('hola')
        seriesComicsBox.innerHTML += `
        <img src="${conjson.data.results[0].thumbnail.path + "." + conjson.data.results[0].thumbnail.extension}" class = "img_character_comics" alt="" data-id = "${conjson.data.results[0].title}">
       `
    }

}


const searchCharacter = async() => {
    if (heroValue.value !== "") {
    characters = await requestCharacter(heroValue.value)
    totalCharacters = characters
    if (totalCharacters.length > 0) {
    btnnextCharacter.classList.remove('disabled')
    btnantCharacter.classList.remove('disabled')
    comics = await requestComicsCharacter(totalCharacters[indexCharacter])
    renderCharacter(totalCharacters[indexCharacter])
    characterComicsBox.classList.remove('hide')
    subBoxCharacter.classList.remove('hide')
    console.log(comics)
    if (comics !== undefined) {
    comics.map(comic => renderComics(comic,1))
}
    heroValue.value = ""
} else alert('Character not Found')
    }
}



const searchnextCharacter = async() => {
    characterComicsBox.innerHTML = ""
    if ((indexCharacter <= totalCharacters.length)  && (totalCharacters.length >=1)){
    indexCharacter = indexCharacter + 1
    renderCharacter(totalCharacters[indexCharacter])
    comics = await requestComicsCharacter(totalCharacters[indexCharacter])
    if (comics !== undefined) {
    comics.map(comic => renderComics(comic,1))
    }
    }
}
const searchantCharacter = () => {
    if (indexCharacter > 0){ 
    indexCharacter = indexCharacter - 1
    renderCharacter(totalCharacters[indexCharacter])
    }

}
const searchantSerie = () => {
    if (indexSeries > 0) { 
    indexSeries = indexSeries - 1
    renderSeries(totalSeries[indexSeries])
    
}

}

const searchSerie  = async() => {
    if (serieValue.value !== "") {
    seriesComicsBox.innerHTML = ""
    series = await requestSeries(serieValue.value)
    totalSeries = series
    if (totalSeries.length > 0) {
        btnnextSerie.classList.remove('disabled')
        btnantserie.classList.remove('disabled')
    comics = await requestComicsCharacter(totalSeries[indexSeries]) 
    renderSeries(totalSeries[indexSeries])
    seriesComicsBox.classList.remove('hide')
    subBoxSeries.classList.remove('hide')
    comics.map(comic => renderComics(comic,2)) 
    serieValue.value = ""
}}
}



const searchnextSerie = async() => {
    seriesComicsBox.innerHTML = ""
    console.log(totalSeries.length)
    if ((indexSeries <= totalSeries.length) && (totalSeries.length >=1)) {
    indexSeries = indexSeries + 1
    
    renderSeries(totalSeries[indexSeries])
    comics = await requestComicsCharacter(totalSeries[indexSeries])
    if (comics !== undefined) {
    comics.map(comic => renderComics(comic,2))
    }
    }
}





const renderSeries = (series, comics) => {
    serieBox.innerHTML = ` 
    <div class = "card_character" >
        <img src="${series.thumbnail.path + "." +  series.thumbnail.extension}" alt="">
        <div class= "character_info">
             <h2>${series.title}</h2>
             <p>${series.description}</p>
             <span>Comics avaible: ${series.comics.available}
        </div>
    </div>
    
    `
}

const renderComicsShoop = (comicsshop) => {
    
shoopContainer.innerHTML += `
<div class = "card_shoop" id = "card_shoop">
        <img src="${comicsshop.thumbnail.path + "." +  comicsshop.thumbnail.extension}" alt="" data-id =${comicsshop.id}>  
        <div>
            <span class = "titlecomics">${comicsshop.title}</span>
        </div>
</div>`

  
}


const loadshoop = async()=> {
    shopComics = await requestComicsShoop()
    totalComicsShoop = shopComics.dividedComics
    maxIndexShoop = shopComics.indexTotal
    totalComicsShoop[0].map(comic => renderComicsShoop(comic))
    totalComics = shopComics. Totalcomix
    dividetotalShoop = totalComicsShoop
    
    
} 

const seeMore = () => {
    indexShoop = indexShoop + 1;
    if (indexShoop < maxIndexShoop) {
         totalComicsShoop[indexShoop].map(comic => renderComicsShoop(comic));
        
    } else 
    {more.classList.add('hide')}
    
   

}

const toggleCart = (carrito) => {
    checkCarrito(carrito);
    cartMenu.classList.remove('hidden');
    cartMenu.classList.toggle('open_cart');
    overlay.classList.toggle('show_overlay');
}


const totalCartprice = (cart) => {
   pTotal = 0
   cart.forEach(prod => pTotal += prod.price)
   return pTotal
   }





const checkCarrito = (carrito) => {

    if (carrito.length === 0) {
        btnBuy.classList.remove('enable_buy', 'btn_buy')
        btnBuy.classList.add('disable_buy')
        sellCart.innerHTML = `<h4 class = "cart_empty">No hay productos en el carrito</h4>`
    } 
}
const renderCompra = (comic) => {
    return `
    <div class = "item_show_sell_cart" style="background: linear-gradient(rgba(14, 14, 15, 0.9), rgba(14, 14, 15, 0.9)), url('${comic.thumbnail.path + "." +comic.thumbnail.extension }')">
       <div class = "img_box_shoop_cart">
                 <img src="${comic.thumbnail.path + "." +  comic.thumbnail.extension}" alt="" class = "img_shoop_cart">   
       </div>
    
       <div class = "info_item_shoop_cart">
           <h3 >${comic.title}</h3>
           <div class ="buy_box_cart">
           <span class= "margin">PRICE: USD ${comic.price}</span>
          
           </div>
       </div>
    </div>
    <a class = "remove_cart" data-id = ${comic.id}>Remove<a/>
   `
}


/* ---------CARRITO------------------------ */
const saveCarrito = (totalCart) => {
    localStorage.setItem('comics', JSON.stringify(totalCart))
}


const renderCarrito = (carrito,price) => {
    sellCart.innerHTML = carrito.map(prod =>
        renderCompra(prod,price)).join('')
}

const closeCart = () => {
    cartMenu.classList.remove('open_cart');
    overlay.classList.remove('show_overlay');
    
};

const closeOnScroll = () => {
    if (!cartMenu.classList.contains('open_cart'))
        return;

    cartMenu.classList.remove('open_cart');
    overlay.classList.remove('show_overlay');
};
/* ---------CARRITO------------------------ */


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

const renderItemShoop = (comic,price)=> {
    actualCart = []
    showItemShoop.classList.add('show')
    Shoopcart.classList.remove('hide')
    Shoopcart.classList.add('tittle_shoop')
    showItemShoop.innerHTML = `
     <div class = "item_show_sell" style="background: linear-gradient(rgba(14, 14, 15, 0.9), rgba(14, 14, 15, 0.9)), url('${comic.thumbnail.path + "." +comic.thumbnail.extension }')">
        <div class = "img_box_shoop">
                  <img src="${comic.thumbnail.path + "." +  comic.thumbnail.extension}" alt="" class = "img_shoop">   
        </div>
        <div class = "info_item_shoop">
            <h1>${comic.title}</h1>
            <div class ="buy_box">
            <p class= "margin">For most of his crime-fighting career, the one and only Amazing Spider-Man has worked on his own—but some jobs are too big even for a wall-crawling, web-slinging wonder like Spidey to handle by himself! Luckily, he’s got a team of technological wonders called the SPIDER-BOTS, who’re equipped with some of the most cutting-edge tech this side of Avengers Tower
            </p>
            <span class= "margin">Format : ${comic.format}</span>
            <span class= "margin">Digital ID : ${comic.digitalId}</span>
            <span class= "margin">PRICE: USD ${price}</span>
            <button class= "btn_buy_item" id = "btn_buy_item"> BUY DIGITAL </button>
            </div>
        </div>
       
     </div>

    `

}

const removeItem = (e) => {
    console.log(e.target.dataset.id)
    if (e.target.localName === "a") {
       
       totalCart =  totalCart.filter(rem => rem.id != e.target.dataset.id)

       renderCarrito(totalCart,actualCart.price)

       saveCarrito(totalCart)
       counterCart.textContent= cantCart()
       priceTotal.textContent = `TOTAL: $ ${totalCartprice(totalCart)}`
       console.log(totalCart)
    }
    
}





const infoShoop = (e)=> {
       const price = getRandomInt(399, 999) 
        Totalcomix.map((comic) => {
        if(e.target.dataset.id == comic.id )   {    
            renderItemShoop(comic,price)
            actualCart = {...comic,price}     
        }
    })
   

     
}
    
const test = (e) => {
 
    if (e.target.localName === "button") {
          if (totalCart.find(exist => exist.id === actualCart.id)) {
                alert('No se puede comprar mas de un ejemplar')

          } else{
           
            totalCart = [...totalCart,actualCart]
            renderCarrito(totalCart,actualCart.price)

            saveCarrito(totalCart)
            alert('Add to cart')
            counterCart.textContent= cantCart()
            priceTotal.textContent = `TOTAL: $ ${totalCartprice(totalCart)}`
              
        
    }

}
}

const logout = () => {
    user = {}
    loginIn.textContent = 'log in'
    localStorage.setItem('user', JSON.stringify(user))

}

const openMenu = ()=> {
    header.classList.toggle('hamburguesa')
    header.classList.toggle('hamburguesa_open')
}
const spiderHead = () => {

    btnSpider.classList.toggle('btn_hambur_close')
    btnSpider.classList.toggle('btn_hambur')
}
const confirmBuy = (e) => {
    console.log(cantCartTotal)
    if (cantCart() !== 0 ){
        if (e.target.localName === "button") {
            alert ('Compra realizada')
            totalCart = [];
            renderCarrito(totalCart,actualCart.price)
            saveCarrito(totalCart)
            cantCartTotal = 0
            priceTotal.textContent = 0
            counterCart.textContent= cantCart()
    } } else {alert ('no hay elementos')}

}

const init = () => {
    if (totalCart.length === 0) {
        counterCart.textContent= 0
        cantCartTotal = 0
    } else {
         counterCart.textContent= cantCart()
    }
    renderCarrito(totalCart,actualCart.price)
     priceTotal.textContent = `TOTAL: $ ${totalCartprice(totalCart)}`
    btnCharacter.addEventListener('click', searchCharacter)
    btnnextCharacter.addEventListener('click', searchnextCharacter)
    btnnextSerie.addEventListener('click', searchnextSerie)
    btnantCharacter.addEventListener('click', searchantCharacter)
    sellCart.addEventListener('click',removeItem)
    btnBuy.addEventListener('click',confirmBuy)
    btnSearchSerie.addEventListener('click',searchSerie )
    more.addEventListener('click', seeMore)
    cartBtn.addEventListener('click', toggleCart);
    btnClose.addEventListener('click', closeCart);
    shoopContainer.addEventListener('click', infoShoop)
    showItemShoop.addEventListener('click', test)
    btnantserie.addEventListener ('click', searchantSerie)
    loginOut.addEventListener('click', logout)
    btnHambur.addEventListener('click',openMenu)
    btnSpider.addEventListener('click',spiderHead)
   
  

    loadshoop()


}


init();


