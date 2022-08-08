const validISBN = (number: string) => { 
    if (!/[0-9]{9}[X0-9]{1}/.test(number)) return false;
    return (number.split('').map((d, i) => d === 'X' ? (10 * (i + 1)) : (d * (i + 1))).reduce((a, b) => a + b) % 11 === 0)
  }