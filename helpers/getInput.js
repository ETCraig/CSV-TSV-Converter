import fs from 'fs';
import rl from '../utils/readline';

export default async function getInput(input) {
    while (true) {
        if (input) {
            const path = await fs.statSync(input);
            if (path) {
                if (path.isFile()) {
                    return input;
                }
                rl.write('Invalid Path.\n');
            } else {
                rl.write('Invalid Path.\n');
            }
        }
        input = await rl.question('\nWhere is the File Located?\n');
    }
}