let myMap = new Map([
  ['key', 'prop'],
  ['ke1', 'prop1'],
  [1, true]
  ]);
  
  
  myMap.forEach((value, key) => {
    console.log(`Ключ - ${key}, Значение - ${value}`);
  });