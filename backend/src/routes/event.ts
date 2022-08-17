import { Router } from "express";
import multer from "multer";
import path from "path";
import Event from "../models/event";
const router = Router()
const upload = multer({ dest: path.resolve(path.join(process.env.ROOT_DIR, 'uploads/' ))})

router.get("/", async (req: any, res: any) => {
    try {
        const events = await Event.find();
        return res.json({
            resultCode: 200,
            message: "Successful",
            data: events
        });
    } catch (e) {
        return res.status(400).json({
            resultCode: 400,
            message: "Something went wrong"
        });
    }
})

router.post("/", upload.single("banner"),async (req: any, res: any) => {
    try {
        const { name, date, description} = req.body;
        const event = await new Event({name, date, description}).save();
        return res.json({
            resultCode: 200,
            message: "Successfully saved event",
            data: event._id
        });
    } catch (e) {
        return res.status(400).json({
            resultCode: 400,
            message: "Something went wrong"
        });
    }
})




router.get("/:id", async (req: any, res: any) => {
    try {
        const event = await Event.findOne({_id: req.params.id});
        return res.json({
            resultCode: 200,
            message: "Successful",
            data: event
        });
    } catch (e) {
        return res.status(400).json({
            resultCode: 400,
            message: "Something went wrong"
        });
    }
})

router.put("/:id", async (req: any, res: any) => {
    try {
        await Event.updateOne({_id: req.params.id},{...req.body});
        return res.json({
            resultCode: 200,
            message: "Successfully updated event",
        });
    } catch (e) {
        return res.status(400).json({
            resultCode: 400,
            message: "Something went wrong"
        });
    }
})

router.delete("/:id", async (req: any, res: any) => {
    try {
        await Event.deleteOne({_id: req.params.id});
        return res.json({
            resultCode: 200,
            message: "Successfully deleted event",
        });
    } catch (e) {
        return res.status(400).json({
            resultCode: 400,
            message: "Something went wrong"
        });
    }
})



export default router;