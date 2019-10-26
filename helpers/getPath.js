import fs from 'fs';

export default async function(input) {
    try {
        console.log(fs.statSync(input))
        return fs.statSync(input);
    } catch (error) {
        console.log(error);
    }
}