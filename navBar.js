function myFunction() {
    var x = document.getElementById("myTopnav");
    var m = document.getElementById("main");
    if (x.className === "topnav" || m.className === "main") {
        x.className += " responsive";
        m.className += " responsive";
    } else {
        x.className = "topnav";
        m.className = " main";
    }
}

if (screen.width < 728) {
    function leiaMais() {
        var pontos = document.getElementById("pontos");
        var maisTexto = document.getElementById("mais");
        var btn = document.getElementById("btnLeiaMais");

        if (pontos.style.display === "none") {
            pontos.style.display = "inline";
            maisTexto.style.display = "none";
            btn.innerHTML = "Leia Mais";
        } else {
            pontos.style.display = "none";
            maisTexto.style.display = "inline";
            btn.innerHTML = "Leia Menos";
        }
    }

    function leiaMais1() {
        var pontos = document.getElementById("pontos1");
        var maisTexto = document.getElementById("mais1");
        var btn = document.getElementById("btnLeiaMais1");

        if (pontos.style.display === "none") {
            pontos.style.display = "inline";
            maisTexto.style.display = "none";
            btn.innerHTML = "Leia Mais";
        } else {
            pontos.style.display = "none";
            maisTexto.style.display = "inline";
            btn.innerHTML = "Leia Menos";
        }
    }
}