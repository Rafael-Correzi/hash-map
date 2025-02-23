class HashMap {
  constructor(loadFactor) {
    this.loadFactor = loadFactor;
    this.arr = [];
    this.#createLinkedLists();
  }

  capacity = 16;
  population = 0;

  #createLinkedLists() {
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
    if (this.population > this.capacity * this.loadFactor) {
      let oldMax = this.capacity * this.loadFactor;
      let entriesCopy = this.entries;
      this.capacity = this.capacity * 2;
      this.population = 0;
      this.#createLinkedLists();
      for (let i = 0; i <= oldMax; i++) {
        this.set(entriesCopy[i][0], entriesCopy[i][1]);
      } 
    }
    let hashCode = this.hash(key);
    if (this.arr[hashCode].size != 0) {
      if (this.arr[hashCode].contains(key)) {
        this.arr[hashCode].updateKey(key, value);
      }
      else {
        this.arr[hashCode].append(key, value);
        this.population++;
      }
    }
    else {
      this.arr[hashCode].append(key, value);
      this.population++;
    }
  }

  get(key) {
    let hashCode = this.hash(key);
    if (this.arr[hashCode].size != 0) {
      return this.arr[hashCode].find(key)
    }
    else return null;
  }

  has(key) {
    let hashCode = this.hash(key);
    if (this.arr[hashCode].size != 0) {
      return this.arr[hashCode].contains(key)
    }
    else return false;
  }

  remove(key) {
    let hashCode = this.hash(key);
    if (this.arr[hashCode].size != 0) {
      if (this.arr[hashCode].remove(key)) {
        this.population--;
      };
    }
  }

  clear() {
    this.#createLinkedLists();
  }

  get length() {
    return this.population;
  }

  get keys() {
    let arrKeys = [];
    for (let i = 0; i < this.capacity; i++) {
      let arr = this.arr[i].show("key");
      arrKeys = arrKeys.concat(arr);
    }
    return arrKeys;
  }

  get values() {
    let arrValues = [];
    for (let i = 0; i < this.capacity; i++) {
      let arr = this.arr[i].show("value");
      arrValues = arrValues.concat(arr);
    }
    return arrValues;
  }

  get entries() {
    let arrEntries = [];
    for (let i = 0; i < this.capacity; i++) {
      let arr = this.arr[i].entries;
      arrEntries = arrEntries.concat(arr);
    }
    return arrEntries;
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
    this.tail.nextNode = null;
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

  show(keyOrValue) {
    let arr = [];
    let current = this.head;
    while (current != null) {
      arr.push(current[keyOrValue]);
      current = current.nextNode;
    }
    return arr;
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

  remove(key) {
    let current = this.head;
    let previous = null;
    do {
      if (current.key === key) {
        if (previous === null) {
          this.head = current.nextNode;
        }
        else {
          previous.nextNode = current.nextNode;
        }
        if (this.tail === current) {
          this.tail = current.nextNode;
        }

        this.nodeCount--;
        return true;
      }
      previous = current;
      current = current.nextNode;
    } while (current != null);
    return false;
  }

  get size() {
    return this.nodeCount;
  }

  get entries() {
    let arr = [];
    let current = this.head;
    while (current != null) {
      let entryPair = [current.key, current.value];
      arr.push(entryPair);
      current = current.nextNode;
    }
    return arr;
  }
}

class Node {
  constructor (key, value) {
    this.key = key;
    this.value = value;
  }

}


let a = new HashMap(0.75);
a.set("luke", 2001);
a.set("luke", 2005);
console.log(a.get("luke"));
console.log(a.get("luka"));
console.log(a.has("luke"));
console.log(a.has("luka"));
for (let i = 1; i <= 1000; i++) {
  a.set(`luke${i}`, 2000 + i - 1);
}
a.remove("luke");
console.log(a.length);
console.log(a.keys);
console.log(a.values);
console.log(a.entries);
console.log(a.get("luke324"));
console.log(a);