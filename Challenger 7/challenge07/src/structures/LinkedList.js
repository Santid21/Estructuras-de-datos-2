class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.current = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.current = this.head;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  nextSong() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
    return this.current?.value || null;
  }

  reset() {
    this.current = this.head;
    return this.current?.value || null;
  }
}
