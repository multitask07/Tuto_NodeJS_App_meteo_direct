var http = require('http');

var ville_zip = "07160,fr";

var request = http.get("http://api.openweathermap.org/data/2.5/weather?zip="+ ville_zip, function(reponse){ //recupere la valeur du temps sur l'api de notre site et affichera celui de notre variable ville_zip
// on ne selectionne qu'une seul valeur de notre fichier json ici la ligne de la valeur 'statusCode' =200 si ok
     console.log(reponse.statusCode);

     reponse.on('data', function (chunk) { // recuperation des données en portions, découpés (chunk)
        console.log('BODY: ' + chunk); 
     });  
});     