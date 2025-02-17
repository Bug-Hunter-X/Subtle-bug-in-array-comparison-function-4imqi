function compareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false; 
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; 
    }
  }
  return true;
}

function compareArraysImproved(arr1: number[], arr2: number[]): boolean {
  if (arr1.length === 0 && arr2.length ===0){
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false; 
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; 
    }
  }
  return true;
}
console.log(compareArraysImproved([1,2,3],[1,2,3])); //true
console.log(compareArraysImproved([1,2,3],[1,2,4])); //false
console.log(compareArraysImproved([1,2,3],[1,2,3,4]));//false
console.log(compareArraysImproved([],[1,2,3]));//false
console.log(compareArraysImproved([],[]));//true