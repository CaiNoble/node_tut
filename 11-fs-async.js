const {readFile,writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `The Files read : ${first}, ${second}`,
        (err,result)=>{
            if(err){console.log(err);return}
            console.log('do with this taskne')
        })
    })
})
console.log('now for the next task')