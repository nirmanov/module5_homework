let arr = ["1", "1", "1", "1", "1"];
let isEqual = arr.every((e) => {
 return e === arr[0];
})
console.log(isEqual);