import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <>
      <Head>
        <title>Gerador de QR Code</title>
        <meta name="description" content="Gere seus QR codes personalizados facilmente com nosso gerador de QR Code." />
        <meta property="og:title" content="Gerador de QR Code" />
        <meta property="og:description" content="Gere seus QR codes personalizados facilmente com nosso gerador de QR Code." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://www.seusite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gerador de QR Code" />
        <meta name="twitter:description" content="Gere seus QR codes personalizados facilmente com nosso gerador de QR Code." />
        <meta name="twitter:image" content="/images/og-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
