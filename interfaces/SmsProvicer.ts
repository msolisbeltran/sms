import {SMSInterface} from './SMSInterface';

export interface SmsProvider{

    enviarSMS(arg: SMSInterface):Promise<string>;

}