const apiData = {
    url: "https://pokeapi.co/api/v2/",
    type: 'pokemon',
    id: '25',
};

const {url, type, id} = apiData;
const apiUrl = `${url}${type}/${id}`;

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (poke) => generateHtml(poke))

const generateHtml = (data) => {
    console.log(data)
    const html = `
    <div class="name">${data.name}</div>
    <img src="${data.sprites.front_default}>
    <div class="details">
        <span>Height: ${data.height}</span>
    </div>
    <div class="type">${data.types.type.name}</div>`
}