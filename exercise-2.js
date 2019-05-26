function fpb(angka1, angka2) {
  // you can only write your code here!
  var angkaPrima = [2,3,5,7,11,13,17,19,23,27,29,31,37,41,43,47,53];
  var hasil = [[],[]];
  var loopingCondition;

  // angka1
  loopingCondition = true;
  while(loopingCondition){
    //looping searching for dividing number
    var i = 0;
    while(angka1 % angkaPrima[i] !== 0){
      i++;
    }
    angka1 = angka1/angkaPrima[i];
    hasil[0].push(angkaPrima[i]);
    if(angka1 === 1){
      hasil[0].push(1);
      loopingCondition = false;
    }
  }

  // angka2
  loopingCondition = true;
  while(loopingCondition){
    //looping searching for dividing number
    var j = 0;
    while(angka2 % angkaPrima[j] !== 0){
      j++;
    }
    angka2 = angka2/angkaPrima[j];
    hasil[1].push(angkaPrima[j]);
    if(angka2 === 1){
      hasil[1].push(1);
      loopingCondition = false;
    }
  }

  // searching
  hasil[0].sort(function(value1,value2){return value1>value2;});
  hasil[1].sort(function(value1,value2){return value1>value2;});
  var hasilAngkaTrim = [[],[]];
  for(let x=0;x<2;x++){
    hasilAngkaTrim[x].push(hasil[x][0]);
    for(let k=0;k<hasil[x].length;k++){
      if(hasilAngkaTrim[x][hasilAngkaTrim[x].length-1] !== hasil[x][k]){
        hasilAngkaTrim[x].push(hasil[x][k]);
      }
    }
  }

  // cocokin
  var hasilAngkaMerge = [[],[]]; //variable u/  hasil penggabungan kedua angka 
  for(let l=0;l<2;l++){ //looping kedua angka
    var o = -1; //start index from -1, agar nanti bisa ditambah
    var y;
    l===0?y=1:y=0;
    for(let m=0;m<hasilAngkaTrim[y].length;m++){ //looping per hasil angka1 trim
      for(let n=0;n<hasil[l].length;n++){ // looping per hasil
        if(hasilAngkaTrim[y][m] === hasil[l][n]){//jika hasil angka 1 trim sama dengan hasil awal
          if(o === -1){
            if(hasilAngkaMerge[l].indexOf(hasilAngkaTrim[y][m]) === -1){//jika array belum ada, maka buat baru
              hasilAngkaMerge[l].push([]);
              o++;
            }
          }else{
            if(hasilAngkaMerge[l][o].indexOf(hasilAngkaTrim[y][m]) === -1){//jika array belum ada, maka buat baru
              hasilAngkaMerge[l].push([]);
              o++;
            }
          }
          hasilAngkaMerge[l][o].push(hasil[l][n]);
        }
      }
    }
  }

  var hasilAngkaAkhir = [];
  for(let p=0;p<hasilAngkaMerge[0].length;p++){
    if(hasilAngkaMerge[0][p].length < hasilAngkaMerge[1][p].length){
      for(let q=0;q<hasilAngkaMerge[0][p].length;q++){
        hasilAngkaAkhir.push(hasilAngkaMerge[0][p][q]);
      }
    }else{
      for(let q=0;q<hasilAngkaMerge[1][p].length;q++){
        hasilAngkaAkhir.push(hasilAngkaMerge[1][p][q]);
      }
    }

  }

  var hasilAkhir = 1;
  for(let r=0;r<hasilAngkaAkhir.length;r++){
    hasilAkhir *= hasilAngkaAkhir[r];
  }

  return hasilAkhir;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1