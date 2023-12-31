const minimum = (arr: number[][]) => {
  let result = Number.POSITIVE_INFINITY;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      result = min(result, arr, x, y);
    }
  }
  return result;
}

const min = (result: number, arr: number[][], x: number, y: number) => {
  if (result > arr[x][y]) {
    return arr[x][y];
  }
}


const sum = (arr: number[]): number => {
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

const average = (arr: number[]): number => {
  return sum(arr) / arr.length;
}


const isPrime = (n: number): boolean => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const reportPrimes = (n: number) => {
  for (let i = 2; i < n; i++) {
    reportIfPrime(i);
  }
}

const reportIfPrime = (n: number) => {
  if (isPrime(n)) {
    console.log(`${n} is prime`);
  }
}

reportPrimes(30);