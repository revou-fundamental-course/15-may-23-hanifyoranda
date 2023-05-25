function luas() {

    var sisi = document.getElementById("sisi").value;
    if (isNaN(sisi) || sisi == "") {
        alert("Input sisi belum benar, tolong jangan di kosongi dan di isi angka saja!");
        return;
    }
    var luas;
    luas = sisi * sisi;
    document.getElementById("hasil").innerHTML = "L = S x S <br> L = " + sisi + " x " + sisi + "<br> L = " + luas;


}
function keliling() {
    var sisi = document.getElementById("sisi").value;
    if (isNaN(sisi) || sisi == "") {
        alert("Input sisi belum benar, tolong jangan di kosongi dan di isi angka saja!");
        return;
    }
    var keliling;
    keliling = sisi * 4;
    document.getElementById("hasil").innerHTML = "K = S x 4 <br> K = " + sisi + " x 4" + "<br> L = " + keliling;
}

function reset() {
    document.getElementById("hasil").innerHTML = "";

}