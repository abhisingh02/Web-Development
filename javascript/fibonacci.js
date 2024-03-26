function fibonacciGenerator(number) {
    var output = [];
    var sum = 0;
    for(var i = 1; i <= number; i++) {    
      if(i===2) {
        sum = 1;
      }   
      else if (i > 2) {
        sum = output[i-3]+sum;
      }         
      output.push(sum);
    }
    return output;
  }
  
  alert(fibonacciGenerator(10));