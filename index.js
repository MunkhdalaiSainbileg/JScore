
function reverse(str){
  
  if(!str || str.length < 2 || typeof str !='string'){
     return 'please, check input';
  }
  
  let items = [];
  let numberOfItem = str.length-1;
  for(let i = numberOfItem; i >= 0; i--){
     items.push(str[i]);
  }
    return items.join('');
}

function reverse2(str){
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');
//
reverse4('This is exmaple');
//reverse(12.012);