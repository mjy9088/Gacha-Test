var have = 1000000;
var played = 0;

var win = 0, lose = 0;

function play() {
    var good = Math.floor(Math.random() * 2);
    var prev = have;
    have = Math.ceil(have * (0.75 + good * 0.55));
    played++;
    document.getElementById('have').value = have;
    document.getElementById('played').value = played;
    var log = document.getElementById('log');
    log.value = played + ' : ' + (good ? 'WIN! (' + ++win + '/' + lose + '' : 'LOSE (' + win + '/' + ++lose + '') + ') ' + prev + ' -> ' + have + '\n' + log.value;
}
