import CryptoJS from 'crypto-js'

class CookieStorage {

    static setModules(modules){
        document.cookie = `_module=${CryptoJS.AES.encrypt(modules, "6c35aebeff1d62a35881af369772237b").toString()}; max-age=315360000`
    }

    static getModules() {
        return CryptoJS.AES.decrypt(CookieStorage.getCookie('_module'), "6c35aebeff1d62a35881af369772237b").toString(CryptoJS.enc.Utf8).split(',');
    }

    static getModulesFrom(modules) {
        return CryptoJS.AES.decrypt(modules, "6c35aebeff1d62a35881af369772237b").toString(CryptoJS.enc.Utf8).split(',');
    }

    static getRefreshToken() {
        return localStorage.getItem("refresh_token");
    }

    static clearToken() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        document.cookie = "_logged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie = "_module=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }

    static getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

}

export default CookieStorage