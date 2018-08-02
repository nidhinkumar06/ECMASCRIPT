function addNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

var nums = [1, 2, 4];
// console.log(addNumbers(nums[0], nums[1], nums[2]));

//using spread operator
console.log(addNumbers(...nums));

var foods = ["rice", "wheat"];
var cereals = ["millets", "jowar", "dal"];
cereals.push(...foods);
console.log(cereals);