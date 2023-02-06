import { create } from "apisauce";
import axios from "axios";
import { server } from "@/config";
import TokenStorage from "./TokenStorage";

let LOGOUT_FUNCTION = null;

export function setLogoutFunction(func) {
    if (LOGOUT_FUNCTION) return;

    LOGOUT_FUNCTION = func;
}

const API_TESTE = "http://c591-179-250-193-227.ngrok.io/"

const getHost=(host)=>{
    const hostname = window.location.hostname
    if(hostname.includes('web.azapfy')){
        return 'https://api3.azapfy.com.br'
    }
    else if(hostname.includes('127.0.0')){
        return 'http://homologacao3.azapfy.com.br'
    }
    else if (hostname.includes('testes.azapfy')){
        return 'http://testes.azapfy.com.br'
    }
    return host
}

const api = axios.create({
    baseURL: 'https://api3.azapfy.com.br',
    headers: { Accept: "application/json" },
});

api.interceptors.request.use(
    (config) => {
        const token = TokenStorage.getAccessToken();

        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// api.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     function (error) {
//         const originalRequest = error.config;

//         if (
//             error.response.status === 401 &&
//             originalRequest.url.includes("/api/usuarios/atualizartoken")
//         ) {
//             return Promise.reject(error);
//         }

//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;

//             return api
//                 .post("/api/usuarios/atualizartoken", {
//                     refresh_token: TokenStorage.getRefreshToken(),
//                 })
//                 .then((res) => {
//                     if (res.status === 200 && res.data.status) {
//                         const data = res.data.dados.token;

//                         TokenStorage.setToken(data);

//                         api.defaults.headers.common["Authorization"] =
//                             "Bearer " + TokenStorage.getAccessToken();

//                         return api(originalRequest);
//                     } else {
//                         LOGOUT_FUNCTION();
//                     }
//                 })
//                 .catch((err) => LOGOUT_FUNCTION());
//         }
//     }
// );

const sauce = create({ axiosInstance: api });

export default sauce;
