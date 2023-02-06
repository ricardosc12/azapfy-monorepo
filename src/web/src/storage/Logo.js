

//logo
const createLogo = (set) => ({
    url: '',
    setLogo: (logo) => set(state=>{
        state.logo.url = ''
    })
})

export default createLogo