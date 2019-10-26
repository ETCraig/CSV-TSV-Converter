import getPath from './getPath';
import rl from '../utils/readline';

export default async function getInput(input) {
    console.log('HEREER')
    while (true) {
        if (input) {
            const path = await getPath(input);
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