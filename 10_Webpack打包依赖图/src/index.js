//ESModule 写法

const { sum } = require('./js/sum')
// CommonJs写法
import sub from './js/sub'
console.log(sum(1, 2))
console.log(sub(1, 2))
