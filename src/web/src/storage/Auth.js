

//auth
const createAuth = (set) => ({
    setAuth: (payload) => set(state=>{
        state.auth = {...state.auth, ...payload}
    })
})

export default createAuth