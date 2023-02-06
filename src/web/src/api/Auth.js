import api from "./config";
import TokenStorage from "./TokenStorage";

export const signIn = async (params) => {
    const response = await api.post("/api/usuarios/entrar", params);
    if(response.status==200 && response.data?.dados.usuario) TokenStorage.setToken(response.data.dados.usuario)
    return new Promise(resolve=>{resolve(response)})
}

export const signOut = async (params) => {
    TokenStorage.clearToken()
}

export const load = async (params) =>
    api.post("/api/usuarios/carregarGrupo", params);

export const forgetPassword = async (params) =>
    api.post("api/usuarios/recuperarsenha/", params);

export const changePassword = async (params) =>
    api.post("api/usuarios/redefinir", params);

export const registerGroup = async (params) =>
    api.post("api/cadastro/pessoal/", params);

export const getDadosToken = async (params) =>
api.post("api/usuarios/buscarlead", params);
