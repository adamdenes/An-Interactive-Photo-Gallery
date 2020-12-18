// Lightbox plugin
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});

// Search function
function handleInput(e) {
    searchByChar(captions);
}

function searchByChar(array) {
    for (let i = 0; i < array.length; i++) {
        let caption = array[i].getAttribute('data-caption').toLowerCase();
        let filter = input.value.toLowerCase();

        caption.includes(filter) ? array[i].style.display = 'block' : array[i].style.display = 'none';
    }
}

const input = document.querySelector('#searchfield');
const captions = document.querySelectorAll('a');
const img = document.querySelector('img');

input.addEventListener('keyup', handleInput);