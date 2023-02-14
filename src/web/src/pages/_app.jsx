import '@/styles/globals.css'
import Layout from '@/components/layouts/layout'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRef, useState } from 'react'
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from '@/styles/createMuiCache'

const clientSideEmotionCache = createEmotionCache();

export default function App(
	{ 
		Component, 
		pageProps,
		emotionCache=clientSideEmotionCache
	}
	) {  

	const [queryClient] = useState(()=>new QueryClient())

	return (
		<>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>Azapfy - Velocidade para fazer</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="description"
						content="Web site created using NextJS"
					/>
				</Head>
				{Component.nav===true?
				(	
					<QueryClientProvider client={queryClient}>
						
							<Layout>
								<Component {...pageProps} />
							</Layout>
						
					</QueryClientProvider>
				):<Component {...pageProps} />}
			</CacheProvider>
		</>
		
	)
  }