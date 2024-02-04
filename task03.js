'use strict';

const addPrefix = (names, prefix) => {
  let prefixNames
  for (let i = 0; i < names.length; i++) {
    prefixNames = prefix + names[i];

    return prefixNames;
  };
}



console.log(`Результат функции: ${addPrefix(['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'], 'Mr ')}`);
