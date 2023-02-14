import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createEmotionCache } from '@/styles/createMuiCache';
import createEmotionServer from '@emotion/server/create-instance';

export default function MyDocument({emotionStyleTags}) {
  
  return (
    <Html lang="en" className='h-full bg-gray-50'>
      <Head>
        <meta name="emotion-insertion-point" content="" />
          {emotionStyleTags}
      </Head>
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx) => {

  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};