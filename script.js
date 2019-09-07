var have = 1000000;
var played = 0;

function play() {
    var good = Math.floor(Math.random() * 2);
    have = Math.ceil(have * (0.75 + good * 0.55));
    played++;
    document.getElementById('have').value = have;
    document.getElementById('played').value = played;
}
