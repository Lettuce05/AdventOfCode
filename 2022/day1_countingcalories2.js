const ReadLines = require('n-readlines')
const calorieLines = new ReadLines('./countingcalories_data.txt');

let line;
let maxCalories = [0, 0, 0];
let calorieCount = 0;
while (line = calorieLines.next()) {
  line = line.toString('ascii').trim();
  if (line) {
    calorieCount += Number(line);
  } else {
    for (max in maxCalories) {
      if (calorieCount > maxCalories[max]) {
        maxCalories.splice(max, 0, calorieCount);
        maxCalories.pop()
        break;
      }
    }
    calorieCount = 0;
  }
}
console.log(maxCalories[0] + maxCalories[1] + maxCalories[2]);