import en from "../languages/en/index.js";
import pt from "../languages/pt/index.js";
import es from "../languages/es/index.js";



import * as validator from '../validators/validators.js';

const messages = {
    en,
    pt,
    es
}

export const startQuestions =[
    {
        type: 'list',
        name: 'language',
        message: 'Select your language:',
        choices: ['English', 'Portuguese', 'Spanish'],
        default: 'English'
    },
    {
        type: 'list',
        name: 'mode',
        message: 'Select your mode interaction:',
        choices: ['UI', 'CLI'],
        default: 'CLI' 
    }
];

export function personalQuestions (language){

    const questions =  [
        {
            type: 'input',
            name: 'fname',
            message: messages[language].questions.fname.question,
            validate: function (input) {

                const validated = validator.nameValidator(input);

                if(validated === true) return true;

                return messages[language].questions.fname.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'lname',
            message: messages[language].questions.lname.question,
            validate: function (input) {

                const validated = validator.nameValidator(input);

                if(validated === true) return true;

                return messages[language].questions.lname.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'rg',
            message: messages[language].questions.rg.question,
            validate: function (input) {

                const validated = validator.rgValidator(input);

                if(validated === true) return true;

                return messages[language].questions.rg.invalid(input, validated);
                
            }
        },
        {
            type: 'input',
            name: 'uf',
            message: messages[language].questions.uf.question,
            validate: function (input) {

                const validated = validator.stringValidator(input, [2, 35]);

                if(validated === true) return true;

                return messages[language].questions.uf.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'cpf',
            message: messages[language].questions.cpf.question,
            validate: function (input) {

                const validated = validator.cpfValidator(input);

                if(validated === true) return true;

                return messages[language].questions.cpf.invalid(input, validated);
                
            }
        },
        {
            type: 'input',
            name: 'nationality',
            message: messages[language].questions.nationality.question,
            validate: function (input) {

                const validated = validator.stringValidator(input, [3, 30]);

                if(validated === true) return true;

                return messages[language].questions.nationality.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'birthdate',
            message: messages[language].questions.birthdate.question,
            validate: function (input) {

                const validated = validator.birthDateValidator(input);

                if(validated === true) return true;

                return messages[language].questions.birthdate.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'gender',
            message: messages[language].questions.gender.question,
            validate: function (input) {

                const validated = validator.genderValidator(input);

                if(validated === true) return true;

                return messages[language].questions.gender.invalid(input, validated);
                
            }
        }
    ];

    return questions;
}

export function addressQuestions (language){

    const questions = [
        {
            type: 'input',
            name: 'address',
            message: messages[language].questions.address.question,
            validate: function (input) {

                const validated = validator.addressValidator(input, [3, 30]);

                if(validated === true) return true;

                return messages[language].questions.address.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'zipcode',
            message: messages[language].questions.zipcode.question,
            validate: function (input) {

                const validated = validator.zipcodeValidator(input, [3, 30]);

                if(validated === true) return true;

                return messages[language].questions.zipcode.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'city',
            message: messages[language].questions.city.question,
            validate: function (input) {

                const validated = validator.stringValidator(input, [3, 30]);

                if(validated === true) return true;

                return messages[language].questions.city.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'state',
            message: messages[language].questions.state.question,
            validate: function (input) {

                const validated = validator.stringValidator(input, [3, 30]);

                if(validated === true) return true;

                return messages[language].questions.state.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'cellphone',
            message: messages[language].questions.cellphone.question,
            validate: function (input) {

                const validated = validator.telephoneValidator(input);

                if(validated === true) return true;

                return messages[language].questions.cellphone.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'homephone',
            message: messages[language].questions.homephone.question,
            validate: function (input) {

                const validated = validator.telephoneValidator(input);

                if(validated === true) return true;

                return messages[language].questions.homephone.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'workphone',
            message: messages[language].questions.workphone.question,
            validate: function (input) {

                const validated = validator.telephoneValidator(input);

                if(validated === true) return true;

                return messages[language].questions.workphone.invalid(input);
                
            }
        },
        {
            type: 'input',
            name: 'email',
            message: messages[language].questions.email.question,
            validate: function (input) {

                const validated = validator.emailValidator(input);

                if(validated === true) return true;

                return messages[language].questions.email.invalid(input);
                
            }
        }
    ];

    return questions;
}