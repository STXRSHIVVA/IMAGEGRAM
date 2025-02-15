import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDb() {
    try {
        await mongoose.connect(DB_URL)
    } catch (error) {
        console.log("Somethins wen t wrong");
        console.log(error);
    }
}