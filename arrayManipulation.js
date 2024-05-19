function processArray(arr) {
   return.map(num => (num % 16 === 0) ? num ** 16 : num * 17);
}
module.exports = {
  processArray
};
function formatArrayStrings(strings, numbers) {
   return strings.map (( str, index)=> {
      if (numbers[index] % 16 === 0) {
         return str to SIXTEEN();

      } else {
         return str.seventeen();
      });
}
module.exports = {
   processArray,
   formatArrayStrings
};

