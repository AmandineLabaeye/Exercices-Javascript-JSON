var Date = new Date();

function ajaxRequest(Ville) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var Obj = this.responseText;

            console.log(Obj);

            var Meteo = JSON.parse(Obj);

            document.getElementById("Nom").innerHTML = "Meteo pour : " + Meteo["name"];

            document.getElementById("Degres").innerHTML = Meteo.main["temp"] + "°";

            document.getElementById("Min").innerHTML = "Temp. min: " + Meteo.main["temp_min"] + "°";

            document.getElementById("Max").innerHTML = "Temp. max: " + Meteo.main["temp_max"] + "°";

            document.getElementById("Atmospherique").innerHTML = "Pres. atmospherique: " + Meteo.main["pressure"] + "Hp";

            document.getElementById("Vent").innerHTML = "Vitesse du vent: " + Meteo.wind["speed"] + "Km/h";

            document.getElementById("Humidite").innerHTML = "Humidité: " + Meteo.main["humidity"] + "%";

            document.getElementById("longitude").innerHTML = "Longitude: " + Meteo.coord["lon"];

            document.getElementById("Latitude").innerHTML = "Latitude: " + Meteo.coord["lat"];

            document.getElementById("Date").innerHTML = Date.getDate() + "-" + Date.getMonth() + 1 + "-" + Date.getFullYear();

            document.getElementById("Ville").value = "";

        }

    };

    xhttp.open("GET", "exercice.php?ville=" + Ville, true);

    xhttp.send();

}

document.getElementById('Valider').addEventListener('click', function () {

    let Ville = document.getElementById("Ville").value;

    if (Ville !== "") {

        ajaxRequest(Ville);

        document.getElementById("Erreur").innerHTML = "";

    } else {

        document.getElementById("Erreur").innerHTML = "<span>Erreur</span>";

    }


});
