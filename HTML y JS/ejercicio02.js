function resultado() {
    var r1, r2, r3, r4, nota;

    if (document.getElementById('2').checked == true) {
        r1 = 1
    } else {
        r1 = 0
    }
    if (document.getElementById('7').checked == true) {
        r2 = 1
    } else {
        r2 = 0
    }

    if (document.getElementById('10').checked == true) {
        r3 = 1
    } else {
        r3 = 0
    }
    if (document.getElementById('15').checked == true) {
        r4 = 1
    } else {
        r4 = 0
    }
    nota = r1 + r2 + r3 + r4;
    document.getElementById('resultado').innerHTML = "Aciertos: " + nota;

    if (rs == false) {
        document.forms[0].reset();
        location.reload()
    }

}