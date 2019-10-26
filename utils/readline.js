import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = rl.question.bind(rl);

rl.question = query => new Promise(r => question(query, r));

export default rl;