// getting-started.js
import mongoose from "mongoose";
import colors from "colors";
import fs from "fs";
import path from "path";
const moduleName = colors.bgGreen("DATABASE") + " =>"
const readFiles = async (baseDir) => {
    const files = fs.readdirSync(baseDir);
    for (const file of files) {
        const filePath = path.resolve(path.join(baseDir, file));
        const fileStat = await fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            await readFiles(filePath);
        }
        //
        if (file === "index.ts" || file === "index.js" || fileStat.isDirectory) {
            continue;
        }
        //
        await import(filePath);
        console.log(moduleName, "Initializing model", colors.green(path.parse(file).name));
    }
}
export default async function Models() {
    console.log(colors.blue("======= Database ========"))
    try {
        await readFiles(__dirname);
        console.info(moduleName, "Connecting to mongo server")
        await mongoose.connect(process.env.MONGO_URL);
        console.info(moduleName, "Connected to mongo server")
    } catch (e) {
        console.error(moduleName, "Error while connecting to mongo server")
    }
    console.log("\n")
}
