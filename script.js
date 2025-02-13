let element = document.querySelector('h1');

element.onmouseover = function() {
    // Generate a light random color so the black text still has contrast
    let randomColor = '#' + (Math.floor(Math.random() * 0x7FFFFF) + 0x808080).toString(16).padStart(6, '0');
    element.style.backgroundColor = randomColor;
};

document.querySelectorAll('.wave-image').forEach((img, index) => {
    img.style.setProperty('--i', index);
});


