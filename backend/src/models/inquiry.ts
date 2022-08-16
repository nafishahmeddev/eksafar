import mongoose from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface Inquiry {
    name: string,
    mobile: String,
    email: string,
    noOfPerson: number,
    destination: string,
    travellingDate: Date,

}

// 2. Create a Schema corresponding to the document interface.
const InquirySchema = new mongoose.Schema<Inquiry>({
    name: String,
    mobile: String,
    email: String,
    noOfPerson: Number,
    destination: String,
    travellingDate: Date,
});
const Inquiry = mongoose.model<Inquiry>('Inquiry', InquirySchema);
export default Inquiry;