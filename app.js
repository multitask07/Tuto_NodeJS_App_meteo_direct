var http = require('http');

var ville_zip = "07160,fr";

var request = http.get("http://api.openweathermap.org/data/2.5/weather?zip="+ ville_zip, function(reponse){ //recupere la valeur du temps sur l'api de notre site et affichera celui de notre variable ville_zip
     console.dir(reponse);  // une fois qu'on appel cette requête elle sera toute executé
});