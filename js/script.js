// Creiamo l'array di oggetti
let oggetti = [
    {
        id : 1,
        img : "01.webp",
        title : "Spiderman Miles Morales",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
    {
        id : 2,
        img : "02.webp",
        title : "Rachet & Clank",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
    {
        id : 3,
        img : "03.webp",
        title : "Fortnite",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
    {
        id : 4,
        img : "04.webp",
        title : "A misterious cat",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
    {
        id : 5,
        img : "05.webp",
        title : "Marvel Avengers",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
]

// Aggiungiamo le immagini, il titolo, e il testo tramite js
const itemsContent = document.getElementById('containerLittleImage')

for(let i = 0; i < oggetti.length; i++){
    itemsContent.innerHTML += `
        <img src="./img/${oggetti[i].img}" width="250px" height="116px"/>
        `
    }
    
let imageCounter = 1;
const first = document.getElementById('imageFirst');
first.src = "/img/0" +  imageCounter + ".webp"
