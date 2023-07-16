const LinkedList = require("./linkedList");

const ll = new LinkedList();

ll.insertAtHead(10);
console.log(ll);
ll.insertAtHead(20);
console.log(ll);

ll.deleteLast();

console.log(ll);
