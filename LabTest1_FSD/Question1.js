//Question 1: ES6 Features

const lowerCaseWords = (function(mixedArray){
    
    return new Promise((function(resolve, reject){
      if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
       
        const filteredStrArray = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
        
        const lowerCaseStrings = filteredStrArray.map((eachItemOfFilterArr) =>
          eachItemOfFilterArr.toLowerCase()
        );
        resolve(lowerCaseStrings);
      } else {
        reject("Invalid array");
      } 
    }));
  });
  
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  
  lowerCaseWords(mixedArray)
    .then(function(value)
    {
      console.log(value)
    }
    )
    .catch(function(error)
    {
      console.log(error)
    }
    );


