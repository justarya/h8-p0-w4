function checkAB(num) {
  // you can only write your code here!
  let findA = -1;
  let findAB = false;
  for (let i = 0; i < num.length; i++) {
    if(num[i] === 'a' && findA === -1){
      findA = i;
    }else if(num[i] === 'b' && findA !== -1){
      if(i-findA <= 4){
        findAB = true;
      }
    }
    
  }
  return findAB;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false