let testNumber = +prompt('Введите значение');
if (!isNaN(testNumber) && typeof testNumber == "number") {
  let even = testNumber % 2;
  switch (even) {
    case 0:
      alert('Четное число')
      break;

    case 1:
      alert('Нечетное число')
      break;
  }
} else {
  alert("Упс, кажется вы ошиблись");
}