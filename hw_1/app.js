const fs = require('fs');
const path = require('path')

fs.mkdir(path.join(__dirname, 'main'), (err) =>{
    if (err) {
        console.log(err);
    }
})

fs.mkdir(path.join(__dirname, 'main', 'online'), (err) =>{
    if (err) {
        console.log(err);
    }
})
fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) =>{
    if (err) {
        console.log(err);
    }
})

fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),  'name:PETRO, \nage:19, \ncity:Rivne', (err) => {
    if (err) {
        console.log(err);
    }
})

fs.writeFile(path.join(__dirname, 'main', 'online', 'onlineUser.txt'),  'name:MARTA, \nage:24, \ncity:lviv',  (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.rename(path.join(__dirname,  'main', 'inPerson', 'inPersonUsers.txt'),
    path.join(__dirname, 'main', 'online', 'inPersonUsers.txt'), (err ) => {
    if (err) {
        console.log(err)
    }
    })