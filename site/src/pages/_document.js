import { Html, Head, Main, NextScript } from "next/document";

// Sets the dark class before the first paint, so the page never flashes the wrong theme.
const themeScript = `(function(){try{var s=null;try{s=localStorage.getItem('theme')}catch(e){}var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#f5f5f5" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
