class HashMap {
  constructor() {
    this.arr = [];
    this.createLinkedLists();
  }

  LOADFACTOR = 0.8;
  capacity = 16;

  createLinkedLists() {
    for (let i = 0; i < this.capacity; i++) {
      this.arr[i] = new LinkedList;
    }
  }

  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
 
    return hashCode;
    
  } 

  set(key, value) {
    let hashCode = this.hash(key);
    if (this.arr[hashCode].size != 0) {
      console.log(this.arr)
      if (this.arr[hashCode].contains(key)) {
        this.arr[hashCode].updateKey(key, value);
      }
      else this.arr[hashCode].append(key, value);
    }
    else this.arr[hashCode].append(key, value);
  }

  get(key) {
    let hashCode = this.hash(key);
    return this.arr[hashCode].find(key)
  }
}

class LinkedList {
  constructor() {

  }

  head = null;
  tail = null;
  nodeCount = 0;

  append(key, value) {
    let temp =  new Node(key, value);
    if (this.head === null) {
      this.head = temp;
      this.tail = temp;
    }
    else {
      this.tail.nextNode = temp;
      this.tail = temp;   
    }
    this.nodeCount++;
  }


  contains(key) {
    let current = this.head;
    do {
      if (current.key === key) {
        return true;
      }
      current = current.nextNode;
    } while (current != null);
    return false;
  }

  get size() {
    return this.nodeCount;
  }

  updateKey(key, value) {
    let current = this.head;
    do {
      if (current.key === key) {
        current.value = value;
        return;
      }
      current = current.nextNode;
    } while (current != null);
    return false;
  }

  find(key) {
    let current = this.head; 
    do {
      if (current.key === key) {
        return current.value;
      }
      current = current.nextNode;
    } while (current != null);
    return null;
  } 
}

class Node {
  constructor (key, value) {
    this.key = key;
    this.value = value;
  }

  
}


let a = new HashMap();
a.set("luke", 2001);
a.set("luke", 2005);
console.log(a.get("luke"));
console.log(a);