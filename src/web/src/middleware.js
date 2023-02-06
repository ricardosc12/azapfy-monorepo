import { NextResponse } from 'next/server'
import { routes } from '@/routes'
import CryptoJS from 'crypto-js'

function checkModules(url,cookie){
	try {
		var modules = CryptoJS.AES.decrypt(cookie, "6c35aebeff1d62a35881af369772237b").toString(CryptoJS.enc.Utf8).split(',')
		if(modules.includes(routes[url].name)) return true
		return false
	} catch {
		return false
	}
}

export async function middleware(request) {
	let logged = request.cookies.get('_logged')?.value
	let cookie_modules = request.cookies.get('_module')?.value
	if(
		!routes[request.nextUrl.pathname]
		|| logged!=='1' 
		|| (!cookie_modules && request.nextUrl.pathname!='/login')
		|| !checkModules(request.nextUrl.pathname, cookie_modules)
	)
	{
		const url = request.nextUrl.clone()
		url.pathname = (logged=='1'&&cookie_modules)?'/app/dashboard':'/login'
		return NextResponse.redirect(url)
	}
	return NextResponse.next()
}



export const config = {
	matcher: [
	  `/((?!api|_next/static|_next/image|favicon.ico|login|robots.txt).*)`,
	],
}