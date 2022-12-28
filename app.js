
function random() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    
    if (isNaN(min) || isNaN(max)) {
      document.getElementById('result').innerHTML = 'Porfavor insira números válidos nos campos "De" e "Até" para que possa  ser sorteado. ';
      return;
    }
    
    if (min >= max) {
      document.getElementById('result').innerHTML = 'O campo "De" deve ser menor que "Até"';
      return;
    }
    
    var sortedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById('result').innerHTML = 'O numero sorteado  foi: ' + sortedNumber.toString();

  }
