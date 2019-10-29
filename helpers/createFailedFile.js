import fs from 'fs';

export default async function createFailedFile(data, type) {
    if (type === 'CSV') {
        fs.writeFile("failed.csv", data, function(err) {
            if(err) {
                console.log(err);
            } else {
                return true;
            }
        });
    } else if (type === 'TSV') {
        fs.writeFile("failed.tsv", data, function(err) {
            if(err) {
                console.log(err);
            } else {
                return true;
            }
        });
    }
}