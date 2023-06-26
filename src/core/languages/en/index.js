export default {
    greetins: [
        `Hello, I'm VM-D26. I'm here to help with any questions or problems you may have.`,
        `To start our service I will need some of your information. Let's go?!`
    ],
    questions: {

        fname:{
            question: 'What is your name?',
            invalid: (input) => { return `I was unable to identify '${input}' as a valid name.` }
        },

        lname: {
            question: 'And your last name?',
            invalid: (input) => { return `I was unable to identify '${input}' as a valid name.` }
        },

        rg: {
            question: 'Now we will need your Identity Document Number, please enter only your RG numbers.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `I was unable to identify your RG number. Please enter the 7 digits of your RG without any punctuation.`;

                return `I was unable to identify the number '${input}' as a valid RG. Please enter a valid RG.`;
            }
        },

        uf: {
            question: 'Now, type the abbreviation of the Document Issuing Body:',
            invalid: (input) => { return `I could not identify '${input}' as a valid Issuing Agency, please type the initials of the Issuing Agency which must contain between 2 and 10 characters.` },
            valid: 'Great.'
        },

        cpf: {
            question: 'Now we need your CPF, please enter correctly only the 11 digits of your CPF.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `I could not identify the CPF number. Please enter only the 11 digits of your CPF without any punctuation.`;

                 return `I was unable to identify the number '${input}' as a valid CPF. Please enter a valid CPF.`;
            }
        },

        nationality: {
            question: 'What is your Nationality?',
            invalid: (input) => { return `I was unable to identify '${input}' as a valid Nationality.` }
        },

        birthdate: {
            question: 'Enter your date of birth in DD/MM/YYYY format.',
            invalid: (input) => { return `I was unable to identify '${input}' as a valid date. Please enter your date of birth in MM/DD/YYYY format. Example: 01/01/2001` }
        },

        gender: {
            question: 'Tell us your Gender. (Male or female):',
            invalid: (input, type) => {

                if(type == 'notFilled') return `I couldn't identify an answer. Please inform if you are Male or Female.`;

                return `I couldn't identify an answer. We know that each person has their individualities, and that this is sensitive information, but we kindly ask you to inform us if you are Male or Female`;
            }
        },

        address: {
            question: 'Now tell us your Address. (Example: Avenida Presidente Kennedy, 101 - Kobrasol)',
            invalid: (input) => { return `I was unable to identify '${input}' as a valid Address.` }
        },

        zipcode: {
            question: 'Tell us your zip code:',
            invalid: (input, type) => {

                if(type == 'notFilled') return `I was unable to identify the zip code. Please enter only the 11 digits of your zip code without any punctuation.`;

                return `I was unable to identify the number '${input}' as a valid zip code. Please enter a valid zip code.`;

            }
        },

        city: {
            question: 'Which City do you reside?',
            invalid: (input) => { return `I couldn't identify your answer. Please let us know which city you live in.` }
        },

        state: {
            question: 'Which State do you reside?',
            invalid: (input) => { return `I couldn't identify your answer. Please let us know which state you reside in.` }
        },

        cellphone: {
            question: 'Tell us your Cell Phone to contact using area code and prefix 9. (Example (48) 99999-9999)',
            invalid: (input, type) => {

                if(type == 'notFilled') return `I couldn't identify your answer. Please enter your Cell Phone. (Example: (48)99999-9999)`;

                return `I was unable to identify the number '${input}' as a valid phone number. Please enter your Cell Phone with area code and prefix 9 (48) 99999-9999`;

            }
        },

        homephone: {
            question: 
            'Tell us your Residential Phone to contact using area code and prefix 9. Example (48) 99999-9999',
            invalid: (input, type) => {

                if(type == 'notFilled') return `I couldn't identify your answer. Please enter your Residential Phone. (Example: (48) 99999-9999)`;

                return `I was unable to identify the number '${input}' as a valid phone number. Please enter your Residential Phone with area code and prefix 9 (48) 99999-9999`;

            }
        },

        workphone: {
            question: 'Tell us your Work Phone number to contact using area code and prefix 9. (Example (48) 99999-9999)',
            invalid: (input, type) => {

                if(type == 'notFilled') return `I couldn't identify your answer. Please enter your Work Phone. (Example: (48) 99999-9999)`;

                return `I was unable to identify the number '${input}' as a valid phone number. Please enter your Work Phone with area code and prefix 9 (48) 99999-9999`;

            }
            
        },

        email: {
            question: 'Lastly, let us know your email address.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `I couldn't identify your answer. Please let us know your email.`;

                return `I could not identify '${input}' as a valid Email. Please enter a valid Email. Example: joao@gmail.com`;

            }
        },
    }
};