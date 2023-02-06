import { useRouter } from 'next/router'
import Icon from "@pub/favicon.ico"
import Image from 'next/image'
import { signIn } from '@/api/Auth'
import timezone from '@/utils/timezone'

import { LockClosedIcon } from '@heroicons/react/20/solid'
import createDataUser from './hooks/user'
import useStore from "@/storage";

export default function Login() {

    const router = useRouter()

    const { setAuth } = useStore(state=>state.auth)

    const handleSign=async()=>{
        const email = document.getElementById('email').value
        const pass = document.getElementById("password").value
        
        const requestData = {
            usuario: email,
            senha: pass,
            timezone: timezone()
        }

        const response = await signIn(requestData)

        const {status, mensagem} = createDataUser(response,setAuth)

        // router.push("/app/info")
    }

    return (
        <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
            <div>
                <Image
                className="mx-auto h-12 w-auto"
                src={Icon}
                alt="Your Company"
                width={80}
                height={80}
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Entrar na sua conta
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    start your 14-day free trial
                </a>
                </p>
            </div>
            <div className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                    Password
                    </label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    />
                </div>
                </div>

                <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                    </a>
                </div>
                </div>

                <div>
                <button
                    onClick={handleSign}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Sign in
                </button>
                </div>
            </div>
            </div>
        </div>
        </>
  )
}