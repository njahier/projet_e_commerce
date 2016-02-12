


// function afficherArticle(){
//   var indiceArticle = urlParams.paramIndice;
//   var article = catalogue[indiceArticle];
//
//   var titre = document.getElementById('titre');
//   titre.innerHTML = article.titre;
//   var description = document.getElementById('description');//id fiche.html
//   description.innerHTML = article.description; //id index.html
//   var photo = document.getElementById('image');
//   photo.src = article.photo;
//   console.log(urlParams);
// }

function afficherCatalogue() {
  var elementCatalogue = document.getElementById('catalogue');

  for (var i = 0; i < catalogue.length; i++) {
    var elementArticle = document.createElement("div");
    elementArticle.className = "article";
    elementCatalogue.appendChild(elementArticle);

    var elementRow = document.createElement("div");
    elementRow.className = "row";
    elementArticle.appendChild(elementRow);

    var elementcolMd = document.createElement("div");
    elementcolMd.className = "col-md-6";
    elementRow.appendChild(elementcolMd);

    var elementImg = document.createElement("img");
    elementImg.src = catalogue[i].photo;
    elementcolMd.appendChild(elementImg);

    var elementcolMd = document.createElement("div");
    elementcolMd.className = "col-md-6";
    elementRow.appendChild(elementcolMd);

    var elementTitre = document.createElement("h3");
    elementTitre.innerHTML = catalogue[i].titre;
    elementRow.appendChild(elementTitre);

    for (var j = 0; j < 5 ; j++) {
      var elementNote = document.createElement("i");
      elementNote.className = "fa fa-reddit-alien";
      elementRow.appendChild(elementNote);
    }
    var elementParagraphe = document.createElement("p");
    elementParagraphe.innerHTML = catalogue[i].description;
    elementRow.appendChild(elementParagraphe);

    var elementPrix = document.createElement("span");
    elementPrix.innerHTML = catalogue[i].prix;
    elementRow.appendChild(elementPrix);

    var elementLink = document.createElement("a");
    elementArticle.appendChild(elementLink);
    elementLink.href = "ficheproduitmodele.html?idarticle="+ i;
    elementLink.innerHTML = "Accéder à la fiche produit";
    elementLink.style.padding="19em";



  }
}
