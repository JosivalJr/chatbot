export default {
    greetins: [
        `Hola, soy VM-D26. Estoy aquí para ayudar con cualquier pregunta o problema que pueda tener.`,
        `Para iniciar nuestro servicio necesitaré parte de su información. ¿Vamos allá?!`
    ],
    questions: {

        fname:{
            question: '¿Cual es tu nombre?',
            invalid: (input) => { return `No pude identificar '${input}' como un nombre válido.` }
        },

        lname: {
            question: '¿Y tu apellido?',
            invalid: (input) => { return `No pude identificar '${input}' como un nombre válido.` }
        },

        rg: {
            question: 'Ahora necesitaremos su número de documento de identidad, ingrese solo sus números de RG.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `No pude identificar su número de identificación. Ingrese los 7 dígitos de su RG sin ningún tipo de puntuación.`;

                return `No pude identificar el número '${input}' como una identificación válida. Por favor ingrese una identificación válida.`;
            }
        },

        uf: {
            question: 'Ahora, escriba la abreviatura del Organismo Emisor de Documentos:',
            invalid: (input) => { return `No pude identificar '${input}' como una agencia emisora válida, escriba las iniciales de la agencia emisora que deben contener entre 2 y 10 caracteres.` }
        },

        cpf: {
            question: 'Ahora necesitamos su CPF, ingrese correctamente solo los 11 dígitos de su CPF.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `No pude identificar el número de CPF. Ingrese solo los 11 dígitos de su CPF sin ningún tipo de puntuación.`;

                return `No pude identificar el número '${input}' como un CPF válido. Introduzca un CPF válido.`;
            }
        },

        nationality: {
            question: '¿Cuál es su nacionalidad?',
            invalid: (input) => { return `No pude identificar '${input}' como una nacionalidad válida.` }
        },

        birthdate: {
            question: 'Introduzca su fecha de nacimiento en el formato DD/MM/YYYY.',
            invalid: (input) => { return `No pude identificar '${input}' como una fecha válida. Ingrese su fecha de nacimiento en formato MM/DD/AAAA. Ejemplo: 01/01/2001` }
        },

        gender: {
            question: 'Dinos tu Género. (Hombre o Mujer):',
            invalid: (input, type) => {

                if(type == 'notFilled') return `No pude identificar una respuesta. Indique si es Hombre o Mujer.`;

                return `No pude identificar una respuesta. Sabemos que cada persona tiene sus individualidades, y que se trata de información sensible, pero te rogamos que nos informes si eres Hombre o Mujer`;
            }
        },

        address: {
            question: 'Ahora dinos tu dirección. (Ejemplo: Avenida Presidente Kennedy, 101 - Kobrasol)',
            invalid: (input) => { return `No pude identificar '${input}' como una dirección válida.` }
        },

        zipcode: {
            question: 'Dinos tu código postal:',
            invalid: (input, type) => {

                if(type == 'notFilled') return `
                No pude identificar el código postal. Ingrese solo los 11 dígitos de su código postal sin ningún tipo de puntuación.`;

                return `No pude identificar el número '${input}' como un código postal válido. Por favor ingrese un código postal válido.`;

            }
        },

        city: {
            question: '¿En qué ciudad resides?',
            invalid: (input) => { return `No pude identificar tu respuesta. Por favor, háganos saber en qué ciudad vive.` }
        },

        state: {
            question: '¿En qué estado resides?',
            invalid: (input) => { return `No pude identificar tu respuesta. Por favor, háganos saber en qué estado reside.` }
        },

        cellphone: {
            question: 'Díganos su Número de Celular para contactar usando código de área y prefijo 9. Ejemplo (48) 99999-9999',
            invalid: (input, type) => {

                if(type == 'notFilled') return `No pude identificar tu respuesta. Por favor ingrese su Celular. Ejemplo: (48) 99999-9999.`;

                return `No pude identificar el número '${input}' como un teléfono válido. Ingresa tu Celular con código de área y prefijo 9 (48) 99999-9999`;

            }
        },

        homephone: {
            question: 'Indícanos tu Teléfono Residencial para contactar usando código de área y prefijo 9. Ejemplo (48) 99999-9999.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `No pude identificar tu respuesta. Ingrese su teléfono residencial. Ejemplo: (48) 99999-9999.`;

                return `No pude identificar el número '${input}' como un teléfono válido. Ingresa tu Teléfono Residencial con código de área y prefijo 9 (48) 99999-9999.`;

            }
        },

        workphone: {
            question: 'Dinos tu Teléfono de Trabajo para contactar usando código de área y prefijo 9. Ejemplo (48) 99999-9999.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `No pude identificar tu respuesta. Ingrese su Teléfono de Trabajo. Ejemplo: (48) 99999-9999.`;

                return `No pude identificar el número '${input}' como un Teléfono de Trabajo. Ingresa tu Teléfono Residencial con código de área y prefijo 9 (48) 99999-9999.`;

            }
        },

        email: {
            question: 'Por último, háganos saber su dirección de correo electrónico.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `No pude identificar tu respuesta. Por favor, háganos saber su correo electrónico.`;

                return `No pude identificar '${input}' como un correo electrónico válido. Por favor introduzca una dirección de correo electrónico válida. Ejemplo: joao@gmail.com`;

            }
        },
    }
};