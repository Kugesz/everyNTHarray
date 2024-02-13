function every(arr, interval, start){
  let a = [];
  for(let i = start || 0; i < arr.length; i+=interval || 1){
      a.push(arr[i]);
  }
  return a;
}
