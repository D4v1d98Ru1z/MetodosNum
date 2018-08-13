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
            form.setAttribute("id", "generated"+x);
            document.getElementById("inputs").appendChild(form);
        }
        document.getElementById("start").style.display = "block";
    }

}

//procedimiento con inputs generados 
function process(){
    var data = parseInt(document.getElementById("email").value);
    var promedio = 0;
    var newData;
    console.log("calculandoo wuuu c: "+ data);
    for(var i = 0; i < data; i++){
        newData = parseInt(document.getElementById("generated"+i).value);      
        promedio = promedio + newData;        
    }
    var total = promedio / data;
    document.getElementById("Vpromedio").innerHTML = " " +total;
    document.getElementById("box2").style.display = "flex";
    
}