//excecuting module which has invoked a function
//require('./4-module');
//experiment are given below;
// console.log(`Architecture: ${os.arch()}`);
// console.log(`CPU Info:`, os.cpus());
// console.log(`Free Memory: ${os.freemem()}`);
// console.log(`Total Memory: ${os.totalmem()}`);
// console.log(`OS Platform: ${os.platform()}`);
// console.log(`Uptime: ${os.uptime()} seconds`);



const os = require('os');
//info about user 
const userInfo = os.userInfo()
console.log(userInfo);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentOS);



