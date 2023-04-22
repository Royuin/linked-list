function nodeFactory(value, nextNode) {
  return { value, nextNode: null };
}

function linkedListFactory() {
  return {
    head: null,
    tail: null,
  };
}
