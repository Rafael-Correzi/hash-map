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
    if (this.arr[hashCode] != undefined) {
      console.log(this.arr)
      if (this.arr[hashCode].contains(key)) {
        this.arr[hashCode].key = value;
      }
      else this.arr[hashCode].append({key, value});
    }
    else this.arr[hashCode].append({key, value});
  }
}

class LinkedList {
  constructor() {

  }

  head = null;
  tail = null;
  nodeCount = 0;

  append(node) {
    if (this.head === null) {
      this.head = new Node(node);
      this.tail = this.head;
    }
    else {
      let temp = new Node(node);
      this.tail.nextNode = temp;
      this.tail = temp;   
    }
    this.nodeCount++;
  }

  contains(key) {
    let current = this.head;
    do {
      if (key in current) {
        return true;
      }
      current = current.nextNode;
    } while (current != null);
    return false;
  }

  get size() {
    return this.nodeCount;
  }
}

class Node {
  constructor(node) {
    this.node = node;
  }
}

let a = new HashMap();
a.set("luke", 2001);
a.set("luke", 2005);
console.log(a);