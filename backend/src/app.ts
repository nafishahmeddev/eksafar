import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import Models from './models';
import InquaryFormRoute from './routes/inquiry';
const app = express();
const port =  process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//add routes
app.use(InquaryFormRoute);
async function main(){

  await Models();
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}

main();
