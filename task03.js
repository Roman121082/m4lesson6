'use strict';

const addPrefix = (names, prefix) => {
  const prefixNames = names.map(item => (`'${prefix} ${item}'`)).join(', ');

  return prefixNames;
};

console.log(`Результат функции: ${addPrefix(['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'], 'Mr')}`);
