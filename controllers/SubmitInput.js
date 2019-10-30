import fs from 'fs';
import convertFormat from '../helpers/convertFormat';
import createPassedFile from '../helpers/createPassedFile';
import createFailedFile from '../helpers/createFailedFile';
import rebuildData from '../helpers/rebuildData';

export default async function SubmitInput({ argvInput, argvType, argvCount }) {
    try {
        let correctData = [];
        let incorrectData = [];
        let input = fs.createReadStream(argvInput);
        input.on('data', async function (chunk) {
            let stringData = chunk.toString();
            let arrayObj = await convertFormat(stringData, argvType);
            for (let i = 0; i < arrayObj.length; i++) {
                let arr = [];
                let count = 0
                if(argvType === 'CSV') {
                    for (let key in arrayObj[i]) {
                        count++;
                        if (arrayObj[i][key] === undefined || arrayObj[i][key] === null) {
                            arr.push(arrayObj[i][key])
                        }
                    }
                    if (arr.length > 0 || count !== argvCount) {
                        incorrectData.push(arrayObj[i]);
                        arr = [];
                        count = 0;
                    } else {
                        correctData.push(arrayObj[i]);
                        arr = [];
                        count = 0;
                    }
                } else if(argvType === 'TSV') {
                    let keys = arrayObj[i].length;
                    if(keys === argvCount) {
                        correctData.push(arrayObj[i]);
                    } else {
                        incorrectData.push(arrayObj[i]);
                    }
                }
            }
            let passed = await rebuildData(correctData);
            let failed = await rebuildData(incorrectData);
            if(passed) {
                await createPassedFile(passed, argvType);
            } 
            if (failed) {
                await createFailedFile(failed, argvType);
            }
        });
    } catch (error) {

    }
}