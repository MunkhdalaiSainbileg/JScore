
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
// reverse4('This is exmaple');
//reverse(12.012);

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  
  set(keyname, value){
    let key = this._hash(keyname);
    if(!this.data[key]){
      this.data[key] = [];
    }
    this.data[key].push([key, value])
    return this.data;
  }
   
  get(keyname){
    const key = this._hash(keyname);
    const currentaddress = this.data[key];
        for(let element of currentaddress){
           if(element.key === key){
             return element.value;
           }
        } 
      return undefined;
      // if(element.key!= undefi && element.key === key){
      //     return element.value;
      // }
      // return '';
    }

}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 45)
myHashTable.set('oranges', 34)
myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')
