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

let objectId = 0;

function showSlide(){
    let principalImage = document.getElementById("bigImage");
    principalImage.innerHTML=`
    <img class="image_size" src="./img/${oggetti[objectId].img}" alt="">
    <p>${oggetti[objectId].title}</p>
    <p>${oggetti[objectId].text}</p>`
}
showSlide();

// Aggiungiamo le immagini, il titolo, e il testo tramite js
const itemsContent = document.getElementById('containerLittleImage')

for(let i = 0; i < oggetti.length; i++){
    itemsContent.innerHTML += `
        <img src="./img/${oggetti[i].img}" width="250px" height="116px"/>
        `
    }

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
    
next.addEventListener('click', function(){
    if(objectId == 4){
        objectId = 0
        showSlide()
    }else{
        objectId++
        showSlide()
    }
    console.log("successivo " + objectId + " " + oggetti[objectId].img)
});
prev.addEventListener('click', function(){
    if(objectId == 0){
        objectId = 4
        showSlide()
    }else{
        objectId = objectId -1
        showSlide()
    }
    console.log("successivo " + objectId + " " + oggetti[objectId].img)
})


