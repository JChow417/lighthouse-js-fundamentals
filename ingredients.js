var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counterWhile = 0;
while (counterWhile < ingredients.length){
  console.log(ingredients[counterWhile]);
  counterWhile++;
}

// Write a for loop that prints out the contents of ingredients:
for (var counterFor = 0; counterFor < ingredients.length; counterFor++){
  console.log(ingredients[counterFor]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var counterBackwards = ingredients.length - 1; counterBackwards >= 0; counterBackwards--){
  console.log(ingredients[counterBackwards]);
}
