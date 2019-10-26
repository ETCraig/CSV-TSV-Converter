import rl from '../utils/readline';
import getInput from '../helpers/getInput';
import getType from '../helpers/getType';
import getCount from '../helpers/getCount';

export default async function ValidateInput() {
    var myArgs = process.argv.slice(2);
    var argvInput = null;
    var argvType = null;
    var argvCount = null;
    argvInput = await getInput(myArgs.input);
    console.log(argvInput)
    argvType = await getType(myArgs.format);
    argvCount = await getCount(myArgs.count);
    return { argvInput, argvType, argvCount }
}