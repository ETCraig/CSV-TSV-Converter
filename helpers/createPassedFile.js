import fs from 'fs';

export default async function createPassedFile(data, type) {
    if (type === 'CSV') {
        fs.writeFile("passed.csv", data, function (err) {
            if (err) {
                console.log(err);
            } else {
                return true;
            }
        });
    } else if (type === 'TSV') {
        fs.writeFile("passed.tsv", data, function (err) {
            if (err) {
                console.log(err);
            } else {
                return true;
            }
        });
    }
}