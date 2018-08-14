//captura datos y crea nuevos inputs 
function dataShow() {
    var data = document.getElementById("email").value;

    if (data != 0) {
        document.getElementById("box").style.display = "none";
        document.getElementById("but").style.display = "none";
        for (var x = 0; x < data; x++) {
            var form = document.createElement("INPUT");
            form.setAttribute("type", "number");
            form.setAttribute("placeholder", "Ingrese valor.");
            form.setAttribute("id", "generated" + x);
            document.getElementById("inputs").appendChild(form);
        }
        document.getElementById("start").style.display = "block";
    }

}

//procedimiento con inputs generados 
function process() {
    var data = parseInt(document.getElementById("email").value);
    var promedio = 0;
    var newData;
    var sumatoria = 0;
    var incertidumbreA;
    var valor = [];
    //array = 9     1    2      3    4      5     6     7     8      9
    var student = [12.7, 4.30, 3.18, 2.78, 2.57, 2.23, 2.08, 2.02, 1.96];
    for (var i = 0; i < data; i++) {
        newData = parseInt(document.getElementById("generated" + i).value);
        promedio = promedio + newData;
        valor[i]= newData;
    }
    
    var total = promedio / data;
    //Incertidumbre aleatoria
    //varianza
    for (var a = 0; a < data; a++) {
        newData = parseInt(document.getElementById("generated" + a).value);
        sumatoria = sumatoria + (Math.pow((newData - total), 2));

    }
    var varianza = Math.sqrt(sumatoria / (data - 1));
    //student
    if (data == 2) {
        incertidumbreA = student[student.length - 9] * (varianza / (Math.sqrt(data, 2)));
        document.getElementById("Vincertidumbre").innerHTML = " " + incertidumbreA;

    }
    if (data == 3) {
        incertidumbreA = student[student.length - 8] * (varianza / (Math.sqrt(data, 2)));
        document.getElementById("Vincertidumbre").innerHTML = " " + incertidumbreA;

    }
    if (data == 4) {
        incertidumbreA = student[student.length - 7] * (varianza / (Math.sqrt(data, 2)));
        document.getElementById("Vincertidumbre").innerHTML = " " + incertidumbreA;

    }
    if (data == 5) {
        incertidumbreA = student[student.length - 6] * (varianza / (Math.sqrt(data, 2)));
        document.getElementById("Vincertidumbre").innerHTML = " " + incertidumbreA;
    }

    //Es
    var menor = Math.min.apply(null, valor);
    var Es =  total / menor;
    document.getElementById("VEs").innerHTML = " " + Es;

    document.getElementById("Vpromedio").innerHTML = " " + total;
    document.getElementById("box2").style.display = "flex";

}