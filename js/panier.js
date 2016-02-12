function afficherPanier() {
  panier = JSON.parse(sessionStorage.panierSauvegarde);
  var elementPanier = document.getElementById("panier");

  for (var i = 0; i < panier.length; i++) {

    var elementTr = document.createElement("tr");
    var elementTdProduit = document.createElement("td");
    var elementTdTaille = document.createElement("td");
    var elementTdQuantite = document.createElement("td");
    var elementTdPrix = document.createElement("td");
    var elementImg = document.createElement("img");
    var elementH4 = document.createElement("h4");
    var elementInput = document.createElement("input");

    elementImg.src = catalogue[panier[i].id].photo;
    elementH4.innerHTML = catalogue[panier[i].id].titre;
    elementTdTaille.innerHTML = panier[i].taille;
    elementInput.type = "number";
    elementInput.value = panier[i].quantite;
    elementTdPrix.innerHTML = catalogue[panier[i].id].prix + " €";

    elementTdProduit.appendChild(elementImg);
    elementTdProduit.appendChild(elementH4);
    elementTdQuantite.appendChild(elementInput);
    elementTr.appendChild(elementTdProduit);
    elementTr.appendChild(elementTdTaille);
    elementTr.appendChild(elementTdQuantite);
    elementTr.appendChild(elementTdPrix);
    elementPanier.appendChild(elementTr);
  }
}
