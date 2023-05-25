function luas() {

    var sisi = document.getElementById("sisi-luas").value;
    if (isNaN(sisi) || sisi == "") {
        alert("Input sisi belum benar, tolong jangan di kosongi dan di isi angka saja!");
        return;
    }
    var luas;
    luas = sisi * sisi;
    document.getElementById("output_luas").innerHTML = "L = S x S <br> L = " + sisi + " x " + sisi + "<br> L = " + luas;


}
function keliling() {
    var sisi = document.getElementById("sisi-keliling").value;
    if (isNaN(sisi) || sisi == "") {
        alert("Input sisi belum benar, tolong jangan di kosongi dan di isi angka saja!");
        return;
    }
    var keliling;
    keliling = sisi * 4;
    document.getElementById("output_keliling").innerHTML = "K = S x 4 <br> K = " + sisi + " x 4" + "<br> L = " + keliling;
}

function reset() {
    document.getElementById("output_luas").innerHTML = "";
    document.getElementById("output_keliling").innerHTML = "";
}