/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) return 1;

  let first = 1;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    let temp = first + second;

    first = second;
    second = temp;
  }

  return second;
}

console.log(climbStairs(5));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
