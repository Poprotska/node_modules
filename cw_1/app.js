const fs = require('fs');
const path = require('path')

//Task 1
//
// fs.mkdir(path.join(__dirname, 'TASK-1'), (err) =>{
//     if (err) {
//         console.log(err);
//     }
// })
//
// fs.writeFile(path.join(__dirname, 'TASK-1', 'TASK-1.txt'),  'TASK WORK !!!!!!!!', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })
//
//
// fs.readFile(path.join(__dirname, 'TASK-1', 'TASK-1.txt'), 'utf8',(err, data ) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data)
// })
//
//
// fs.mkdir(path.join(__dirname, 'TEXT'),(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// //
// fs.rename(path.join(__dirname,  'TASK-1', 'TASK-1.txt'),
//     path.join(__dirname, 'TEXT', 'TASK-1.txt'), (err ) => {
//         if (err) {
//             console.log(err)
//         }
//     })

// TASK-2
//
// fs.mkdir(path.join(__dirname, 'TASK-2'), (err) =>{
//     if (err) {
//         console.log(err);
//     }
// })
//
// fs.writeFile(path.join(__dirname, 'TASK-2', 'TASK-2.txt'),  'name:PETRO, \nage:19, \ncity:Rivne', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })
//
// fs.readFile(path.join(__dirname, 'TASK-2', 'TASK-2.txt'), 'utf8',(err, data ) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data)
// })
//
//
// fs.mkdir(path.join(__dirname, 'TEXT-2'), (err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
//
// fs.rename(path.join(__dirname,  'TASK-2', 'TASK-2.txt'),
//     path.join(__dirname, 'TEXT-2', 'TASK-2.txt'), (err ) => {
//         if (err) {
//             console.log(err)
//         }
//     })
//
// fs.unlink(path.join(__dirname, 'TASK-2'), (err) => {
//         if (err) {
//           console.log(err)
//         }
// })

// TASK-3

fs.mkdir(path.join(__dirname, 'TASK-3' ), (err) =>{
    if (err) {
        console.log(err);
    }
})
fs.mkdir(path.join(__dirname, 'TASK-3', 'BODY' ), (err) =>{
    if (err) {
        console.log(err);
    }
})

for (let i = 0; i < 10; i++) {
    fs.writeFile(path.join(__dirname, 'TASK-3', 'TASK-3.txt'), '\nDATA', {flag: 'a'}, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

fs.readdir(path.join(__dirname, 'TASK-3'),(err,data) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(data)
});

fs.rename(path.join(__dirname, 'TASK-3', 'BODY'),
    path.join(__dirname, 'TASK-3', 'newBODY'), (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })
