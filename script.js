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
    append: function (value) {
      let node = nodeFactory(value);
      if (this.head === null) {
        this.head = node;
      } else {
        this.tail = node;
      }
    },
    prepend: function (value) {
      this.head = nodeFactory(value, this.head);
    },
  };
}
