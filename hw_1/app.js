const fs = require('fs');
const path = require('path')

const onlineUsers = [
    {
        name: 'Tamara',
        age: 24,
        city: 'Lviv'
    },
    {
        name: 'Alina',
        age: 28,
        city: 'Odessa'
    },
    {
        name: 'Iryna',
        age: 38,
        city: 'Rivne'
    }
];

const inPersonUsers = [
    {
        name: 'Oleg',
        age: 24,
        city: 'Lviv'
    },
    {
        name: 'Dima',
        age: 19,
        city: 'Rivne'
    },
    {
        name: 'Roman',
        age: 23,
        city: 'Lviv'
    }
];

async function writeDoc() {
    await fs.mkdir(path.join(__dirname, 'main', 'online'),  {recursive: true}, (err) => {
        if (err) {
            console.log(err);
        }
    });

    await fs.mkdir(path.join(__dirname, 'main', 'inPerson'),{recursive: true}, (err) => {
        if (err) {
            console.log(err);
        }
    });

    for (const onlineUser of onlineUsers) {
        fs.writeFile(
            path.join(__dirname, 'main', 'online', `${onlineUser.name}.txt`), `name: ${onlineUser.name}\n age: ${onlineUser.age}\n city: ${onlineUser.city}`, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            });
    }

    for (const inPersonUser of inPersonUsers) {
        fs.writeFile(
            path.join(__dirname, 'main', 'inPerson', `${inPersonUser.name}.txt`), `name: ${inPersonUser.name}\n age: ${inPersonUser.age}\n city: ${inPersonUser.city}`, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            });
    }
}
writeDoc();

async function changeDoc (dir1, dir2) {
    fs.readdir(path.join(__dirname, 'main', `${dir1}`), (err, users) => {
        if (err) {
            console.log(err);
            throw err;
        }
        users.forEach (user => {
            fs.rename(path.join(__dirname, 'main', `${dir1}`, `${user}`),
                path.join(__dirname, 'main', `${dir2}`, `${user}`), (err => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                }));
        });
    });
}

changeDoc ('inPerson', 'online');
changeDoc ('online', 'inPerson');

