function printRange(start, end) {
    let current = start;
    let intervalId = setInterval(function() {
      console.log(current);
      current++;
      if (current > end) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  printRange(5, 15);