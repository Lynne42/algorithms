function getLen(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return 0;
  }

  let num = 0;
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[num] !== arr[i]) {
      num += 1;
      arr[num] = arr[i];
    }
  }
  return num + 1;
}

const array = [1, 3, 3, 4, 4, 4, 6, 7, 7, 8];
const len = getLen(array);
console.log(len);
