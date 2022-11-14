//Fonction d'affichage du menu
function afficheMenu(){
        var main = document.getElementById('nav');
        main.innerHTML = '<div class="navbar">'+ 
        '<a href="#"  onclick="afficheAccueil();" class="active">Accueil</a>'+
        '<div class="dropdown">'+
          '<button class="dropbtn">Espace Personnel<i class="fa fa-caret-down"></i>'+
          '</button>'+
          '<div class="dropdown-content">'+
            '<a href="#">Connexion</a>'+
            '<a href="#">Mes informations</a>'+
            '<a href="#">Messagerie</a>'+
            '<a href="#">Historique</a>'+
          '</div>'+
        '</div>'+
        '<a href="#" onclick="createTable(); ">Animaux</a>'+
        '<a href="#" onclick="afficheVisiteAudio();">Visite Audio</a>'+
        '<a href="#" onclick="afficheVisiteVideo();">Visite Vidéo</a>'+
        '<a href="#" onclick="afficheContact();">Contact</a>'+
        '</div>'
    
}
afficheMenu();

//Fonction affichage de lapage d'accueil
function afficheAccueil(){
var main = document.getElementById('main');
        main.innerHTML = '<div class="container">'+
        '<div class="nom_page"><h2 class="titre">Accueil</h2></div>'+
                      '<p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae illum possimus nisi quisquam cupiditate similique eius veniam explicabo! A quidem, officiis ullam maxime nobis repellendus sunt asperiores officia adipisci.</i></p>'+
                  '</div>'+
                  '<div class="container">'+
                      '<h2 class="titre">Infos pratiques</h2>'+
                      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae illum possimus nisi quisquam cupiditate similique eius veniam explicabo! A quidem, officiis ullam maxime nobis repellendus sunt asperiores officia adipisci.</p>'+
                  '</div>'

}

function afficheContact(){
    var main = document.getElementById('main');
            main.innerHTML = 
            '<div class="container">'+
            '<div class="nom_page"><h2>Contact</h2></div>'+
                '<form action="" method="get" class="form-example">'+
                    '<div class="form-example">'+
                      '<label for="nom">Entrer votre nom: </label>'+
                      '<input type="text" nom="nom" id="nom" required>'+
                    '</div>'+
                    '<div class="form-example">'+
                        '<label for="prenom">Entrer votre Prénom: </label>'+
                        '<input type="text" nom="prenom" id="prenom" required>'+
                      '</div>'+
                    '<div class="form-example">'+
                      '<label for="email">Entrer votre email: </label>'+
                      '<input type="email" nom="email" id="email" required>'+
                    '</div>'+
                    '<div class="form-example">'+
                        '<label for="phone">Entrer votre numéro: </label>'+
                        '<input type="phone" nom="phone" id="phone" required>'+
                    '</div>'+
                    '<textarea rows="4" cols="50" name="comment">'+
                        'Insérer votre message</textarea>'+
                    '<div class="form-example">'+
                      '<input type="submit" value="Envoyer">'+
                    '</div>'+
                  '</form>'+
                  '</div>'

}

function afficheVisiteAudio(){
  var main = document.getElementById('main');
          main.innerHTML = '<div class="container">'+ 
          '<div class="nom_page"><h2>Visite Audio</h2></div>'+
         '<div>'+
              '<div>'+
                  '<figure>'+
                      '<figcaption>Cri du guépard:</figcaption>'+
                      '<audio'+
                          'controls'+
                          'src="./audio/Cheetah2.mp3">'+
                              '<a href="audio/Cheetah2.mp3">'+
                                  'Download audio'+
                              '</a>'+
                      '</audio>'+
                  '</figure>'+
              '</div>'+
          '</br>'+
              '<div>'+
                  '<figure>'+
                      '<figcaption>Cri de la Hyène:</figcaption>'+
                      '<audio'+
                          'controls'+
                          'src="audio/hyena.mp3">'+
                              '<a href="audio/hyena.mp3">'+
                                  'Download audio'+
                              '</a>'+
                      '</audio>'+
                  '</figure>'+
              '</div>'+
          '</br>'+
              '<div>'+
                  '<figure>'+
                      '<figcaption>Cri du lion:</figcaption>'+
                      '<audio'+
                          'controls'+
                          'src="audio/lioncub2.mp3">'+
                              '<a href="audio/lioncub2.mp3">'+
                                  'Download audio'+
                              '</a>'+
                      '</audio>'+
                  '</figure>'+
              '</div>'+
          '</br>'+
              '<div>'+
                  '<figure>'+
                      '<figcaption>Cri de l ours polaire:</figcaption>'+
                      '<audio'+
                          'controls'+
                          'src="audio/bear_polar.mp3">'+
                              '<a href="audio/bear_polar.mp3">'+
                                  'Download audio'+
                              '</a>'+
                      '</audio>'+
                  '</figure>'+
              '</div>'+
          '</div>'+
          '</div>'+
          '</div>'

}

function afficheVisiteVideo(){
  var main = document.getElementById('main');
          main.innerHTML = '<div class="container">'+
          '<div class="nom_page"><h2>Visite Vidéo</h2></div>'+
      '<div>'+
          '<video controls autoplay width="500">'+
              '<source src="video/pexels-shah-jahan-5446310.mp4"'+
                      'type="video/mp4">'+
              'Download the'+
              '<a href="video/pexels-shah-jahan-5446310.mp4">MP4</a>'+
              'video.'+
          '</video>'+
          '<br><br><br>'+
          '<video controls width="500">'+
              '<source src="video/Sneaky Polar Bear.mp4"'+
                      'type="video/mp4">'+
              'Download the'+
              '<a href="video/Sneaky Polar Bear.mp4">MP4</a>'+
              'video.'+
          '</video>'+
      '</div>'+
      '</div>'
  
  }