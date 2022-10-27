const btnCharacter = document.querySelector('.btn_option_box');
const boxCharacter = document.querySelector('.option_character');
const heroValue = document.getElementById('heroe_value')







const characterSearch = () => {
    requestCity(heroValue.value)


}



const init = () => {
    btnCharacter.addEventListener('click', characterSearch)
}


init();