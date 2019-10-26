import rl from '../utils/readline';

export default async function (format) {
    while (true) {
        var formatStr = String(format).trim().toLocaleUpperCase();
        if (formatStr) {
            console.log('FORMAT', formatStr)
            if (formatStr === 'CSV' || formatStr === 'TSV') {
                return formatStr;
            }
            rl.write('Please try again.');
        }
        format = await rl.question('\nIs the file format CSV (comma-separated values) or TSV (tab-separated values)?\n')
    }
}