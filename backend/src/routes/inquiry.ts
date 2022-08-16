import { application, Handler } from "express";
import { Router } from "express";
import moment from "moment";
import Inquiry from "../models/inquiry";
const router = Router()

router.post("/inquiry", async (req: any, res: any) => {
    try {
        const { name, mobile, email, noOfPerson, destination, travellingDate } = req.body;
        let inquiry = await new Inquiry({
            name: name,
            mobile: mobile,
            email: email,
            noOfPerson: noOfPerson,
            destination: destination,
            travellingDate: travellingDate,
        }).save()

        return res.json({
            resultCode: 200,
            message: "Successfully saved data"
        });
    } catch (e) {
        return res.status(400).json({
            resultCode: 400,
            message: "Something went wrong"
        });
    }

    
   
})

export default router;