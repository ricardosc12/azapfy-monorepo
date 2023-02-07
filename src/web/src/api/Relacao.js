import api from "./config";

export const getMotoristas = async (params) =>
    api.post("/api/romaneios/motoristas", params).then(res=>res.data);