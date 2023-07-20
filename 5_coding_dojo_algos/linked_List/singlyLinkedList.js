// creating node class
class ListNode {
	constructor(data) {
		//data is use to show the values that a node can have
		this.data = data;
		//next is use to like a node to another node
		this.next = null;
	}
}

class singlyLinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	//determine if the list is empty
	isEmpty() {
		//checking to if the head is empty (aka) null  and returning a bool
		if (this.head === null) return true;
	}

	// create a new node and inserted at the front
	insertAtFront(data) {
		// create a new node
		const node = new ListNode(data);
		// make a new node the head
		// check if there is something at the head
		if (this.isEmpty()) {
			this.length++;
			this.head = node;
			return this;
		}
		// the next of our new node should be the current head
		const oldHead = this.head;
		this.head = node;
		this.head.next = oldHead;
		this.length++;
		return this;
	}

	// remove the first node in the list
	removeHead() {
		// we need to check if the list is empty
		// if the Liked List is not empty  point the current head at noting (null)
		if (this.isEmpty()) {
			console.log("the list  is empty");
			return this;
		}
		// make the second node in the list the head  and forget about the first node ever exited
		// make a temp variable that hold the all the other node that the current head is point to
		let temp = this.head.next;

		// set head to be the temp variable that we made
		this.head = temp;
		this.length--;
		return this;
	}

	// remove the last item in the list
	removeBack() {
		if (this.isEmpty()) {
			return this;
		}
		// create 2 variables prev, current
		// if (this.head.next === null) {
		// 	this.head = null;
		// 	this.length--;
		// 	return this;
		// }
		if (this.head.next === null) {
			this.removeBack();
		}
		let prev;
		let current = this.head;
		while (current.next !== null) {
			// prev = current
			prev = current;
			current = current.next;
		}
		prev.next = null;
		this.length--;
		return this;

		// while (current !== null) {
		// 	prev = current;
		// 	current = current.next;
		// 	if (current.next === null) {
		// 		prev.next = null;
		// 		this.length--;
		// 		return;
		// 	}
		// }
	}

	// determine if the any inputted value  is on the list
	contains(val) {
		// check if the list is empty
		if (this.isEmpty()) {
			return false;
		}

		let current = this.head;
		while (current !== null) {
			// add return
			if (val === current.data) {
				return true;
			}
			current = current.next;
		}
		return false;
		// iterate over the list
		// compare if val is == to the data that is inside of the current node
		// return a bool
	}

	// determine if the any inputted value  is on the list
	containsRecursive(val, current = this.head) {
		if (!current) {
			return false;
		}
		if (val === current.data) return true;

		return this.containsRecursive(val, current.next);
		// return a bool
	}

	// returns the max value that the list is holding
	max() {
		if (this.isEmpty()) return null;
		let current = this.head;
		let number = this.head.data;
		while (current !== null) {
			if (current.next !== null && number < current.next.data) {
				console.log("num was", number);
				number = current.next.data;
				console.log("num now is ", number);
			}
			current = current.next;
		}
		return number;
	}

	maxRecursive(runner = this.head, maxNode = this.head.data) {
		if (this.isEmpty()) return null;

		if (runner.next === null) {
			return maxNode;
		}
		if (runner.next.data !== null && maxNode < runner.next.data) {
			maxNode = runner.next.data;
		}
		return this.maxRecursive(runner.next, maxNode);
	}

	// calculate the average of all the node data assuming all node data are int
	// to calculate the average you need to know the amount of number that you have(how many number )
	// sum the amount of number  and then divide by the count of the numbers(the count of how many numbers there are (node))
	// then you have your result of an average
	average() {
		if (this.isEmpty()) {
			console.log("this list is Empty");
			return 0;
		}
		// make 2 variables  total and count\
		let total = 0;
		let count = 0;

		// iterate over the list
		let current = this.head;
		while (current) {
			console.log(current.data);
			// look at the current list data  and add it to total  increase the count
			count++;
			total += current.data;
			current = current.next;
		}
		// divide the total  by the Total count
		console.log(total / count);
		return total / count;
	}

	// retrieve the data  of the node that is in the second to last position
	secondeToLast() {
		// check is the list is not empty
		if (this.isEmpty()) return null;

		// check if there is only one item in the list
		if (this.head.next === null) return null;
		let prev;
		let current = this.head;
		// iterate over the list
		while (current.next !== null) {
			// keep track of what the prev node is
			prev = current;
			current = current.next;
			// if (current.next === null) {
			// 	return prev.data;
			// }
		}

		return prev.data;
	}

	// remove the node that has the given value
	removeVal(val) {
		// check if the list is empty
		if (this.isEmpty()) return false;

		// check to see if there is only one node
		// create 3 variable
		let prev = null;
		let current = this.head;
		//create next inside of the loop
		let next = current.next;

		if (val === current.data) {
			this.removeHead();
			return true;
		}
		while (current !== null) {
			// let next = current.next
			prev = current;
			current = next;
			next = current.next;
			if (val === current.data) {
				this.length--;
				prev.next = next;
				return true;
			}
		}

		return false;

		// iterate over the list
		// update the variables

		// return a bool
	}

	// adds a new node before the node with the target value
	preEnd(newVal, targetVal) {
		//check if the list is empty
		if (this.isEmpty()) return false;
		//insert at head
		if (this.head.next === null && this.head.data === targetVal) {
			this.insertAtFront(newVal);
			return true;
		}

		//create 3 variable ;
		let prev = null;
		let current = this.head;
		// let next = current.next;
		// iterate over the list
		while (current !== null) {
			// update what the 3 variable are
			prev = current;
			if (targetVal === current.data) {
				let node = new ListNode(newVal);
				prev.next = node;
				node.next = current;
				this.length++;
				return true;
			}
			current = current.next;
			// next = current.next;
			// create a new node
		}
		return false;
	}

	// add a list to the back of this list
	concat(addList) {
		let current = this.head;
		let counter = 0;
		// check if the list is empty
		if (this.isEmpty()) {
			this.head = addList.head;
			current = addList.head;
			while (current) {
				counter++;
				current = current.next;
			}
			this.length += counter;
			return this;
		}

		// iterate over the list

		// get the last node in this list
		while (current.next) {
			current = current.next;
		}
		// attach head of the seconde list to be the .next of the las node in the first list
		current.next = addList.head;
		current = addList.head;

		// to increase the length count
		while (current) {
			counter++;
			current = current.next;
		}
		this.length += counter;

		// return this
		return this;
	}

	// finds a node with the smallest data move it to the front
	moveIntoFront() {
		// // check if this list is empty
		// if (this.isEmpty()) return this;

		// if (this.head.next === null) return this;
		// let prev = null;
		// let current = this.head;
		// let smallest = this.head.data;
		// // iterate over the list
		// while (current) {
		// 	current = current.next;
		// 	if (current !== null && smallest > current.data) {
		// 		smallest = current.data;
		// 	}
		// }
		// current = this.head;
		// while (current) {
		// 	prev = current;
		// 	if (smallest == prev.data) {
		// 		// add the current node be the head
		// 		this.insertAtFront(smallest);
		// 		// no mater if this line is before the this.insertAtBack method id does not delete the decier node  it work after it was added after the insertion at the front but then it stope working ramdomly and does not deleted the node
		// 		prev.next = current.next;

		// 		return this;
		// 	}
		// 	current = current.next;
		// }
		// // return this;

		//! this is from chatgpt that also had a har time explaining what was happening and at the end it just decided to give me a solution

		if (this.isEmpty()) return this;

		if (this.head.next === null) return this;

		let prev = null;
		let current = this.head;
		let smallest = this.head.data;

		// Find the smallest value and its previous node
		let prevSmallest = null; //so this is essentially having a previous of the previous node
		while (current) {
			if (current.data < smallest) {
				smallest = current.data;
				prevSmallest = prev;
			}
			prev = current;
			current = current.next;
		}

		if (prevSmallest) {
			// Move the node with smallest value to the front
			prevSmallest.next = prevSmallest.next.next; //!and bruuuue here is deleting the node before the new node is add with in my original one i did the same thing basically and it did not wanted to delete the node it had a duplicate it was only when i move this line to bellow the next line that i worked and then it stop deleting the node randomly for no reason buttttttt ooookey what ever i have a better method so cant complain i guess

			this.length--; //* i added this line
			this.insertAtFront(smallest);
		}

		return this;
	}

	// Splits the the list into two different list  and the seconde list starts with the given value
	splitOnVal(val) {
		const newLinkedList = new singlyLinkedList();
		let prev = null;
		let current = this.head;
		// check that the list is not empty
		if (this.isEmpty()) {
			console.log("the first list is empty");
			return newLinkedList;
		}

		// check if there is only one value in the list
		if (current.next === null && current.data === val) {
			newLinkedList.head = this.head;
			this.head = null;
			return newLinkedList;
		}

		// keep track of the prev nodes and the current nodes

		// iterate over the linked list
		while (current.next) {
			if (current.data === val) {
				// if it is create the new linked list and attach the node of the prev linked list

				newLinkedList.head = current;
				if (prev === null) {
					this.head = prev;
					return newLinkedList;
				} else {
					prev.next = null;
				}
				return newLinkedList;
			}
			// update what prev and current are
			prev = current;
			// check if the node that we are at at the moment hold data the is == to val pass in
			current = current.next;
		}
		return (
			console.log("no node data was === to the inputted value"),
			newLinkedList
		);

		//the nodes that are made into the new list need to be deleted in the old list
		// return the new list
	}

	// inserts a new node at the back of the likedList
	insertAtBack(data) {
		const node = new ListNode(data);
		if (this.isEmpty()) {
			this.length++;
			this.head = node;
			return this;
		}
		let current = this.head;
		while (current !== null) {
			if (current.next === null) {
				this.length++;
				current.next = node;
				return this;
			}
			current = current.next;
		}
		// if (this.isEmpty()) {
		// 	this.length++;
		// 	this.head = new ListNode(data);
		// } else {
		// 	let current = this.head;
		// 	while (current.next !== null) {
		// 		current = current.next;
		// 	}
		// 	this.length++;
		// 	current.next = new ListNode(data);
		// }
	}

	// inserts a new node at the back of the likedList recursively
	insertAtBackRecursive(data, runner = this.head) {
		if (this.isEmpty()) {
			this.head = new ListNode(data);
			return this;
		}
		if (runner.next === null) {
			runner.next = new ListNode(data);
			return this;
		}
		return this.insertAtBackRecursive(data, runner.next);
	}

	// inserts many new node at the back of the likedList
	insetAtBackMany(vals) {
		for (const item of vals) {
			this.insetAtBack(item);
		}
		console.log(this);
		return this;
	}

	// converts the linkedList into an array containing the data of all the nodes
	toArr() {
		const arr = [];
		let runner = this.head;

		while (runner) {
			arr.push(runner.data);
			runner = runner.next;
		}
		console.log(arr);
		return arr;
	}
}

// const ll = new singlyLinkedList();

// ll.insertAtBack(1);
// ll.insertAtBack(2);
// ll.insertAtBack(3);
// ll.insertAtBack(4);

// console.log(ll.preEnd(11, 1));

module.exports = singlyLinkedList;
