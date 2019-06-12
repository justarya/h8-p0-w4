function shoppingTime(memberId, money) {
  // you can only write your code here!
  var priceList = {
    SepatuStacattu: 1500000,
    BajuZoro: 500000,
    BajuHnN: 250000,
    SweaterUniklooh: 175000,
    CasingHandphone: 50000
  }
  var obj = {
    memberId: memberId,
    money: money,
    listPurchased:[],
    changeMoney: 0,
  };

  if(memberId === undefined || memberId === ''){
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }else if(memberId !== ''){
    if(money >= 50000){
      if(money >= priceList.SepatuStacattu){
        money -= priceList.SepatuStacattu;
        obj.listPurchased.push('Sepatu Stacattu');
      }
      if(money >= priceList.BajuZoro){
        money -= priceList.BajuZoro;
        obj.listPurchased.push('Baju Zoro');
      }
      if(money >= priceList.BajuHnN){
        money -= priceList.BajuHnN;
        obj.listPurchased.push('Baju H&N');
      }
      if(money >= priceList.SweaterUniklooh){
        money -= priceList.SweaterUniklooh;
        obj.listPurchased.push('Sweater Uniklooh');
      }
      if(money >= priceList.CasingHandphone){
        money -= priceList.CasingHandphone;
        obj.listPurchased.push('Casing Handphone');
      }
      obj.changeMoney = money;
      return obj;
    }else{
      return 'Mohon maaf, uang tidak cukup';
    }
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja