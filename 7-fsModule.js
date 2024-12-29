
const { readFile, writeFile } = require('fs');
console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/subfolder/test.txt', 'utf8');
// //console.log(first, second);
// writeFileSync('./content/result-sync.txt', `here is the result: ${first}, ${second}`,{flag: 'a'});
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(
       err 
    ){
        console.log(err);
        return;
    }
    const first = result;
    writeFile('./content/result-async.txt', `Here is the result: ${first}`, (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
    const second = result;
    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('done with this task');
    })


})
console.log('starting the next one');