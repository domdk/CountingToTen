
/*Count the Stars! APP - DomDk*/

let container = document.querySelector('#allStars');
const newImage = document.createElement('img');
const baseURL = '/images/'
const startOverButton = document.querySelector('#startOver');
const nextButton = document.querySelector('#next');
let count = 0;

// const star1 = document.getElementById('#star1');

// star1.addEventListener('click', function () {
//     let number = document.createElement('p');
//     star1.append(number);
//     number = "1";
// })


nextButton.addEventListener('click', function () {
    for (let i = 1; i <= 1; i++) {

        if (count <= 9) {
            const star = document.createElement('div');
            const newImage = document.createElement('img');
            count++;
            newImage.src = `${baseURL}${count}.png`;
            star.appendChild(newImage);
            container.append(star);
            nextButton.innerText = (count);
        }
    }
})


startOverButton.addEventListener('click', function () {
    container.innerHTML = "";
    nextButton.innerText = "Next";
    count = 0;
})

