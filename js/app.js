// Lightbox plugin

window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});

// Search function
function handleInput(e) {
    console.log(e.currentTarget.value);
    // let filter = e.currentTarget.value.toLowerCase();
    // console.log(`this is filtered: ${filter}`);
}

const input = document.querySelector('#searchfield');
const caption = document.querySelectorAll('a');
const img = document.querySelector('img');

input.addEventListener('keyup', handleInput);

// const searchHandler = caption.forEach(element => {
//     const value = element.getAttribute('data-caption');
//     // console.log(value.toLowerCase());
//     console.log(element);

//     if (!value.toLowerCase().includes(filter) && filter !== '') {
//         element.style.display = 'none';
//     } else {
//         console.log(element.getAttribute('href'));
//     }
// });