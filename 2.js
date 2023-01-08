let x = 12;
let key = typeof x;
console.log(typeof x);
switch (key) {
  case "number":
    console.log('x - число');
    break;

  case "string":
    console.log('x - строка');
    break;

  case "boolean":
    console.log('x - логическое значение');
    break;

  default:
    console.log('Тип x не определён');
    break;
}