function ubahHuruf(kata) {
    var abj= 'abcdefghijklmnopqrstuvwxyz'
    var res = ''
    for(var i=0;i<kata.length;i++){
        for(var j=0;j<abj.length;j++){
            if(kata[i]===abj[j]){
                res+=abj[j+1];
            }
        }
    }
    return res;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu