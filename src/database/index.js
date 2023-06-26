import mongoose from "mongoose";

export default async function main (){

    try{

        mongoose.set("strictQuery", true)

        await mongoose.connect(`mongodb+srv://root:f7OaYGKfT3hKWE72@cluster0.58bqjh8.mongodb.net/`);

        console.log("connected");

    } catch (error) {
        console.log('Error:', error)
    }
}

