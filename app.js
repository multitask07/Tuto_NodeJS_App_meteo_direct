var http = require('http');

var ville_zip = "07160,fr";

function printMessage(ville_zip, temperature, pression){ //fonction d'affichage des valeurs qui valeurs qui suivent
	console.log("Au code postal "+ville_zip + ", la temperatureest de " +(temperature-273.15)+ "°C et la pression est de "+ pression +" bars");

}

var request = http.get("http://api.openweathermap.org/data/2.5/weather?zip="+ ville_zip, function(reponse){ //recupere la valeur du temps sur l'api de notre site et affichera celui de notre variable ville_zip
// on ne selectionne qu'une seul valeur de notre fichier json ici la ligne de la valeur 'statusCode' =200 si ok
     console.log(reponse.statusCode);

     var body = ""; // nouvelle variable body qui va accueillir nos données
// recuperation des données en portions, découpés (chunk)
     reponse.on('data', function (chunk) { 
        body += chunk; //incremente le préfixe body à nos données valides 
     });
// détection de la fin des instructions {fin du fichier} JSON ->end 
     reponse.on('end', function () {
        var data_meteorologique = JSON.parse(body); //traduction de la variable body en fichier Json, & enregistrement de celle-ci dans une nouvelle variable type 'objet' ->data_meteorologique
        printMessage(ville_zip, data_meteorologique.main.temp, data_meteorologique.main.pressure);
     });
});  //fin get