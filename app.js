
function random() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    
    if (isNaN(min) || isNaN(max)) {
      document.getElementById('result').innerHTML = 'Please enter valid numbers for the "from" and "to" fields.';
      return;
    }
    
    if (min >= max) {
      document.getElementById('result').innerHTML = 'The "from" field must be less than the "to" field.';
      return;
    }
    
    var sortedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerHTML = sortedNumber.toString();
  }
