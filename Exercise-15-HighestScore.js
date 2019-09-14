function highestScore (students) {
    var res = {};
    var classes = []

  //define classs
      for(let j=0;j<students.length;j++){
        let classname = students[j].class;
          if(classes.includes(classname)){
            continue;
          }else{
            classes.push(classname);
          }
        }
    
        //define scores
        //looping through classes.length
        for(let k=0;k<classes.length;k++){
          let highestScore=0;         //declare variable
          let objStudents={};
          
          for(let l=0;l<students.length;l++){   //Looping through students.length
            //cek if classes[k] is equal to students class[l] and score > highest score
            if(classes[k] == students[l].class && students[l].score > highestScore){
              let score = students[l].score;
              highestScore = score;
              //add key and value to objStudents
              objStudents.name = students[l].name;
              objStudents.score = score;
            }
            //append class and objStudents to res
            res[classes[k]] = objStudents;
          }
        }
    console.log('---------------------------- ');
   return res;
        
  }

  // ['foxes','wolves']
  // looping kelas, kemudian jika object kelas = kelas[i], dicari high score nya
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
  