// Use constructor function to implement a Singly LinkedList.

// Use case:

// let linkedlist = new LinkedList();
// linkedlist.add(1);
// linkedlist.add(2);
// linkedlist.add(3);
// linkedlist.print(); //Expected Result: LinkedList{1,2,3};
// linkedlist.remove(2);
// linkedlist.print(); //Expected Result: LinkedList{1,3};

function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;

    // Method to add elements to the list
    this.add = function(data) {
        var newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    };

    // Method to remove element from the list
    this.remove = function(data) {
        var current = this.head;
        var prev = null;

        while (current !== null) {
            if (current.data === data) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    };

    // Method to print the elements of the list
    this.print = function() {
        var current = this.head;
        var result = "LinkedList{";
        while (current !== null) {
            result += current.data;
            if (current.next !== null) {
                result += ",";
            }
            current = current.next;
        }
        result += "}";
        console.log(result);
    };
}

// Example usage
var linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); // Expected Result: LinkedList{1,2,3}
linkedlist.remove(2);
linkedlist.print(); // Expected Result: LinkedList{1,3}
