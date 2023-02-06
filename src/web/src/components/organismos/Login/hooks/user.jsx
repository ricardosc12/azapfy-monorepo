import { getKey, toArray } from "@/utils/object"
import { load } from "@/api/Auth"
import timezone from "@/utils/timezone"
import { getModules } from "@/utils/auth"
import CookieStorage from "@/utils/CookieStorage"


export default async function createDataUser(response, setAuth){

        if(!response.ok) return {status: false,mensagem: "Estabelecimento de conxeção mal sucedido"}

        const message = response.data.mensagem

        if(!response.data.status) return {status:false, mensamge: message}

        const data = response.data.dados

        const {usuario, grupos} = data

        let activeGroup = getKey(grupos)

        CookieStorage.setModules(getModules(activeGroup.data, true).toString())

        if (usuario.super_user) {
            const requestData = {
                grupo_emp: activeGroup.name,
                timezone: timezone(),
            };

            await load(requestData).then((response) => {
                if (!response.ok) return { status:false, mensamge: 'Erro interno !' };

                if (!response.data.status) {
                    return { status:false, mensamge: `Não foi possível carregar o grupo '${activeGroup.name}'` };;
                }

                activeGroup = {
                    ...activeGroup,
                    data: response.data.dados,
                };

                grupos[activeGroup.name] = response.data.dados;
            });
        }

        if(!activeGroup) return { status:false, mensagem: 'Este usuário não está registrado em nenhuma empresa' }

        const bases = toArray(activeGroup.data.bases).map((base) => ({
            active: true,
            name: base.id,
            sigla: base.data.sigla,
            cidade: base.data.cidade,
            cnpjs: base.data.cnpjs,
        }));

        const { access_token, refresh_token, ...rest } = usuario;

        const responseData = {
            ...rest,
            cnpjs: usuario.cnpjs,
            grupos: grupos,
            grupo_ativo: activeGroup.name,
            bases,
            sem_base: true,
        };

        setAuth(responseData)
        
        return {status: true}
    


}