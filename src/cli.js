import readlineSync from 'readline-sync';
const name = readlineSync.question('May I have your name?: ');
const question  = () => {

console.log(`Hello, ${name} `);
}
export {question,name};