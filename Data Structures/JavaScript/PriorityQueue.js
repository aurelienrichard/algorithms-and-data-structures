// PRIORITYQUEUE

// Priority Queue implementation using a min binary heap

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // add new item in the queue and place it according to its priority
  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    const bubbleUp = (index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index]?.priority < this.values[parentIndex]?.priority) {
        swap(this.values, index, parentIndex);
        bubbleUp(parentIndex);
      }
    };
    bubbleUp(this.values.length - 1);

    return this;
  }
  // remove item with highest priority from the queue and return it
  dequeue() {
    const first = this.values[0];
    const last = this.values.pop();
    if (this.values.length === 0) return last;
    this.values[0] = last;
    const bubbleDown = (index) => {
      let smallest = index;
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      if (this.values[leftIndex]?.priority < this.values[smallest]?.priority)
        smallest = leftIndex;
      if (this.values[rightIndex]?.priority < this.values[smallest]?.priority)
        smallest = rightIndex;
      if (smallest !== index) {
        swap(this.values, index, smallest);
        bubbleDown(smallest);
      }
    };
    bubbleDown(0);

    return first;
  }
}

module.exports = PriorityQueue;
