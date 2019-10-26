import fs from 'fs';

export default async function(input) {
    try {
        console.log(fs.stat(input).catch(_ => null))
        return fs.statSync(input);
    } catch (error) {
        console.log(error);
    }
}