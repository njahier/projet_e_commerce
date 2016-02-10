function afficher_fiche(){
    var i = urlParams.idarticle;
    if (i >= 0){
    catalogue;
    var elementDiv = document.getElementById("divimage");
    var elementImg = document.getElementById("photo");
    elementImg.src = catalogue[i].photo;
    elementDiv.appendChild(elementImg);
    var elementTitre = document.getElementById("titre");
    elementTitre.innerHTML = catalogue[i].titre;
    var elementDescription = document.getElementById("description");
    elementDescription.innerHTML = catalogue[i].description;
    var elementPrix = document.getElementById("prix");
    elementPrix.innerHTML = catalogue[i].prix;

}

}
