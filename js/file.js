const fruits = ['melon', 'apple', 'orange'];

fruits.shift('melon')
fruits.pop('orange')

fruits.unshift('ultra-melon');
fruits.push('ultra-orange');

console.log(fruits);
// -----------------
const love = ["A", "love", "JS"]

console.log(love.join(' '));
// -----------------
fruits.splice(2, 1, 'super-orange');
console.log(fruits);
