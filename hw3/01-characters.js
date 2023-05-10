// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';


const section = document.querySelector('section');

const addCharactersToDOM = (character) =>{
    let figure = document.createElement('figure');
    let image = document.createElement('img');
    let figCaption = document.createElement('figcaption');
    figure.setAttribute('class', 'fig');
    image.width = "200";
    image.height = "200";
    image.alt = `Image ${character.fullName}`;
    image.setAttribute('src', character.imageUrl);
    let fullName = document.createElement('p');
    let title = document.createElement('p');

    fullName.textContent = character.fullName;
    title.textContent = character.title;
    figure.append(image);
    figCaption.append(fullName);
    figCaption.append(title);
    figure.append(figCaption);
    section.append(figure);

    figure.style.margin = '20px'
    section.style.display = 'flex';
    section.style.flexDirection = 'row';
    section.style.flexWrap= 'wrap';
    section.style.alignItems = 'flex-start';
    section.style.margin = '20px';
    
}

const fetchAllCharacters = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                addCharactersToDOM(item);
            });
        })
        .catch ((error) => console.error(error));
};

fetchAllCharacters(url);