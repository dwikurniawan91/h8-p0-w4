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
        var obj = {};
        for(let k=0;k<students.length;k++){
            if(students[k].score > 75){
                obj.name = students[k].name;
                obj.score = students[k].score;
            }
            kelas.push(obj);
        }
        
        res[clroom[j].class] = kelas;
    }
    console.log(res);
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