function convertBinary() {
  var inputValue = document.getElementById("inputBin");
  var s = inputValue.value;
  
  var soma = 0;

  for(h = 0; h < s.length; h++){
    var char = parseInt(s.charAt(h));
    soma = ((soma * 2) + char);
  }
  
  document.getElementById("inputDec").value = soma;
}