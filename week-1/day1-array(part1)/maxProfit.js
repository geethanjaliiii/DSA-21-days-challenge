const maxProfit1 = (arr) => {
  let min = Infinity;
  let ind = 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      ind = i;
    }
  }

  for (let j = ind + 1; j < arr.length; j++) {
    if (arr[j] > max) {
      max = arr[j];
    }
  }
  return max - min;
};
console.log(maxProfit1([7, 1, 5, 3, 1, 4]));
const maxProfit = (arr) => {
  let min = Infinity;
  let maxmProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    maxmProfit = arr[i] - min > maxmProfit ? arr[i] - min : maxmProfit;
  }
  return maxmProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
