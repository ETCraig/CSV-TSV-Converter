import fs from 'fs';
// import getPath from './getPath';
import rl from '../utils/readline';

export default async function getInput(input) {
    while (true) {
        if (input) {
            const path = await fs.statSync(input);
            console.log('PATH', path)
            if (path) {
                if (path.isFile()) {
                    return path;
                }
            } else {
                rl.write('FAILED\n');
            }
        }
        input = await rl.question('\nWhere is the File Located?\n');
    }
}