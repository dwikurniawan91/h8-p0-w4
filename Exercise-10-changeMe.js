function changeMe(arr) {
  // console.log(arr)
  if(arr===undefined ||arr.length===0){
    console.log('');
  }
  else{
  for(var i=0;i<arr.length;i++){
      var data = {};
        for(var j=0;j<arr[i].length+1;j++){
          if(j===0){
              console.log(`${i+1}. ${arr[i][j]} ${arr[i][j+1]}:`);
              data.firstName= arr[i][j];
          }else if(j===1){
              data.lastName=arr[i][j];
          }else if(j===2){
              data.gender=arr[i][j]; 
          }else if(j===3){
              arr[i][j] !== undefined ? data.age = 2019 - arr[i][j] : data.age = 'invalid birthyear';
            
          }
      }
        console.log(data);
  }
}
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); //''