const body = document.getElementsByTagName('body')[0];
const random = document.getElementById('random');

function setColor(color) {
    body.style.backgroundColor = color;
    random.style.color = color;
}

function RNG(max) {
    return Math.floor(Math.random() * max);
}

random.addEventListener('click', () => {
    const r = RNG(256);
    const g = RNG(256);
    const b = RNG(256);

    const final = `rgb(${r},${g},${b})`;

    console.log(final);
    setColor(final);

    random.style.top = `${RNG(100)}%`;
    random.style.left = `${RNG(100)}%`;
});