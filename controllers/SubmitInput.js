import fs from 'fs';


export default async function SubmitInput({argvInput, argvType, argvCount}) {
    try {
        console.log(argvInput);
        const newFile = {};
        newFile.reader = fs.createReadStream(argvInput);
    } catch (error) {
        
    }
}