class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    append(value) {
        let node = this.head
        while (node) {
            if (node.next == null) {
                return node.next = new Node(value)
            }
            node = node.next
        }
    }
    prepend(value) {
        let node = this.head
        let newHead = new Node(value)
        newHead.next = node
        node = newHead
        this.head = node
    }
    size() {
        let node = this.head
        let counter = 0
        while (node) {
            node = node.next
            counter++
        }
        console.log(counter)
        return counter
    }

    headNode() {
      let node = this.head
      console.log(node)
      return node
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(5)
let node2 = new Node(6)
node1.next = node2

let list = new LinkedList(node1)

list.prepend(1)
list.headNode()
console.log(list)