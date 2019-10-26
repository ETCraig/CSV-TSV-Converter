import rl from '../utils/readline';

export default async function getCount(count) {
    while (true) {
        if (count && parseInt(count, 10) > 0) {
            return parseInt(count, 10);
        } else {
            rl.write('\nNot a Number.\n');
        }
        count = await rl.question('\nHow many fields should each record contain?\n');
    }
}