import { isEmpty } from "./object";

export function getGroup(auth) {
    const activeGroup = auth.grupos[auth.grupo_ativo];

    return {
        ...activeGroup,
        getEmpresa: () => ({
            ...activeGroup.emp,
            isTransportadora: () =>
                activeGroup.emp.tipo.toLowerCase() === "transportadora",
            isDistribuidora: () =>
                activeGroup.emp.tipo.toLowerCase() === "distribuidora",
        }),
        getUser: () => ({
            ...activeGroup.user,
            isGroup(group = "") {
                return (
                    activeGroup.user.grupo.toLowerCase() === group.toLowerCase()
                );
            },

            isGroupAtivos() {
                return (
                    activeGroup.user.grupo.toLowerCase() === "embarcador" ||
                    activeGroup.user.grupo.toLowerCase() === "entregador" ||
                    activeGroup.user.grupo.toLowerCase() === "destinatario"
                );
            },
        }),
    };
}

export function getBases(auth, { active = false, name = false } = {}) {
    return auth.bases
        .filter((base) => (active === true ? base.active : true))
        .map((base) => (name === true ? base.name : base));
}

export function getModules(auth,login=false){

    const modules = {}

    if(login) {
        if(isEmpty(auth.bases)) return []
        
        Object.values(auth.bases).forEach(base => {
            try {
                if(!isEmpty(base.modulos)) {
                    Object.entries(base.modulos).forEach(([name, {ativo}]) => {
                        if(ativo) modules[name] = name
                    });
                }   
            }catch (erro) {console.error("erro ao adicionar módulo da base: "+sigla,erro)}
        });   
    }

    else {
        const bases = getGroup(auth)?.bases
        const activeBases = getBases(auth,{active:true}).map(bases=>bases.sigla)

        if(!bases || isEmpty(bases)) return []

        try {
            activeBases.forEach(sigla => {
                try {
                    const base = bases[sigla]
                    if(!isEmpty(base.modulos)) {
                        Object.entries(base.modulos).forEach(([name, {ativo}]) => {
                            if(ativo) modules[name] = name
                        });
                    }   
                }catch (erro) {console.error("erro ao adicionar módulo da base: "+sigla,erro)}
            });        
        }
        
        catch (erro) {
            console.error("erro ao adicionar módulos: ",erro)
        }
    }

    return Object.values(modules)
}