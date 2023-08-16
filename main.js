
/*Count the Stars! APP - DomDk*/

let container = document.querySelector('#allStars');
const newImage = document.createElement('img');
const baseURL = '/images/';
const baseFxURL = '/soundfx/';
const startOverButton = document.querySelector('#startOver');
const nextButton = document.querySelector('#next');
const title = document.querySelector('.title');
let count = 0;

// const star1 = document.getElementById('#star1');

// star1.addEventListener('click', function () {
//     let number = document.createElement('p');
//     star1.append(number);
//     number = "1";
// })


nextButton.addEventListener('click', function () {
    for (let i = 1; i <= 1; i++) {
        ++count;
        if (count <= 10) {
            const star = document.createElement('div');
            const newImage = document.createElement('img');
            const voiceCount = new Audio(`${baseFxURL}${count}.wav`)

            voiceCount.play();
            title.innerHTML = "";
            newImage.src = `${baseURL}${count}.png`;
            star.appendChild(newImage);
            container.append(star);
            nextButton.innerText = (count);
        }
    }
})


startOverButton.addEventListener('click', function () {
    container.innerHTML = "";
    nextButton.innerHTML = "Count Again";
    count = 0;
    title.innerText = "Lets count the stars again!"

})

