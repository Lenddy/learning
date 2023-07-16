const LinkedList = require("./linkedList");

describe("#insertAtHead", () => {
	test("it adds a new node to the beginning of the LinkedList", () => {
		const ll = new LinkedList();
		ll.insertAtHead(10);
		const oldHead = ll.head;
		ll.insertAtHead(20);

		expect(ll.head.value).toBe(20);
		expect(ll.head.next).toBe(oldHead);
		expect(ll.length).toBe(2);
	});
});
