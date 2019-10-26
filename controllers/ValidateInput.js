import fs from 'fs';
import rl from '../utils/readline';
import getInput from '../helpers/getInput';
import getType from '../helpers/getType';

export default async function ValidateInput() {
    var myArgs = process.argv.slice(2);
    var argvInput = null;
    var argvType = null;
    var argvCount = null;
    argvInput = await getInput(myArgs.input);
    argvType = await getType(myArgs.format);
    while (true) {
        console.log(parseInt(myArgs.count, 10));
        if (myArgs.count && parseInt(myArgs.count, 10) > 0) {
            argvCount = parseInt(myArgs.count, 10);
            console.log({ argvInput, argvType, argvCount })
            return { argvInput, argvType, argvCount }
        } else {
            rl.write('\nNot a Number.\n');
        }
        myArgs.count = await rl.question('\nHow many fields should each record contain?\n');
    }
}