function urutkanAbjad(str) {
  // you can only write your code here!
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let strIndex = [];
  str = str.split("");

  // indexing
  for (let i=0; i<str.length; i++) {
    for(let j=0; j<alphabet.length; j++){
      if(str[i] === alphabet[j]){
        strIndex.push(j);
      }
    }
  }

  // manual sorting
  let done = false;
  while(!done){
    done = true;
    for(let i=1;i<str.length;i++){
      if(strIndex[i-1]>strIndex[i]){
        done = false;
        
        let tempStr,tempStrIndex;
        
        tempStr = str[i-1];
        str[i-1] = str[i];
        str[i] = tempStr;
        
        tempStrIndex = strIndex[i-1];
        strIndex[i-1] = strIndex[i];
        strIndex[i] = tempStrIndex; 
      }
    }
  }
  str = str.join("");
  return str;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'