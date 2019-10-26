import fs from 'fs';
import rl from '../utils/readline';
import getPath from '../helpers/getPath';

export default async function ValidateInput() {
    var myArgs = process.argv.slice(2);
    const argvInput = null;
    while (true) {
        if (myArgs.input) {
            console.log('INPUT', myArgs.input);
            const path = await getPath(myArgs.input);
            if(path) {
                console.log('PATH', path, path.isFile());
                if(path.isFile()) {
                    argvInput = path;
                }
                rl.write('FAILED\n');
            } else {
                rl.write('FAILED\n');
            }
        }
        myArgs.input = await rl.question('\nWhere is the file located?\n: ');
    }
}