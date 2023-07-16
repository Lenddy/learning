//empty LinkedList
class LinkedList {
	constructor() {
		// this is the beginning of the linkedList
		this.head = null; // the head is == to null because we don't have a head yet
		this.length = 0; // this will give use the length
	}

	// insert at head method
	insertAtHead(data) {
		const newNode = new LinkedListNode(data, this.head); //creating a new node
		this.head = newNode; // setting the head to be == the new node that was jus created
		this.length++; // increasing the length of the linked list
		// console.log(this.length)
	}
}

//this clase represents the the nodes that are in the linkedList
class LinkedListNode {
	constructor(value, next) {
		this.value = value; //this represents the values that is store in a specific node
		this.next = next; // this represent the next node
	}
}

// module.exports = LinkedList;

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const values = [];

// every node has their value and also a next that is pointing to another node
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d -> null

const printLinkedList = (head) => {
	let current = head;

	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
};

printLinkedList(a);

// go over the linked list recursively
const printLinkedListRecursive = (head) => {
	if (head === null) return;
	console.log(head.val);
	printLinkedListRecursive(head.next);
};

printLinkedListRecursive(a);

// return all the values of the linkedList in an array in the order that they were inserted
const allValues = (head) => {
	// go over the list
	let current = head;

	while (current !== null) {
		//add  every values that is not == to null to the values array
		if (current !== null) values.push(current.val);
		current = current.next;
	}
	console.log(values);
};

// allValues(a);

allValuesRecursive = (head) => {
	if (head === null) return;
	values.push(head.val);
	allValuesRecursive(head.next);
};

allValuesRecursive(a);

console.log(values);

// sum list

const sumList = (head) => {
	// todo

	// make a variable that is call total
	// iterate over the list
	//add the total value plus the curretn values  that is on a node
	//   return the totla varible
	let total = 0;

	let curretn = head;

	while (curretn !== null) {
		total += curretn.val;
		curretn = curretn.next;
	}
	return total;
};

const sumListRecursive = (head) => {
	// todo

	// make a variable that is call total
	// iterate over the list
	//add the total value plus the curretn values  that is on a node
	//   return the total variable
	let total = [0];

	totalSum(head, total);
	return total[0];
};

const totalSum = (head, total) => {
	if (head === null) return;
	total[0] += head.val;
	totalSum(head.next, total);
};

// const sumList = (head) => {
//     if (head === null) return 0;
//     return head.val + sumList(head.next);
//   };

// get node value
// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

const getNodeValue = (head, index) => {
	// todo
	//make a variable that is going to take the curent node make
	let current = head;
	//   make a variable idx(number) that in creases in number (this is the index)
	let idx = 0;
	//   if there are nodes iterate over the list
	while (current !== null) {
		//     check to  see if the idx varible is == to the index given
		if (idx === index) {
			//     if it is then we return the values of the node
			return current.val;
		}
		// else add to the count and  keep iterating
		idx++;
		current = current.next;
	}
	//   if there are no values that match the index then return nul
	return null;
	l;
};

const reverseList = (head) => {
	// todo

	// make a variable to keep track of the previous node
	let prev = null;
	//   make  a variable  that keeps track of the curretn node make
	let current = head;

	while (current !== null) {
		//     save the next node in a variable
		let next = current.next; // ==> b
		//     reassign the what current.next is to be prev == null
		current.next = prev; // => null
		//   reassign prev to be the current node that you are looking at
		prev = current; // => a
		//     reassign the current node to be the next node that you store in te variable at the beginning
		current = next; // => b
	}
	//     once the loop is over return the last node that you looked at because that node is going to be pointing to all the other nodes  because the pointers where all change
	return prev;
};

const reverseListRecursive = (head, prev = null) => {
	// todo

	if (head == null) return prev;
	//     once the loop is over return the last node that you looked at because that node is going to be pointing to all the other nodes  because the pointers where all change
	const next = head.next;
	head.next = prev;

	return reverseList(next, head);
};
