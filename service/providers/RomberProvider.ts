import { SMSInterface } from "../../interfaces/SMSInterface";
import { SmsProvider } from "../../interfaces/SmsProvicer";
import config from '../../config.json';
import axios, { AxiosResponse } from 'axios';

type GetResponse = {
    
  };

export default class RomberProvider implements SmsProvider {
    
    async enviarSMS(arg: SMSInterface): Promise<string> {
        const { data, status } = await axios.post<GetResponse, AxiosResponse>(
            config.romber.url + "?user=" + config.romber.usuario + "&password=" + config.romber.pass + "&number=" + arg.telefonoDestino  + "&message=" + arg.mensaje,
            {
                "user"    : config.romber.usuario,
                "password": config.romber.pass,
                "number"  : arg.telefonoDestino,
                "message" : arg.mensaje
            }
          );
        return data;
    }
  
  
}