let arttitre = document.getElementById("title");
let cartategorie = document.getElementById("category");
let articlecontent = document.getElementById("content");
let artauteur = document.getElementById("author");
let artannuler = document.getElementById("cancelbtn");
let seltionimg = document.getElementById("image")
let formelt = document.querySelector("form")
let articleFile = document.getElementById("file")
//let data = new FormData(formelt)

formelt.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(formelt);

    fetch("http://localhost:5000/article/register", {
        body: data,
        method: 'POST',
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
});


/* seltionimg.addEventListener("change", (e) =>{
    console.log(e.target.image[0])
}) */
/* let personnage = {nom: "kossi", age : 52, valid: true}
console.log(personnage)
let stringifypersonnage = JSON.stringify(personnage)
console.log(stringifypersonnage)
let parseSP = JSON.parse(stringifypersonnage)
console.log(parseSP) */

/* let myData = {
        title: arttitre.value,
        category: cartategorie.value,
        content: articlecontent.value,
        image: seltionimg.value,
        author: artauteur.value,
    } */