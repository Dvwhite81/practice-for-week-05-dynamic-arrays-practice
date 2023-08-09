class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    let newArr = [];
    let data = this.data;
    this.length++;
    newArr[0] = val;
    for (let i = 1; i <= data.length; i++) {
      newArr[i] = data[i - 1];
    }
    this.data = newArr;
  }

}


module.exports = DynamicArray;
