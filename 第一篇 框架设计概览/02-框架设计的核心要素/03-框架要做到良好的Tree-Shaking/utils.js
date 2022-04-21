export function foo(obj) {
  obj && obj.foo
}

export function bar(obj) {
  obj && obj.bar
}

// 没有被引用的代码会被 tree-shaking 掉
export function unless(obj) {
  obj && obj.nothing
}