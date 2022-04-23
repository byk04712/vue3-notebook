export default {
  foo(fn) {
    callWithErrorHandling(fn);
  },
  bar(fn) {
    callWithErrorHandling(fn);
  },
};

function callWithErrorHandling(fn) {
  try {
    fn && fn();
  } catch (e) {
    console.log(e);
  }
}
