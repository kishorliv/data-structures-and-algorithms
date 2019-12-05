/**
 * Implementation of singly linked list
 */

class Node{
    constructor(data){
        this.next = null; // reference for node is to be pointed
        this.data = data;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.rootPtr = null;
    }

    // add node at last
    add = (node) => {
        if(!this.rootPtr){
            this.head = this.rootPtr = node;
        }else{
            this.head.next = node;
            this.head = this.head.next;
        }
    };

    // display whole list
    traverse = () => {
        this.head = this.rootPtr;
        while(this.head){
            console.log(this.head.data);
            this.head = this.head.next;
        }
    };
}
