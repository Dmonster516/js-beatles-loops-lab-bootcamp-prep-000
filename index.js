const array1 = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const array2 = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(array1, array2){
  var array = [];
  for (var i=0; i<array1.length-1; i++){
    array.push(array1[i]+' plays '+array2[i]);
    
  }
  return array;
}

function johnLennonFacts(array){
  var newArr = [];
  for (var i=0; i<array.length; i++){
    newArr.push(array[i]+'!!!')
  }
  return newArr;
}

function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push('I love the Beatles')
    n++
  } while (n<15);
  return array;
}