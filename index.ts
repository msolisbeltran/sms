import express,{Application, Request, Response} from "express";
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import bodyParser from 'body-parser';
import SmsRoute from "./routes/SMSRoute";

const app : Application = express();
const PORT = 3000;

app.use( cors() );
app.use( express.json() )
app.use(bodyParser.json())

const smsRoute = new SmsRoute(app);

app.listen(PORT, ()=>{ console.log(`ONLINE EN PUERTO: `+ PORT) })
