export default {
  // 1
  foo(fn) {
    fn && fn()
  },

  // 2
  bar(fn) {
    try {
      fn && fn()
    } catch (e) {}
  },
  baz(fn) {
    try {
      fn && fn()
    } catch (e) {}
  },

  // 3
  foo1(fn) {
    callWithErrorHandling(fn)
  },
  bar1(fn) {
    callWithErrorHandling(fn)
  }
}

function callWithErrorHandling(fn) {
  try {
    fn && fn()
  } catch (e) {
    console.log(e)
  }
}