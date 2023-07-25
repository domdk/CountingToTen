// var reveal = document.getElementById('star');

// reveal.addEventListener('click', function (reveal) {
//     reveal.target.classList.toggle('one');

// })

const container = document.querySelector('#star1');
const newImage = document.createElement('img');
const startOverButton = document.querySelector('#startOver');
const nextButton = document.querySelector('#next');
newImage.src = 'star.png';

container.append(newImage);

newImage.addEventListener('click', function () {
    newImage.src = 'one.png';
})

startOverButton.addEventListener('click', function () {
    newImage.src = 'star.png';
})

nextButton.addEventListener('click', function () {
    alert('next');
})