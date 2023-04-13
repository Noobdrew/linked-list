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

    tail() {
        let node = this.head
        while (node) {
            if (node.next == null) {
                console.log(node)
                return node
            }
            node = node.next
        }
    }

    at(index) {
        let node = this.head
        let counter = 0
        while (node) {
            if (counter == index) {
                console.log(node)
            }
            node = node.next
            counter++
        }
    }
    pop() {
        let node = this.head
        while (node) {
            if (node.next.next == null) {
                node.next = null
            }
            node = node.next
        }
    }
    contains(value) {
        let node = this.head
        while (node) {
            if (node.value == value) {
                console.log(true)
                return true
            }
            if (node.next == null) {
                console.log(false)
                return false
            }
            node = node.next
        }
    }
    find(value) {
        let node = this.head
        let counter = 0
        while (node) {
            if (node.value == value) {
                return this.at(counter)

            }
            if (node.next == null) {
                console.log(false)
                return false
            }
            node = node.next
            counter++
        }
    }
    toString() {
        let node = this.head
        let counter = 0
        let arr = []
        while (node) {
            arr.push(node.value)

            node = node.next
            counter++
        }
        arr.push('null')
        let string = arr.join(' -> ')
        console.log(string)
        return string
    }

    insertAt(index, value) {
        let node = this.head
        let newNode = new Node(value)
        let counter = 0
        while (node) {
            counter++
            if (counter == index) {
                newNode.next = node.next
                node.next = newNode
            }
            node = node.next
        }
    }
    removeAt(index) {
        let node = this.head
        let counter = 0
        while (node) {

            if (counter + 1 == index) {
                node.next = node.next.next
            }
            node = node.next
            counter++
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(5)
let node2 = new Node(7)
node1.next = node2

let list = new LinkedList(node1)

list.append(8)

list.removeAt(1)
console.log(list)