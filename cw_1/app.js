const fs = require('fs');
const path = require('path')


fs.mkdir(path.join(__dirname, 'cw_1', 'text'), (err) => {
    if (err) {
        console.log(err)
    }
})
