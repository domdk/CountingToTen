
/*Count the Stars! APP - DomDk*/





let container = document.querySelector('.allStars');
const newImage = document.createElement('img');
const baseURL = 'https://domdk.github.io/CountingToTen/images/';
const baseFxURL = 'https://domdk.github.io/CountingToTen/soundfx/';
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
    nextButton.innerHTML = "Count";
    const countAgain = new Audio('https://domdk.github.io/CountingToTen/soundfx/count_again.wav');
    countAgain.play();
})


let nightSky = document.querySelector('.nightSky');

function createStars(size) {
    // let starCount = 20;

    // let i = 0;
    // while (i < starCount) {
    //     let star = document.createElement('div');
    //     star.classList.add('.starDiv');
    //     let x = Math.floor(Math.random() * 10);
    //     let h = Math.floor(Math.random() * 1);

    //     star.style.left = x + 'px';
    //     star.style.width = 1 + 'px';
    //     style.style.height = h + 'px';

    //     nightSky.append(star);
    //     i++;


    let star = document.createElement('div');
    star.classList.add('starDiv');

    let size = Math.floor(Math.random() * 5) + 1;
    // star.classList.add(`blink_${randRange5}`);

    let widthAndHeight = random(size, 'px');
    star.style.height = star.style.width = widthAndHeight;

    star.style.left = random(window.innerWidth, 'px');
    star.style.top = random(window.innerHeight, 'px');

    nightSky.append(star);
}
// return stars();


function paintStars(stars, size) {
    for (let i = 0; i < stars; i++) {
        createStars(size);
    }
}

paintStars(50, size);