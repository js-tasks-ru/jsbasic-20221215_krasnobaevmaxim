function factorial (n) {
  let result = 1;

  for (let i = 0; i < n;) {
    result *= n--;
  }

  return result;
}
