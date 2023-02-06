import '@/styles/globals.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import Layout from '@/components/layouts/layout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {  

	return (
		<>
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
				<Layout>
					<Component {...pageProps} />
				</Layout>
			):<Component {...pageProps} />}
			
		</>
		
	)
  }