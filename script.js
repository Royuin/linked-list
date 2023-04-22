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
    tail: null,
    append: function (value) {
      this.tail = nodeFactory(value);
    },
  };
}
