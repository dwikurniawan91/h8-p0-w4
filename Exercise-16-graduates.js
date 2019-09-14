function graduates (students) {
    let res = {};
    let clroom = [];
    //step 1. push nama kelas
    for(let i=0;i<students.length;i++){
        let exist =false;
        for(let j=0;j<clroom.length;j++){
            if(clroom[j]==students[i].class){
               exist = true;
            }
        }if(exist == false){
            clroom.push(students[i].class);
        }
    }   
    for(let j=0;j<clroom.length;j++){
        var kelas = [];
        for(let k=0;k<students.length;k++){
            if(clroom[j] === students[k].class && students[k].score > 75){
                kelas.push({
                    name :students[k].name,
                    score : students[k].score
                });
            }
        }
        
        res[clroom[j]] = kelas;
    }
    return res;
    
}
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }

  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}