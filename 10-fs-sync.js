const {readFileSync,writeFileSync,} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',`here is the result: ${first}, ${second}`)

writeFileSync('./content/subfolder/third1.txt',' rabbit practice makes habit',{flag:'a'})
console.log('done with this task')
console.log('starting next task')