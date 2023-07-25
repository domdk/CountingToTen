// var reveal = document.getElementById('star');

// reveal.addEventListener('click', function (reveal) {
//     reveal.target.classList.toggle('one');

// })

const container = document.querySelector('#star1');
const newImage = document.createElement('img');
const baseURL = '/images/'
const startOverButton = document.querySelector('#startOver');
const nextButton = document.querySelector('#next');
// newImage.src = 'images/star.png';



// for (let i = 1; i <= 10; i++) {
//     const star = document.createElement('div');
//     const newImage = document.createElement('img');
//     newImage.src = `${baseURL}${i}.png`;
//     star.appendChild(newImage);
//     container.append(star);
// }

nextButton.addEventListener('click', function () {
    for (let i = 1; i <= 1; i++) {
        const star = document.createElement('div');
        const newImage = document.createElement('img');
        newImage.src = `${baseURL}${i}.png`;
        star.appendChild(newImage);
        container.append(star);
    }
})


startOverButton.addEventListener('click', function () {

    newImage.src = `${baseURL}1.png`;
})