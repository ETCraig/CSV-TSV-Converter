import rl from './utils/readline';
import ValidateInput from './controllers/ValidateInput';
import SubmitInput from './controllers/SubmitInput';

if(!module.parent) {
    async function hello() {
        try {
            const data = await ValidateInput();
            const submission = await SubmitInput(data);
            rl.close();
        } catch(err) {
            
        }
    }
    hello();
}