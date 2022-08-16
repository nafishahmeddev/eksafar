// getting-started.js
import mongoose from "mongoose";
import Inquiry from "./inquiry";
export default async function Models() {
    console.log("Connecting to", process.env.MONGO_URL)
    return await mongoose.connect(process.env.MONGO_URL);
}
