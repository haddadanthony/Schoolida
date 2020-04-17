const CSVToJSON=require('csvtojson');
const JSONToCSV=require('json2csv').parse;
const FileSystem=require('fs');
const neatCsv = require('neat-csv');


CSVToJSON().fromFile('./schoolida.csv').then(source => {
    console.log(source);

    const csv = JSONToCSV(source,{fields: ['first_name','last_name','mother_name','father_name','schoolida_email']});
    FileSystem.writeFileSync('./destination.csv', csv);
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