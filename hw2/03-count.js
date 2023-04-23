// Add you code here
//source of help:  https://tomekdev.com/posts/highlight-text-in-javascript

let input = document.querySelector('#userinput');

input.addEventListener('keydown', handleKeyDown);


let paragraph = document.querySelector('.form-text');

function handleKeyDown(e){
    const word = e.target.value;
    const regex = new RegExp(word, 'gi');
    let text = paragraph.innerHTML;
    text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
    const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
    paragraph.innerHTML = newText;
}
