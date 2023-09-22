const minimum = (arr: number[][]) => {
    let result = Number.POSITIVE_INFINITY;
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            if (result > arr[x][y]) {
                result = arr[x][y];
            }
        }
    }
    return result;
}


const sum = (arr: number[]): number => {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

const average = (arr: number[]): number => {
    return sum(arr) / arr.length;
}

const isPrime = (n: number): boolean => {
    for(let i =2; i <= Math.sqrt(n) ; i++) {
        if(n%i ===0 ) {
            return false;
        }
    }
    return true;
}

const reportPrimes = (n: number) => {
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            console.log(`${i} is prime`);
        }
    }
}

reportPrimes(30);