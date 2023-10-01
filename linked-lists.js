class LinkedList 
{
    constructor()
    {
        this.head = null;
    }
    // Add node to the end of the linked lit.
    append(value)
    {
        // Create a new node.
        let newNode = new Node(value);
        // Check if there is a node in the head.
        if (this.head === null)
        {
            // If not, add the node as the head. 
            this.head = newNode;
        }
        else
        {
            // IF there is a head already.
            let current = this.head;
            // Traverse through the list until one node doesn't have a "next" property that is not equal to "null".
            while(current.next !== null)
            {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    // Add node to the front of the list.
    prepend(value)
    {
        let newNode = new Node(value); 
        // Check if head node exists, if not add it as head.
        if (this.head === null)
        {
            this.head = newNode;
        }
        else
        {
            // Set the new node's next to the current head.(Shift places with the head node.)
            newNode.next = this.head;
            // Update the head to the new node.
            this.head = newNode;
        }
    }
    // Return the size of the linked list.
    size()
    {
        let count = 0;
        let current = this.head;
        // Traverse through the list and add 1 to the count variable for each node until the next node has a "null" value.
        while(current !== null)
        {
            count++;
            current = current.next;
        }
        return `The size of the linked list is: ${count}`;
    }
    // Return the node at the head of the list.
    headNode()
    {
        return `The head node is: ${this.head.value}`;
    }
    // Return the node at the tail of the list.
    tailNode()
    {
        let current = this.head;
        // Traverse till the last node and return the value of that node. 
        while (current.next !== null)
        {
            current = current.next;
            if(current.next === null)
            {
                return `Tail node is: ${current.value}`;
            }
        }
    }
    // Return the value of the node at the given index.
    at(index)
    {
        if (index < 0)
        {
            return ('The list doesn\'t have negative integers.');
        }
        let current = this.head;
        let currentIndex = 0;
        // Traverse through the list...
        while (current !== null)
        {
            // Return the value of the node at the given index if found.
            if (currentIndex === index)
            {
                return current.value;
            }
            current = current.next;
            currentIndex++;
        }
        // IF the index doesn't exists.
        return ('The entered index doesn\'t exists.');
    }
    // Remove the last node at the end of the list.
    pop()
    {
        // If the list is empty.
        if (this.head === null)
        {
            return null;
        }
        // If there's only one node in the list. 
        // Return the value of the node to be eliminated and set the head node to null.
        if (this.head.next === null)
        {
            const value = this.head.value;
            this.head = null;
            return value;
        }
        let current = this.head;
        let previous = null;
        // TRaverse till the last node.
        // When found the last node set the second-to-last to last.
        while(current.next !== null)
        {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current.value;
    }
    // Check if the list contains the given value. 
    contains(value)
    {
        let current = this.head;
        while (current !== null)
        {
            if (current.value === value)
            {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    // Return the index of the node that contains the given value.  
    find(value)
    {
        let current = this.head;
        // Set an index.
        let index = 0;
        // Traverse through the list.
        while (current !== null)
        {
            if (current.value === value)
            {
                return `The value is at index ${index}`; 
            }
            index++;
            current = current.next;
        }
        // IF the value is not in the list.
        return 'Value not found.';
    }
    // Return a string containing the structure of the linked list.
    toString()
    {
        let string = '';
        let current = this.head;
        // Traverse through the linked list.
        while (current !== null)
        {
            // Add info to the string for each node.
            string += `(${current.value}) -> `
            current = current.next;
        }
        // Append the "null" to the end of the linked list.
        string += " null";
        return string;
    }
}

class Node
{
    constructor (value = null)
    {
        this.value = value
        this.next = null
    }
}

const newLinkedList = new LinkedList();
newLinkedList.append(1);
newLinkedList.append(2);
newLinkedList.append(3);
newLinkedList.append('Test node 1');
newLinkedList.append('Test node 2');
newLinkedList.append('Test node 3');
newLinkedList.prepend('Prepended node');
console.log(newLinkedList.toString());
console.log(newLinkedList.size());
console.log(newLinkedList.headNode());
console.log(newLinkedList.tailNode());
console.log(newLinkedList.at(0));
// Before popping the last item.
console.log(newLinkedList.toString());
// Delete the last item.
newLinkedList.pop();
// After popping the last item.
console.log(newLinkedList.toString());
console.log(newLinkedList.contains(3));
console.log(newLinkedList.find('Prepended node'));