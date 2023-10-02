array = [1,5,2,6,3]

for(var i = 0; i < array.length; i++){
  for(var j = 0; j < array.length-i;j++){
      if (array[j] > array[j+1]){
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
  }
}
console.log(array)