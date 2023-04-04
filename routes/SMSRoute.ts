import express,{Application, Request, Response} from "express";
import SMSService from "../service/SMSService";
import { SMSInterface } from '../interfaces/SMSInterface';

export default class SmsRoute {

    private app : Application;
    private service : SMSService;

    constructor(app : Application) {
        this.app = app;
        this.service = SMSService.getInstance();
        

        app.post('/enviarSMS', async (request, response) => {

            const sms : SMSInterface = {
                telefonoDestino: request.body.telefonoDestino,
                mensaje: request.body.mensaje,
                codigoPais: request.body.codigoPais
            }

            const call = await this.service.enviarSMS(sms);
            response.send(call);
        });
    }
}