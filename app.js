var http = require('http');


var ville_zip = "07320,fr"; //attibut une adresse à notre variable 'ville_zip'

//******************crétion de nos fonctions /objets***************
function printMessage(ville_zip, ville_select, temperature, pression){ //fonction d'affichage des valeurs qui valeurs qui suivent
    //console.log(main.statusCode);
    console.log("Au code postal "+ville_zip + " à "+ville_select +", la temperature est de " +(temperature-273.15).toFixed(2)+ "°C et la pression est de "+ pression +" hpascals"); // toFixed ->arrondit à 2 chiffres après la virgule
}

function printError(error){   //fonction qui affiche les erreurs eventuelles
    console.error(error.message);
}

//**************************début du GET *****************************
var request = http.get("http://api.openweathermap.org/data/2.5/weather?zip="+ ville_zip, function(reponse){ //recupere la valeur du temps sur l'api de notre site et affichera celui indiqué par notre variable ville_zip qui determine l'adresse où sonder les valeurs
     var body = ""; // nouvelle variable body qui va accueillir nos données

     // recuperation des données en portions, découpés (chunk)
     reponse.on('data', function (chunk) { 
        body += chunk; //incremente le préfixe body à nos données valides 
     });

     // détection de la fin des instructions {fin du fichier} JSON ->end 
     reponse.on('end', function () {
        //********gere la traduction du résultat recupéré en ligne et des erreurs de saisie, ou traitement eventuelles*********
        if (reponse.statusCode === 200){ // on ne selectionne qu'une seul valeur de notre fichier json ici la ligne de la valeur 'statusCode' =200 si ok
            try{                         //faire, essayer d'executer la suite
                var data_meteorologique = JSON.parse(body); //traduction de la variable body en fichier Json, & enregistrement de celle-ci dans une nouvelle variable type 'objet' ->data_meteorologique
                printMessage(ville_zip, data_meteorologique.name, data_meteorologique.main.temp, data_meteorologique.main.pressure); //appel de notre fonction 'printMessage' et recupération des 4 valeurs (la premiere_que nous lui donnons =>ville_zip )& les 3 suivantes venant de notre objet Json 'data_meteorologique' de type clef:valeur; 
            }catch(error){              //si le parse n'arrive pas a s-executer faire ce qui suit {affiche le mess d'erreur}
                console.error(error.message);
                }
        }else{
          printError({ message: "erreur,impossible de recuperer les informations"});  //utilisation de la fonction printError()
        }
     });
});  //fin get