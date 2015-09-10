var http = require('http');

var ville_zip = "07160,fr";

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
        console.log(data_meteorologique); // affiche sur notre console les données réunis valide précédés du préfixe body! de notre variable 'body'
     });
});