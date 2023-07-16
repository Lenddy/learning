const singlyLinkedList = require("./singlyLinkedList");

const ll = new singlyLinkedList();

console.log(ll.isEmpty());

ll.insertAtFront(1);
// ll.insertAtFront(2);
// ll.insertAtFront(3);
// ll.insertAtFront(7);
// ll.insertAtBack(10);

ll.average();
// ll.removeHead();
// ll.removeHead();
// ll.removeHead();

// ll.insertAtBack("a");
// ll.insertAtBack("b");
// ll.insertAtBack("c");
// ll.insertAtBack("d");
// ll.insertAtBackRecursive("A");
// ll.insertAtBackRecursive("B");
// ll.insertAtBackRecursive("C");
// ll.insertAtBackRecursive("D");
// ll.insetAtBackMany([1, 2, 3, 4, 5, 6]);
console.log(ll);
ll.toArr();
