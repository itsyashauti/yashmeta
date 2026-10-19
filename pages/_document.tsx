import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              var screenWidth = window.screen && window.screen.width;
              if (!screenWidth || screenWidth > 768 || navigator.maxTouchPoints < 1) return;
              var viewport = document.querySelector('meta[name="viewport"]');
              if (viewport) viewport.setAttribute('content', 'width=' + screenWidth + ', initial-scale=1');
            })();`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
