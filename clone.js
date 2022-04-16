const body = document.body;
body.style.backgroundColor = 'white';

const button = document.createElement ('button');
button.innerHTML = '影分身';
button.style.position = 'absolute';
button.style.top = '50%';
button.style.left = '50%';
button.style.borderRadius = '2px';
button.style.fontSize = '20px'; 
button.style.backgroundColor = 'white';
button.style.borderColor = 'black';
button.style.color ='black';
button.setAttribute ('id', 'main')

body.appendChild (button);

function randomColor () {
    return Math.floor (Math.random()*255 + 1);
}

function createShadowButton1 (_class, top, left) {
    const buttonShadow = document.createElement ('button');
    buttonShadow.innerHTML = '影分身';
    buttonShadow.style.position = 'absolute';
    buttonShadow.style.top = top;
    buttonShadow.style.left = left;
    buttonShadow.style.borderRadius = '2px';
    buttonShadow.style.fontSize = '20px';
    buttonShadow.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    buttonShadow.style.borderColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    buttonShadow.style.zIndex = '-1';
    buttonShadow.setAttribute ('class', _class);
    body.appendChild (buttonShadow);
}

button.addEventListener ('mouseover', () => {
    createShadowButton1 ('back', '50.2%', '50.2%');
    createShadowButton1 ('back', '49.8%', '49.8%');
    createShadowButton1 ('back', '50.2%', '49.8%');
    createShadowButton1 ('back', '49.8%', '50.2%');
    button.addEventListener ('mouseout', () => {
        document.querySelectorAll ('.back').forEach (elem => elem.remove());
    })
})

button.addEventListener ('click', ()=> {
    let startingTop = '50%';
    let startingleft = '50%';
    setInterval (()=> {
        startingTop = Number (startingTop.replace('%', '')) + 0.2 + '%';
        createShadowButton1 ('back', startingTop, startingleft);
    }, 100)

})

button.addEventListener ('click', ()=> {
    let startingTop = '50%';
    let startingleft = '50%';
    setInterval (()=> {
        startingTop = Number (startingTop.replace('%', '')) - 0.2 + '%';
        createShadowButton1 ('back', startingTop, startingleft);
    }, 100)

})


button.addEventListener ('click', ()=> {
    let startingTop = '50%';
    let startingleft = '50%';
    setInterval (()=> {
        startingleft = Number (startingleft.replace('%', '')) + 0.2 + '%';
        createShadowButton1 ('back', startingTop, startingleft);
    }, 100)

})

button.addEventListener ('click', ()=> {
    let startingTop = '50%';
    let startingleft = '50%';
    setInterval (()=> {
        startingleft = Number (startingleft.replace('%', '')) - 0.2 + '%';
        createShadowButton1 ('back', startingTop, startingleft);
    }, 100)
})

button.addEventListener ('click', ()=> {
    let startingTop = '50%';
    let startingleft = '50%';
    setInterval (()=> {
        startingTop = Number (startingTop.replace('%', '')) + 0.2 + '%';
        startingleft = Number (startingleft.replace('%', '')) + 0.2 + '%';
        createShadowButton1 ('back', startingTop, startingleft);
    }, 100)
})

button.addEventListener ('click', ()=> {
    let startingTop = '50%';
    let startingleft = '50%';
    setInterval (()=> {
        startingTop = Number (startingTop.replace('%', '')) - 0.2 + '%';
        startingleft = Number (startingleft.replace('%', '')) - 0.2 + '%';
        createShadowButton1 ('back', startingTop, startingleft);
    }, 100)
})

button.addEventListener ('click', ()=> {
    let startingTop = '50%';
    let startingleft = '50%';
    setInterval (()=> {
        startingTop = Number (startingTop.replace('%', '')) + 0.2 + '%';
        startingleft = Number (startingleft.replace('%', '')) - 0.2 + '%';
        createShadowButton1 ('back', startingTop, startingleft);
    }, 100)
})

button.addEventListener ('click', ()=> {

    let startingTop = '50%';
    let startingleft = '50%';

    setInterval (()=> {
        startingTop = Number (startingTop.replace('%', '')) - 0.2 + '%';
        startingleft = Number (startingleft.replace('%', '')) + 0.2 + '%';
        createShadowButton1 ('back', startingTop, startingleft);
    }, 100)
})