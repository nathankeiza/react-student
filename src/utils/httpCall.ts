import axios, { Method } from "axios";

const httpCall = (
    method: Method, 
    url: string, 
    data?: object | {[key: string]: any}
) => { 
    return axios({
       method: method,
       url: url,
       data: data, 
    });
}

export default httpCall; 