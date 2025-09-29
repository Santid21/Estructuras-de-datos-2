class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.current = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  nextPage() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
    return this.current?.value || null;
  }

  prevPage() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
    return this.current?.value || null;
  }

  reset() {
    this.current = this.head;
    return this.current?.value || null;
  }
}
