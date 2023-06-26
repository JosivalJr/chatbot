// const { Contact: ContactModel } = require("../../models/Contacts")
import { Contact as ContactModel } from "../../models/Contacts.js";

export default {

    create: async(infos) => {
        try {
            const contact = {
                fname: infos.fname,
                lname: infos.lname,
                rg: infos.rg,
                uf: infos.uf,
                cpf: infos.cpf,
                nationality: infos.nationality,
                birthdate: infos.birthdate,
                gender: infos.gender,
                address: infos.address,
                cep: infos.cep,
                city: infos.city,
                state: infos.state,
                cellphone: infos.cellphone,
                homephone: infos.homephone,
                workphone: infos.workphone,
                email: infos.email
            }

            const response = await ContactModel.create(contact)

            console.log(response);

        } catch (error){

            console.log(error);
        }
    }

}