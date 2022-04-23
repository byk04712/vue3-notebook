import utils from './utils4'

utils.registerErrorHandler(e => {
  console.log(e)
})

utils.foo(() => {})
utils.bar(() => {})