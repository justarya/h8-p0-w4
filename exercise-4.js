function cariModus(arr) {
  // you can only write your code here!

  let count = {};//deklarasi count dalam bntk object
  for(let i=0;i<arr.length;i++){//hitung number paling banyak dan dimasukan kedalam object
    let key = arr[i];
    if(count[key]){
      count[key]++;
    }else{
      count[key] = 1;
    }
  }
  
  let i = 0;//untuk menghitung object
  let sum = [0,0]; // [number,sum]
  for(let c in count){ // looping berdasaran key dalam object count
    if(Object.values(count)[i] > sum[1]){//jika value dari key ini lebih besar dari pada sebelumnya 
      sum[0] = Object.keys(count)[i]; // masukan key ke array sebelumnya(sum)
      sum[1] = Object.values(count)[i]; // masukan value ke array sebelumnya(sum)
    }
    i++; //tambah index
  }

  if(sum[1] === arr.length){ //jika semua value array hanya sama semua(tidak ada value lain)
    return -1;//tidak ada modus
  }else{
    // hitung jika ada modus atau tidak
    let isModus = 0; //indikasi modus, jika lebih dari 0 maka ada modus
    let j = 0; //untuk menghitung object
    for(let c in count){//
      Object.values(count)[j] === 1?isModus:isModus++;//jika number hanya ada 1 maka bukan syarat modus jika iya, dihitung
      j++; //tambah index
    }
    if(isModus > 0){//jika lebih dari 0 maka ada modus
      return sum[0];//hasil modus
    }else{
      return -1; //tdk ada modus
    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1