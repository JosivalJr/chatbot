export function nameValidator (input) {
    const regExp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

    if(!input) return false;

    if(input.length < 3 || input.length > 25) return false;

    if(!input.match(regExp)) return false;

    return true;

}

export function rgValidator (input) {

    if(!input) return 'notFilled';
    
    const rg = input.replace(/\D/g,'');

    if(rg.length < 7 || rg.length > 9) return 'Invalid';

    return true;
}

export function cpfValidator (input) {

    let cpf = input.replace(/\D/g, '');
  

    if (cpf.length !== 11) return 'notFilled';
  
    //Checks if all digits are equal
    if (/^(\d)\1+$/.test(cpf)) return 'Invalid';
  
    // Validation of check digits
    var sum = 0;
    var rest = 0;
  
    for (var i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.charAt(i - 1), 10) * (11 - i);
    }
  
    rest = (sum * 10) % 11;
  
    if (rest === 10 || rest === 11) {
        rest = 0;
    }
  
    if (rest !== parseInt(cpf.charAt(9), 10)) return 'Invalid';
  
    sum = 0;
  
    for (var j = 1; j <= 10; j++) {
      sum = sum + parseInt(cpf.charAt(j - 1), 10) * (12 - j);
    }
  
    rest = (sum * 10) % 11;
  
    if (rest === 10 || rest === 11) {
        rest = 0;
    }
  
    if (rest !== parseInt(cpf.charAt(10), 10)) return 'Invalid';
  
    return true;
  }


export function birthDateValidator (input) {

    const regExp = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!regExp.test(input)) return false;

    // Get components of date
    var parts = input.split('/');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Checks components of dates
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 0 || year > 9999) {
        return false;
    }

    return true;
}

export function genderValidator (input) {

    if(!input) return 'notFilled';
    
    const gender = input.toLowerCase();

    const validGenders = ['female', 'feminino', 'mujer', 'male', 'masculino', 'hombre'];

    if(!validGenders.includes(gender)) return 'Invalid';

    return true;
}

export function zipcodeValidator (input) {

    input = input.toString();
    const cep = input.replace(/\D/g, '');

    if (!cep) return 'notFilled';

    const regExp = /^[0-9]{5}-?[0-9]{3}$/;

    if (cep.length !== 8)  return 'Invalid';

    return regExp.test(cep);

}

export function addressValidator (input) {

    // Checks if the string contains any alphanumeric characters
    const regExpAlphanumeric = /[a-zA-Z0-9]/;
    if (!regExpAlphanumeric.test(input))  return 'notFilled';
  
    // Checks if the string contains at least one number
    var regExpNumber= /\d/;
    if (!regExpNumber.test(input))  return 'Invalid';
  
    // Checks if the string contains at least one word
    const address = input.split(' ');
    if (address.length < 1)  return 'Invalid';
  
    // Checks if the string contains any common separator such as comma or hyphen
    var regExpSeparator = /[,-]/;
    if (!regExpSeparator.test(input))  return 'Invalid';
  
    return true;
}

export function telephoneValidator (input) {

    const telephone = input.toString();

    if (!telephone) return 'notFilled';

    const regExp = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;

    return regExp.test(telephone);
}

export function emailValidator (input) {

    if(input == '') return 'notFilled';
    
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regExp.test(input);
}


export function stringValidator (input, len) {
    
    if(input == '') return false;
    
    if(input.length < len[0] || input.length > len[1]) return false;

    return true;
}