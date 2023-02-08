import api from './config'

export const getUsers = async (params) =>
    api.post("/api/usuarios/buscar", params);