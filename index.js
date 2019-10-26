import rl from './utils/readline';
import ValidateInput from './controllers/ValidateInput'
;
console.log(module.parent)
if(!module.parent) {
    async function hello() {
        try {
            const data = await ValidateInput();
        } catch(err) {
            
        }
    }
    hello();
}


