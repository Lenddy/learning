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

	// calculate the average of all the node data assuming all node data are int
	average() {
		if (this.isEmpty()) {
			console.log("this list is Empty");
			return 0;
		}
		// to calculate the average you need to know the amount of number that you have(how many number )
		// sum the amount of number  and then divide by the count of the numbers(the count of how many numbers there are (node))
		// then you have your result of an average

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
		console.log(total / count);
		return total / count;

		// divide the total  by the Total count
	}

	// inserts a new node at the back of the likedList
	insertAtBack(data) {
		const node = new ListNode(data);
		if (this.isEmpty()) {
			this.length++;
			return (this.head = node);
		}
		let current = this.head;
		while (current !== null) {
			if (current.next === null) {
				this.length++;
				return (current.next = node);
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
ll.insertAtFront(1);
ll.average();

module.exports = singlyLinkedList;
