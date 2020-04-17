const CSVToJSON=require('csvtojson');
const FileSystem=require('fs');
const neatCsv = require('neat-csv');

CSVToJSON().fromFile('./schoolida.csv').then(source => {
    console.log(source);
});

FileSystem.readFile('./schoolida.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    FileSystem.writeFile('students.json', JSON.stringify(await neatCsv(data)), function (err) {
        if (err) return console.log(err);
    });
});