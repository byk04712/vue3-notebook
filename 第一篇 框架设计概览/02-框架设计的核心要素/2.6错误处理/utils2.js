export default {
  foo(fn) {
    try {
      fn && fn();
    } catch (e) {}
  },
  bar(fn) {
    try {
      fn && fn();
    } catch (e) {}
  }
}