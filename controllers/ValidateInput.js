import fs from 'fs';
import rl from '../utils/readline';
import getInput from '../helpers/getInput';

export default async function ValidateInput() {
    var myArgs = process.argv.slice(2);
    var argvInput = null;
    var argvType = null;
    argvInput = await getInput(myArgs.input);
        // if(argvInput) {
        //     console.log(argvInput)
        //     var format = String(myArgs.format).trim().toLocaleUpperCase();
        //     if(format) {
        //         console.log(format)
        //         if(format === 'CSV' || format === 'TSV') {
        //             argvType = format;
        //         } else {
        //             rl.write('Please try again.');
        //         }
        //     }
        //     format = await rl.question('\nIs the file format CSV (comma-separated values) or TSV (tab-separated values)?\n')
        // }
}