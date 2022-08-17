import colors from "colors";
export default function (req: any, res: any, next){
    if (req.id) {
        //return next();
    }
    const middle_count = req.middle_count ? req.middle_count + 1 : 1;
    const id = req.id ?? Math.floor(Math.random() * 99999);
    const resDotSendInterceptor = (res, send) => (content) => {
        res.contentBody = content;
        res.send = send;
        res.send(content);
    };
    res.send = resDotSendInterceptor(res, res.send);
    res.on("finish", () => {
        console.log(colors.yellow(`======== REQUEST START : `), colors.bgRed(" ID: " + id + " - " + middle_count + " "));
        console.log(colors.bgYellow(req.method)+ colors.bgGreen(req.originalUrl));
        console.log(colors.blue("HEADER"), ": ", req.headers);
        console.log(colors.blue("PARAMS"), ": ", req.params);
        console.log(colors.blue("QUERY "), ": ", req.query);
        console.log(colors.blue("BODY  "), ": ", req.body);
        console.log(colors.blue(`RESPONSE`));
        let resBody: any = null;
        try {
            resBody = JSON.parse(res.contentBody);
        } catch (e) {
            resBody = res.contentBody;
        }
        console.dir(resBody, { depth: null, colors: true })
        console.log(colors.yellow(`======== REQUEST END : `), colors.bgRed(" ID:"+ id + "-"+ middle_count), "\n");
    });

    req.id = id;
    req.middle_count = middle_count;
    next();
};