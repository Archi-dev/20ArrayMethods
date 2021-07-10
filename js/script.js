let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
//1
console.log(arr1.concat(arr2));
//2
console.log(arr1.reverse());
//3
arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1);
//4
arr1 = [1, 2, 3];
arr1.unshift(4, 5, 6);
console.log(arr1);
//5
arr5 = ['js', 'css', 'jq'];
let firstArrEl = arr5.shift();
console.log(firstArrEl);
//6
arr6 = ['js', 'css', 'jq'];
let lastArrEl = arr6.pop();
console.log(lastArrEl);
//7
arr7 = [1, 2, 3, 4, 5];
let someArrEl1 = arr7.slice(0, 3);
console.log(someArrEl1);
//8
arr8 = [1, 2, 3, 4, 5];
let someArrEl2 = arr8.slice(2, 4);
console.log(someArrEl2);
//9
arr9 = [1, 2, 3, 4, 5];
let someArrEl3 = arr9.splice(1, 2);
console.log(arr9);
//10
arr10 = [1, 2, 3, 4, 5];
let someArrEl4 = arr10.splice(1, 3);
console.log(someArrEl4);
//11
arr11 = [1, 2, 3, 4, 5];
let someArrEl5 = arr11.splice(3, 0, 'a', 'b', 'c');
console.log(arr11);
//12
arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.splice(8, 0, 'e');
console.log(arr12);
//13
let arr13 = [3, 4, 1, 2, 7];
arr13.sort(function(a, b) {
  return a - b;
});
console.log(arr13);
//14
arr14 = [5, 6, 7, 8, 9];
let result = arr14.reduce(function (sum, current) {
    return sum + current
}, 0);
console.log(result);
//15
let result1 = arr14.map(function (index) {
    return index**2
});
console.log(result1);
//16
arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
    let negativeNumber = arr16.filter(
    function (item) {
        return item < 0
    }
);
console.log(negativeNumber);
//17
let enenNumber = arr16.filter(
    function even(item) {
        if (item % 2 === 0) {
            return true;
        }

        return false;
    });
console.log(enenNumber);
//18
arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
let result18 = arr18.filter(function (world) {
    return world.length > 5;
});
console.log(result18);
//19
arr19 = [1, 2, [3, 4], 5, [6, 7]];

console.log(arr19);
// let result19 = arr19.indexOf([3, 4]);
let result19 = arr19.filter(function (item) {
    return Array.isArray(item) !== false;
})
console.log(result19);
//20
arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
let result20 = arr20.filter(function (item) {
    return item < 0;
})
console.log(result20.length);




