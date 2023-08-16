
/*Count the Stars! APP - DomDk*/

let container = document.querySelector('.allStars');
const newImage = document.createElement('img');
const baseURL = 'images/';
const baseFxURL = 'soundfx/';
const startOverButton = document.querySelector('.startOver');
const nextButton = document.querySelector('.next');
const title = document.querySelector('.title');
const title2 = document.createElement('h2');
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
            title2.innerHTML = "";
            newImage.src = `${baseURL}${count}.png`;
            star.appendChild(newImage);
            container.append(star);
            nextButton.innerText = (count);
        }
    }
})



startOverButton.addEventListener('click', function () {
    count = 0;
    container.innerHTML = "";

    container.append(title2);
    title2.classList.add('title');
    title2.innerHTML = "Lets count again!";

    nextButton.innerHTML = "Count Again";

    const countAgain = new Audio('soundfx/count_again.wav');
    countAgain.play();


})

