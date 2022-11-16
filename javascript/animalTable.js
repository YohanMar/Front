const animal1 = new Animal("images/cheetah", "Guépard", "Le guépard (Acinonyx jubatus) est un grand mammifère carnassier de la famille des félidés vivant en Afrique et en Asie de l'Ouest. Le guépard a une allure svelte et fine, avec de longues pattes élancées (aux griffes semi-rétractiles ou non-rétractiles selon les sources), et une face au museau court marquée par deux traces noires partant des yeux. Son pelage est entièrement tacheté de noir sur un fond fauve à beige très clair ; les petits sont pourvus d'une courte crinière qui disparaît à l'âge adulte. Il est considéré comme l'animal terrestre le plus rapide au monde, sa vitesse à la course pouvant atteindre 112 km/h.", "Egypte");
const animal2 = new Animal("images/hyene", "Hyène", "Les hyènes (du grec ancien ὕαινα / hýaina) forment la famille des hyénidés (Hyaenidae), des carnivores terrestres. Bien que la hyène ressemble à un gros chien, elle n'appartient pas au sous-ordre Caniformia mais à celui des Feliformia. Elle est connue pour son cri ressemblant à un rire désagréable qui signifie qu'elle a trouvé de la nourriture.", "Afrique du nord");
const animal3 = new Animal("images/index", "Lion", "Le Lion (Panthera leo) est une espèce de mammifères carnivores de la famille des Félidés. La femelle du lion est la lionne, son petit est le lionceau. Le mâle adulte, aisément reconnaissable à son importante crinière, accuse une masse moyenne qui peut être variable selon les zones géographiques où il se trouve, allant de 145 à 180 kg pour les lions d'Asie à plus de 225 kg pour les lions d'Afrique.Certains spécimens très rares peuvent dépasser exceptionnellement 300 kg. Un mâle adulte se nourrit de 7 kg de viande chaque jour contre 5 kg chez la femelle. Le lion est un animal grégaire, c'est-à-dire qu'il vit en larges groupes familiaux, contrairement aux autres félins. Son espérance de vie, à l'état sauvage, est comprise entre 7 et 12 ans pour le mâle et 14 à 20 ans pour la femelle, mais il dépasse fréquemment les 30 ans en captivité.", "Afrique centrale");
const animal4 = new Animal("images/ourspol", "Ours polaire", "L'ours blanc (Ursus maritimus), aussi connu sous le nom d'ours polaire, est un grand mammifère omnivore (à prédominance carnivore) originaire de l'Arctique. C'est, avec l'ours kodiak et l'éléphant de mer, l'un des plus grands carnivores terrestres et il figure au sommet de sa pyramide alimentaire.", "Antarctique");

var animaux = [animal1, animal2, animal3, animal4]

function createTable() {
  if(document.getElementsByTagName("table").length == 0){
    var headers = ["Image", "Nom", "Description", "Pays Natal"];
    var table = document.createElement("table");  //makes a table element for the page

    for(var i = 0; i < animaux.length; i++) {
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = "<img src='"+animaux[i].urlImage+".jpg'>"
        row.insertCell(1).innerHTML = animaux[i].nom;
        row.insertCell(2).innerHTML = animaux[i].description;
        row.insertCell(3).innerHTML = animaux[i].paysNatal;
    }
  
    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }
    document.body.append(table);
  }else{

  }

}

  