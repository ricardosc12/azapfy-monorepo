import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { mergeDeepLeft } from "ramda";
import  secureLocalStorage  from  "react-secure-storage";
import { isDev } from '@/config';
import { isDebugMod } from './config';

import createAuth from './Auth';
import createLogo from './Logo';

const store = (set) => ({
    auth: createAuth(set),
    logo: createLogo(set)
});

const config=()=>persist(immer(store), {
	name: "token",
	storage: createJSONStorage(() => localStorage),
	merge: (persistedState, currentState) =>
		mergeDeepLeft(persistedState, currentState)
})

const useStore = (isDev||isDebugMod())?create(devtools(config())):create(config());

export default useStore