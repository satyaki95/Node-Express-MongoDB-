console.log('HI');

const fs = require('fs');

// fs.writeFile('demo.txt',"my name is satyaki", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfull");
//     }
// })

// fs.appendFile('demo.txt'," i am 28 year old", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfull");
//     }
// })

// fs.readFile('demo.txt','utf-8', (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.rename('demo.txt','hallo.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

// fs.unlink('hallo.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

fs.exists('hallo.txt', (err)=>{
    if(err){
        console.log("found");
    }else{
        console.log("not found");
    }
})