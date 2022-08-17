import mongoose from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface Event {
    name: string,
    date: Date,
    description: string,
    destination: string,
    banner: String
}

// 2. Create a Schema corresponding to the document interface.
const EventSchema = new mongoose.Schema<Event>({
    name: String,
    date: Date,
    description: String,
    destination: String,
    banner: String
});
const Event = mongoose.model<Event>('Event', EventSchema);
export default Event;