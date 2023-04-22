function nodeFactory(value, nextNode) {
  return { value, nextNode: null };
}

function linkedListFactory() {
  return {
    head: null,
    tail: null,
    append: function (value) {
      this.tail = nodeFactory(value);
    },
  };
}
