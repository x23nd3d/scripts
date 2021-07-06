const input = {
    " ": [5],
    "d": [10],
    "e": [1],
    "H": [0],
    "l": [2, 3, 9],
    "o": [4, 7],
    "r": [8],
    "w": [6],
  };
  
  function buildString(m) {
      return Object.entries(input).map(([key, value]) => {
        let arr = [];
    
         value.forEach(index => {
              return arr[index] = key
           })
    
    return arr;
      })
    }


  console.log(buildString(input));
      
