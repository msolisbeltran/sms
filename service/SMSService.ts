import config from '../config.json';
import { SMSInterface } from '../interfaces/SMSInterface';
import { SmsProvider } from '../interfaces/SmsProvicer';
import RomberProvider from './providers/RomberProvider';

export default class SMSService {

    private static instance: SMSService;
    private provider : SmsProvider;
    
    constructor() { 
        switch ( config.serviciosSMS ) {
            case 3:
                this.provider = new RomberProvider();
                break;
            default:
                throw new Error("Error, no hay configurado un proveedor de servicios.");
        }
     }

    static getInstance() {
        if (!SMSService.instance) {
            SMSService.instance = new SMSService();
        }

        return SMSService.instance;
    }

    enviarSMS(sms : SMSInterface) {
        return this.provider.enviarSMS(sms);
    }

}