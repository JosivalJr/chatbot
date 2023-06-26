export default {
    greetins: [
        `Olá, Eu sou o VM-D26. Estou aqui para ajudar com qualquer dúvida ou problema que você tenha.`,
        `Para iniciar nosso atendimento irei precisar de algumas de suas informações. Vamos lá?!`
    ],
    questions: {

        fname:{
            question: 'Qual o seu nome?',
            invalid: (input) => { return `Não consegui identificar '${input}' como um nome válido.` }
        },

        lname: {
            question: 'E o seu Sobrenome?',
            invalid: (input) => { return `Não consegui identificar '${input}' como um nome válido.` }
        },

        rg: {
            question: 'Agora iremos precisar do seu Número de Documento de Identidade, por favor digite apenas os números do seu RG.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `Não consegui identificar o número do seu Documento de Identididade. Por favor, insira os 7 dígitos do seu RG sem nenhuma pontuação.`;

                return `Não consegui identificar o Número '${input}' como um Documento de Identididade válido. Por favor, insira um RG válido.`;
            }
        },

        uf: {
            question: 'Agora, digite a sigla do Órgão Emissor do Documento:',
            invalid: (input) => { return `Não consegui identificar '${input}' como um Órgão Emissor válido, por favor digite a sigla do Órgão Emissor que deve conter entre 2 á 10 caracteres.` }
        },

        cpf: {
            question: 'Agora precisamos do seu CPF, por favor informe corretamente somente os 11 digitos do seu CPF.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `Não consegui identificar o número do CPF. Por favor, insira somente os 11 dígitos do seu CPF sem nenhuma pontuação.`;

                return `Não consegui identificar o número '${input}' como um CPF válido. Por favor, insira um CPF válido.`;
            }
        },

        nationality: {
            question: 'Qual a sua Nacionalidade?',
            invalid: (input) => { return `Não consegui identificar '${input}' como um Nacionalidade válida.` }
        },

        birthdate: {
            question: 'Digite a Data do seu Nascimento no formato DD/MM/AAAA.',
            invalid: (input) => { return `Não consegui identificar '${input}' como uma data válida. Por gentileza digite a sua Data de Nascimento no formato DD/MM/AAAA. Exemplo: 01/01/2001` }
        },

        gender: {
            question: 'Nos informe seu Sexo. (Masculino ou Feminino):',
            invalid: (input, type) => {

                if(type == 'notFilled') return `Não consegui identificar uma resposta. Por gentileza, informe se você é do sexo Masculino ou Feminino.`;

                return `Não consegui identificar uma resposta. Sabemos que cada pessoa tem suas individualides, e que essa é uma informação delicada, mas pedimos por gentileza que informe se você é do sexo Masculino ou Feminino`;
            }
        },

        address: {
            question: 'Agora nos informe seu Endereço. (Exemplo: Avenida Presidente Kennedy, 101 - Kobrasol)',
            invalid: (input) => { return `Não consegui identificar '${input}' como um Endereço válido.` }
        },

        zipcode: {
            question: 'Informe-nos o seu CEP:',
            invalid: (input, type) => {

                if(type == 'notFilled') return `Não consegui identificar o número do CEP. Por favor, insira somente os 11 dígitos do seu CEP sem nenhuma pontuação.`;

                return `Não consegui identificar o número '${input}' como um CEP válido. Por favor, insira um CEP válido.`;

            }
        },

        city: {
            question: 'Qual Cidade você reside?',
            invalid: (input) => { return `Não consegui identificar sua resposta. Por gentileza informe-nos em qual cidade você reside.` }
        },

        state: {
            question: 'Qual Estado você reside?',
            invalid: (input) => { return `Não consegui identificar sua resposta. Por gentileza informe-nos em qual Estado você reside.` }
        },

        cellphone: {
            question: 'Informe-nos qual seu Telefone de Celular para contato utilizando DDD e prefixo 9. Exemplo (48) 99999-9999',
            invalid: (input, type) => {

                if(type == 'notFilled') return `Não consegui identificar sua resposta. Por favor, digite seu Telefone Celular. Exemplo: (48) 99999-9999.`;

                return `Não consegui identificar o número '${input}' como um Telefone válido. Por favor, digite seu Telefone Celular com DDD e préfixo 9 (48) 99999-9999.`;

            }
        },

        homephone: {
            question: 'Informe-nos qual seu Telefone Residencial para contato utilizando DDD e prefixo 9. Exemplo (48) 99999-9999',
            invalid: (input, type) => {

                if(type == 'notFilled') return `Não consegui identificar sua resposta. Por favor, digite seu Telefone Residencial. Exemplo: (48) 99999-9999.`;

                return `Não consegui identificar o número '${input}' como um Telefone válido. Por favor, digite seu Telefone Residencial com DDD e préfixo 9 (48) 99999-9999.`;

            }
        },

        workphone: {
            question: 'Informe-nos qual seu Telefone de Trabalho para contato utilizando DDD e prefixo 9. Exemplo (48) 99999-9999',
            invalid: (input, type) => {

                if(type == 'notFilled') return `Não consegui identificar sua resposta. Por favor, digite seu Telefone de Trabalho. Exemplo: (48) 99999-9999.`;

                return `Não consegui identificar o número '${input}' como um Telefone válido. Por favor, digite seu Telefone de Trabalho com DDD e préfixo 9 (48) 99999-9999.`;

            }
        },

        email: {
            question: 'Por último, nos informe seu Email para contato.',
            invalid: (input, type) => {

                if(type == 'notFilled') return `Não consegui identificar sua resposta. Por favor, nos informe seu Email.`;

                return `Não consegui identificar '${input}' como um Email válido. Por favor, insira um Email válido. Exemplo: joao@gmail.com`;

            }
        },
    }
};