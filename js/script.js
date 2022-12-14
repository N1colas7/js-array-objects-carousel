// Creiamo l'array di oggetti
let oggetti = [
    {
        img : "01.webp",
        title : "Spiderman Miles Morales",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
    {
        img : "02.webp",
        title : "Rachet & Clank",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
    {
        img : "03.webp",
        title : "Fortnite",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
    {
        img : "04.webp",
        title : "A misterious cat",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
    {
        img : "05.webp",
        title : "Marvel Avengers",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque harum non suscipit natus aliquid."
    },
]

// Aggiungiamo le immagini, il titolo, e il testo tramite js
const itemsContent = document.getElementById('bigImage')

for(let i = 0; i < oggetti.length; i++){
    itemsContent.innerHTML += `
        <img src="./img/${oggetti[i].img}" width="200px"/>
        <h3>${oggetti[i].title}</h3>
        <p>${oggetti[i].text}</p>
        `
    }
