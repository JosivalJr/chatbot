import inquirer from 'inquirer';
import { exec } from 'child_process';

import connection from "./src/database/index.js";
import contactController from "./src/controllers/Contact/index.js"

import { addressQuestions, personalQuestions , startQuestions } from './src/core/CLI/index.js';
import en from "./src/core/languages/en/index.js";
import pt from "./src/core/languages/pt/index.js";
import es from "./src/core/languages/es/index.js";


connection();

start();

const greetins = {
    en: en.greetins,
    pt: pt.greetins,
    es: es.greetins
}

function start(){

    console.log(
    `

    Welcome to VMD Credit chatbot, im VM-D26 and I will be your guide.

    Questions will appear for you on the lines below, some will ask you to enter your data, read carefully to fill in correctly, after just pressing the Enter key. But don't worry, our VM-D26 checks that you filled it in correctly, otherwise it will ask you to ask the question again.

    Some questions will be multiple choice, use the arrow keys on your keyboard to select the option that suits you best, and press Enter.

    If at any time you want to stop filling just press CTRL + C.
        
    `
    );

    inquirer.prompt(startQuestions).then(answers => {

        const languages = {
            English: 'en',
            Portuguese: 'pt',
            Spanish: 'es'
        };

        if(answers.mode === 'UI'){
            startUI();
        } else {
            startCLI(languages[answers.language]);
        }

    });
}

function startUI() {
    console.log(
        `

        You can access VM-D26 interface at
    
        http://localhost:5173/
            
        `
    );

    const command = 'npm run dev';
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(
                `
                Error to execute '${command}' command.

                ${stderr}
                `
            );
            return;
        }

        if (stderr) {
            console.error(
                `
                Error to execute '${command}' command.

                ${stderr}
                `
            );
            return;
        }
    });
}

function startCLI(language){

    const pQuestions = personalQuestions(language);
    const aQuestions = addressQuestions(language);
    var data = {};

    greetins[language].forEach(greeting => {
        console.log('');
        console.log(greeting);
        console.log('');
    });

    inquirer.prompt(pQuestions).then(answers => {
        data = {...answers}
        inquirer.prompt(aQuestions).then(answers => {
            data = {...data, ...answers}          

            contactController.create(data);

            console.log(
                `


                
            
                Perfect, we're done here, your registration was successfully completed.


                To exit, just press CTRL + C


                    
                `
            )

        })
    })
}