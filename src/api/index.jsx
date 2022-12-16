import axios from 'axios';

export const ApiRequest = axios.create({
   baseURL: "https://www.grupogeniale.com.br/geniale-decor-server-api",
   headers: {
      "Content-Type": "application/json",
   }

}); 


