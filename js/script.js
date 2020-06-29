
var lista = new Array(100);

for (var i = 0; i < lista.lenght; i++) {

  lista.push(i);

  if (i%5==0 && i%3==0) {
    i = "Fizz";
  }else if (i%5==0) {
    i = "Buzz";
  }else if (i%3==0) {
    i = "FizzBuzz";
  }
}

console.log(lista[i]);
