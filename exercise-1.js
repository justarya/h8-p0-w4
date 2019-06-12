function angkaPrima(angka) {
  // you can only write your code here!
  var isPrima = 0;
  if(angka % 2 === 0 && angka !== 2 || angka === 1){
    isPrima++;
  }else{
    for (let i = 2; i < angka; i++) {
      if(angka % i === 0){
        isPrima++;
      }
    }
  }
  if(isPrima === 0){
    return true;
  }else{
    return false;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false