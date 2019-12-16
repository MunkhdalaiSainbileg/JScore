
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
          console.log(element)
           if(element[0] === key){
             return element[1];
           }
        } 
      return undefined;
      // if(element.key!= undefi && element.key === key){
      //     return element.value;
      // }
      // return '';
  }
  

}

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000)
// myHashTable.set('apples', 45)
// myHashTable.set('oranges', 34)
// myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')

const array =[1,2,3,5,2,3];

function checker(paramarray){
  let isfounded = paramarray.length;
  let checked = [];
  for(let i=0; i<isfounded; i++){
    let param = paramarray[i]; 
    if(checked.length >0){
        let found= false;
        for(let k=0; k<checked.length; k++){
          if(param === checked[k]) {
            found = true;
          } 
        }
        if(found){
          return param;
        } else {
          checked.push(param);
        }
    } else {
      checked.push(param);
    }
    console.log(checked);
  }
  return undefined;
}

// checker(array);

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) { 
      const node = {
        value: value,
        next: null
      }
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return this;
    } 

    prepend(value){
      const newNode = {
      value: value,
      next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }

    printList(){
      const array = [];
      let node = this.head;
      while(node!==null){
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }

      let newNode = {
       value: value,
       next: null
      }
      const leaderNode = this.traverseIndex(index-1);
      const followingNode = leaderNode.next;
      newNode.next = followingNode;
      leaderNode.next = leaderNode;
      this.length++;
      return this.printList();
    }
    
    remove(index){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      let leaderNode = this.traverseIndex(index-1);
      const targetedNode = leaderNode.next;
      let followingNode = targetedNode.next;
      leaderNode.next = followingNode;
      this.length--;
      
      return this.printList();
    }
 
    traverseIndex(index){
      let counter =0;
      let currentnode = this.head;
      while(counter!==index){
        currentnode = currentnode.next;
        counter++;
      }
      return currentnode;
    }
    
    reverse(){
      if(this.length ==1){
        return this.head;
      }
      this.tail = this.head;
      let firstNode = this.head;
      let secondNode = this.head.next;
      while (secondNode){
         let temp = secondNode.next;
         secondNode.next = firstNode;
         firstNode = secondNode;
         secondNode = temp;
      }
      this.head.next = null;
      this.head = firstNode;
      return this.printList();
    }
    
   
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(45);
myLinkedList.append(78);
myLinkedList.append(16);
//myLinkedList.printList();
myLinkedList.reverse();



