function processArray(arr) {
   return.map(num => (num % 16 === 0) ? num ** 16 : num * 17);
}
module.exports = {
  processArray
};
