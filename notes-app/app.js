const chalk = require('chalk')
const getNotes = require('./notes.js')
const { default: isURL } = require('validator/lib/isURL.js')

const msg = getNotes()
console.log(msg)
console.log(chalk.green.inverse.bold('Success'))








// const add = require('./utils.js')

// const sum = add(2,5)
// console.log(sum)