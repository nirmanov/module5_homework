let arr = [];
for (let i = 1; i < 11; i++) {
  arr.push(Math.floor(Math.random()*100))
}
console.log('Arr length:', arr.length);
for (let key of arr) {
  console.log(key);
}