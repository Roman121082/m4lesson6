'use strict';

const getAverageValue = (allCashbox) => {
  let sumCashbox = 0;

  for (let i = 0; i < allCashbox.length; i++) {
    sumCashbox += allCashbox[i];
  };

  return sumCashbox / allCashbox.length;
};

console.log(`средний чек: ${getAverageValue([4500, 3210, 650, 1250, 7830, 990, 13900, 370])}`);