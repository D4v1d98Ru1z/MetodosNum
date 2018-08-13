function dataShow() {
    var data = document.getElementById("email").value;

    if (data != 0) {
        document.getElementById("box").style.display = "none";
        console.log(data);
        // document.getElementById("but").style.display = "none";
        for (var x = 0; x < data; x++) {
            console.log(x);
            var form = document.createElement("INPUT");
            form.setAttribute("type", "number");
            form.setAttribute("placeholder", "Type a number");
            document.getElementById("inputs").appendChild(form);
        }
    }
}