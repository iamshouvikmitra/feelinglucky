function generate() {
    var luckynum = Math.floor(Math.random() * Math.floor(10));
    document.getElementById('is').style.display = "block";
    document.getElementById('number').innerHTML = luckynum;
}