import mongoose from "mongoose";

export async function connectToMongo(){
    try {
        await mongoose.connect("mongodb+srv://admin:cdPVCqzLVeQewBux@cluster0.ioilxuy.mongodb.net/mgmt_db?retryWrites=true&w=majority");
        console.log("Connect to the DataBase");
        
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}