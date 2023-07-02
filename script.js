function laskeAika() {
    var kelloInput = document.getElementById("kello").value;
    var minuutitInput = document.getElementById("minuutit").value;

    var KellonSplittaus = kelloInput.split(".");
    var tunnit = parseInt(KellonSplittaus[0]);
    var minuutit = parseInt(KellonSplittaus[1]);

    var minuutitYhteensa = tunnit * 60 + minuutit;

    var lisatutMinuutit = parseInt(minuutitInput);

    var uusiAikaMinuuteissa = minuutitYhteensa + lisatutMinuutit;

    var uudetTunnit = Math.floor(uusiAikaMinuuteissa / 60) % 24;
    var uudetMinuutit = uusiAikaMinuuteissa % 60;

    var uusiAika = uudetTunnit.toString().padStart(2, "0") + ":" + uudetMinuutit.toString().padStart(2, "0");

    document.getElementById("tulos").innerHTML = "Uusi aika: " + uusiAika;
}
