function added(x) {
    return function(y) {
      return x + y;
    }
  }
  
  let addNumber = added(2);
  console.log(addNumber(3)); 