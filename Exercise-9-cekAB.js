function checkAB(num) {
    // you can only write your code here!
    var a= ''
    var b= ''
    for(var i=0;i<num.length;i++){
        if(num[i]==='a'){
            a=i;
            console.log(a);
            
        }else if(num[i]==='b'){
            b=i;
        }
    }
    
    return a-b===4||b-a===4;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false