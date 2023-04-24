function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr[pivotIndex];
    var left = [];
    var right = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  function quickSort3Way(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr[pivotIndex];
    var left = [];
    var equal = [];
    var right = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] === pivot) {
        equal.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort3Way(left).concat(equal, quickSort3Way(right));
  }
  


  var arr = [30,4,-1, 35, 23,45,12,8]
  var result = quickSort(arr)
  console.log(result)

  var arr2 = [30,4,-1, 35, 23,45,12,8, 35, 4, 23, 4, 55, 23]
  console.time()
  var result2 = quickSort(arr2)
  console.timeEnd()
  console.log(result2)

  console.time()
  var result3 = quickSort3Way(arr2)
  console.timeEnd()
  console.log(result3)