import mongoose from "mongoose";

const {Schema} = mongoose;

export const contactSchema = new Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    rg: {
        type: String,
        require: true
    },
    uf: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    nationality: {
        type: String,
        require: true
    },
    birthdate: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    cep: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    cellphone: {
        type: String,
        require: true
    },
    homephone: {
        type: String,
        require: true
    },
    workphone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    
},{
    timestamps: true 
})

export const Contact = mongoose.model("Contact", contactSchema);