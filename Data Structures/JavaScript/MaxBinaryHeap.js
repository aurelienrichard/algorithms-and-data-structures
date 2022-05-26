// MAXBINARYHEAP

// Max Binary Heap implementation

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // add new item in the heap and place it accordingly
  insert(value) {
    this.values.push(value);
    const bubbleUp = (index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] > this.values[parentIndex]) {
        swap(this.values, index, parentIndex);
        bubbleUp(parentIndex);
      }
    };
    bubbleUp(this.values.length - 1);

    return this;
  }
  // remove item with highest value from the heap and return it
  remove() {
    const first = this.values[0];
    const last = this.values.pop();
    if (this.values.length === 0) return last;
    this.values[0] = last;
    const bubbleDown = (index) => {
      let largest = index;
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      if (this.values[leftIndex] > this.values[largest]) largest = leftIndex;
      if (this.values[rightIndex] > this.values[largest]) largest = rightIndex;
      if (largest !== index) {
        swap(this.values, index, largest);
        bubbleDown(largest);
      }
    };
    bubbleDown(0);

    return first;
  }
}
