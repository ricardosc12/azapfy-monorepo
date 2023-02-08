

//auth
const createAuth = (set) => ({
    change:true,
    setAuth: (payload) => set(state=>{
        state.auth = {...state.auth, ...payload}
    }),
    update:() => set(state=>{
        state.auth.bases[0].active = !state.auth.bases[0].active
    }),

})

export default createAuth