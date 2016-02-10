var panier = [0, 1, 2, 3];
sessionStorage.setItem("panierEnregistre", JSON.stringify(panier));

function afficherPanier() {
  panier = JSON.parse(sessionStorage.panierEnregistre);
  var elementPanier = document.getElementById("panier");

  for (var i = 0; i < panier.length; i++) {
    var elementTr = document.createElement("tr");
    var elementTdProduit = document.createElement("td");
    var elementTdQuantite = document.createElement("td");
    var elementTdPrix = document.createElement("td");
    var elementImg = document.createElement("img");
    var elementH4 = document.createElement("h4");
    var elementInput = document.createElement("input");

    elementImg.src = catalogue[panier[i]].photo;
    elementH4.innerHTML = catalogue[panier[i]].titre;
    elementInput.type = "number";
    elementInput.value = 1;
    elementTdPrix.innerHTML = catalogue[panier[i]].prix;

    elementTdProduit.appendChild(elementImg);
    elementTdProduit.appendChild(elementH4);
    elementTdQuantite.appendChild(elementInput);
    elementTr.appendChild(elementTdProduit);
    elementTr.appendChild(elementTdQuantite);
    elementTr.appendChild(elementTdPrix);
    elementPanier.appendChild(elementTr);
  }
}
