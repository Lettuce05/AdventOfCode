const ReadLines = require('n-readlines')
const calorieLines = new ReadLines('./countingcalories_data.txt');

let line;
let maxCalories = 0;
let calorieCount = 0;
while (line = calorieLines.next()) {
  line = line.toString('ascii').trim();
  if (line) {
    calorieCount += Number(line);
  } else {
    maxCalories = calorieCount > maxCalories ? calorieCount : maxCalories;
    calorieCount = 0;
  }
}

console.log(maxCalories);