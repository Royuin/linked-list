function nodeFactory(value, nextNode) {
  if (nextNode === undefined) {
    return { value, nextNode: null };
  } else {
    return { value, nextNode };
  }
}

function linkedListFactory() {
  return {
    head: null,
    size: 0,
    append: function (value) {
      let node = nodeFactory(value);
      if (this.head === null) {
        this.head = node;
        this.size += 1;
      } else {
        let current = this.head;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = node;
        this.tail = node;
        this.size += 1;
      }
    },
    prepend: function (value) {
      this.head = nodeFactory(value, this.head);
      this.size += 1;
    },
    get: function (index) {
      let current = this.head;
      for (let i = 0; i < index; i += 1) {
        current = current.nextNode;
      }
      return current;
    },
    pop: function () {
      let current = this.head;

      for (let i = 0; i < this.size - 2; i += 1) {
        current = current.nextNode;
      }

      current.nextNode = null;
      this.tail = current;
      this.size -= 1;
    },
  };
}
