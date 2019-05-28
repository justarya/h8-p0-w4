function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let arr = [];//store array
  for (let i = 1; i<=angka; i++) { //looping untuk mendapatkan angka perkalian
    if(angka%i === 0){
      let alreadyAssign = false;
      for(let j=0;j<arr.length;j++){ // looping untuk mengetahui apakah perkalian ini sudah ada atau belum
        if(arr[j].indexOf(i) !== -1){
          alreadyAssign = true;
        }
      }
      if(!alreadyAssign){ //jika perkalian belum masuk maka akan dimasukan ke array
        arr.push([]);
        arr[arr.length-1].push(i);
        arr[arr.length-1].push(angka/i);
      }
    }
  }

  // mencari jumlah minimum
  let sum = 0; // untuk store jumlah minimum angka perkalian
  let tempSum; // untuk penyimpanan sementara pengganti sum
  for (let i = 0;i < arr.length;i++) {
    tempSum = arr[i][0].toString().length + arr[i][1].toString().length;  // penjumlahan length angka perkalian
    if(sum === 0 || sum>tempSum){//jika sum masih 0 (masih looping pertama) atau sum lebih besar dari pada tempSum
      sum = tempSum;
    }
  }
  return sum;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2