import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import path from "path"
import Models from './models';
import router from "./routes/router";
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
async function main() {
  process.env.ROOT_DIR = path.resolve(path.join(__dirname, "../"));
  //initialize mongo
  await Models();
  await router(app);


  app.use(express.static(path.resolve(path.join(__dirname, "../../frontend/dist"))));
  app.use("**", express.static(path.resolve(path.join(__dirname, "../../frontend/dist/index.html"))));

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}

main();
