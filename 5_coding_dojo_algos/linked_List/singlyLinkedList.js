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
		if (this.head.data === null && this.head.data === targetVal) {
			console.log("the second if hit");

			this.insertAtFront(newVal);
			return true;
		}
		console.log("second if did not hit");

		//create 3 variable ;
		let prev = null;
		let current = this.head;
		let next = current.next;
		// iterate over the list
		while (current !== null) {
			// update what the 3 variable are
			prev = current;
			current = next;
			next = current.next;
			// create a new node
			if (targetVal === current.data) {
				let node = new ListNode(newVal);
				prev.next = node;
				node.next = current;
				this.length++;
				return true;
			}
		}
		return false;
	}

	// preEnd(newVal, targetVal) {
	// 	if (this.isEmpty()) return false;

	// 	if (this.head === null && targetVal === this.head) {
	// 	  console.log("the second if hit");
	// 	  this.insertAtFront(newVal);
	// 	  return true;
	// 	}

	// 	let prev = null;
	// 	let current = this.head;
	// 	let next = current.next;

	// 	while (current !== null) {
	// 	  prev = current;
	// 	  current = next;
	// 	  if (current !== null) {
	// 		next = current.next;
	// 	  }

	// 	  if (targetVal === current.data) {
	// 		let node = new ListNode(newVal);
	// 		prev.next = node;
	// 		node.next = current;
	// 		this.length++;
	// 		return true;
	// 	  }
	// 	}

	// 	return false;
	//   }

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

const ll = new singlyLinkedList();

ll.insertAtBack(1);
ll.insertAtBack(2);
ll.insertAtBack(3);
ll.insertAtBack(4);

console.log(ll.preEnd(11, 3));

module.exports = singlyLinkedList;
