import { foo, bar } from './utils'

// 注意下面注释代码其作用是告诉 rollup.js ,对于 foo 函数的调用不会产生副作用, 你可以放下的对其进行 Tree-Shaking
/*#__PURE__*/ foo()

bar()