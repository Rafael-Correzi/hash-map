class HashMap {
  constructor() {
    
  }

  const LOADFACTOR = 0.8;
  let capacity = 16;

  function hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
 
    return hashCode;
    
  } 

  function set(key, value) {

  }
}

class LinkedList {
  constructor() {

  }

  head = null;
  tail = null;

  append(node) {
    if (head === null) {
      this.head = new Node(node);
    }
    else {
      this.tail = new Node(node);
    }
  }
}

class Node {
  constructor(node) {
    this.node = node;
  }
}