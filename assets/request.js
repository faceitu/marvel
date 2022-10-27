// const key = '41b24ea98e45ba3ef80d26f39bf2e510  fdc7b4ced04102cb4702a4a296bfec5ef5477d6f'



const requestCity = async(character) => {

    const baseURL =
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${character}&ts=1&apikey=41b24ea98e45ba3ef80d26f39bf2e510&hash=db0b049a5ee957a225cacedc6e478190`;
    const response = await fetch(baseURL);
    const info = await response.json();
    console.log(info.data.results)

    return info;
};

requestCity();