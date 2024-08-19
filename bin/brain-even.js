import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const even  = (name) => {
console.log('Answer "yes" if the number is even, otherwise answer "no"')
let i = 0;
while( i < 3 ){
    const randNumber = getRandomNumber(1, 1000); ;
    console.log(`Question: ${randNumber} `);
    const question = readlineSync.question('Your answer: ');
    if (randNumber %2 && question === "no"  ){
        console.log("Correct!")
        i++;
    }else if (!(randNumber %2) && question === "yes"){
        console.log("Correct!")
        i++;
    }else {
        console.log(`'${question}' is wrong answer ;(. Correct answer was '${randNumber %2 ? 'no' : 'yes'}'. \n Let's try again, ${name}`);
        return;
    }
    
     
}
console.log(`Congratulations, ${name}! `);
}

export default even;