// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const fruits = ['Apple', 'Banana', 'Watermelon', 'Orange'];

const person = { fname: 'John', lname: 'Doe', age: 25 };

// Set Class method: has, add, delete, clear, size, values
class selfImplementSet {
  constructor() {
    this.items = {};
  }

  // This	method	returns	a	boolean indicating	whether	the	object	has	the	specified	property	directly	in	the	object	or not
  has(element) {
    // object1.hasOwnProperty('property1')
    // return this.items.hasOwnProperty(element);
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    // Check if element exist
    if (!this.has(element)) {
      //We	are	adding	the	element	as	the	key	and	value	because	it	will	help	us	search	for	the	element	if	we	store	it	as the	key	as	well.
      this.items[element] = element;
      //	return	true	to	indicate	that	the	element was	added
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    // Object.keys: returns	an array of	all	the	properties of	a	given	object
    return Object.keys(this.items).length;
  }

  sizeLegacy() {
    let count = 0;
    // for...in: loop through the property (key) of Object
    for (let key in this.items) {
      //check	whether	this property	is really	a	property of	our	object, not from prototype chain
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
      return count;
    }
  }

  values() {
    return Object.values(this.items);
  }

  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }

  // union: Given	two	sets,	this returns a new	set	of elements	from both	of the given sets
  union(otherSet) {
    let unionSet = new Set();
    // this = current instance of the Set class
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  // Intersection:	Given	two	sets,	this	returns	a	new	set	with	the	elements	that exist	in	both	sets
  intersection(otherSet) {
    const intersectionSet = new Set();
    this.values().forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  // Difference: Given	two	sets,	this	returns	a	new	set	with	all	the	elements	that exist	in	the	first	set	and	do	not	exist	in	the	second	set
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  // Subset: This	confirms	whether	a	given	set	is	a	subset	of	another	set
  isSubsetOf(otherSet) {
    //A	subset needs to	have	less	or	the	same number	of	elements	as	the	compared	set.
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubset = true;

    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });

    return isSubset;
  }
}

const setA = new Set([1, 2]);
// setA.add(1);
// setA.add(2);
const setB = new Set([1, 2, 3]);
// setB.add(1);
// setB.add(2);
// setB.add(3);

// union
console.log(new Set([...setA, ...setB]));

//intersection
console.log(new Set([...setA].filter((x) => setB.has(x))));

//difference
console.log(new Set([...setA].filter((x) => !setB.has(x))));

// const	setA	=	new	Set();
// setA.add(1);
// setA.add(2);
// const	setB	=	new	Set();
// setB.add(1);
// setB.add(2);
// setB.add(3);
// const	setC	=	new	Set();
// setC.add(2);
// setC.add(3);
// setC.add(4);
// console.log(setA.isSubsetOf(setB));
// console.log(setA.isSubsetOf(setC));

// let use Set Class
// const newSet = new Set()
// newSet.add(1)
// console.log(newSet.values())
// console.log(newSet.has(1))
// console.log(newSet.size())

// newSet.add(2)
// console.log(newSet.values())

// newSet.delete(1)
// console.log(newSet.values())

// const	setA	=	new	Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const	setB	=	new	Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
// const	unionAB	=	setA.union(setB);
// console.log(unionAB.values());

// const	setA	=	new	Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const	setB	=	new	Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// const	intersectionAB	=	setA.intersection(setB);
// console.log(intersectionAB.values());
