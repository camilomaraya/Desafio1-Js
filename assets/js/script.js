function calcular(){
    var ctd = document.getElementById("cantidad").value;
    console.log(ctd)
    var vlr = document.getElementById("valor").getAttribute("value");
    var clr = document.getElementById("color").value;
    parseInt(ctd)
    parseInt(vlr)
    var total = ctd*vlr
    document.getElementById("total").innerHTML = total.toLocaleString();
    document.getElementById("cantidadT").innerHTML = ctd;
    document.getElementById("color-final").style.backgroundColor = clr
}