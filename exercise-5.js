function ubahHuruf(kata) {
  // you can only write your code here!
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let word = '';
  for(let i=0;i<kata.length;i++){
    let indexAlphabet = alphabet.indexOf(kata[i]);
    indexAlphabet++;
    word += alphabet[indexAlphabet];
  }
  return word;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu