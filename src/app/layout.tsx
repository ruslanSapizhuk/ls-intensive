import { Mulish } from 'next/font/google'
// import Script from 'next/script'
import './globals.css'

const mulish = Mulish({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'B&M University',
  description: '',
}

export default function RootLayout({children}: React.PropsWithChildren) {
    return (
      <html lang="uk-UA">
      <head>
          <meta name="facebook-domain-verification" content="tpm3cetyhyaa37wzdx9alwr1x1350i" />
        {/*  <Script id="facebook-pixel">*/}
        {/*      {`*/}
        {/*    !function(f,b,e,v,n,t,s)*/}
        {/*    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?*/}
        {/*        n.callMethod.apply(n,arguments):n.queue.push(arguments)};*/}
        {/*        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';*/}
        {/*        n.queue=[];t=b.createElement(e);t.async=!0;*/}
        {/*        t.src=v;s=b.getElementsByTagName(e)[0];*/}
        {/*        s.parentNode.insertBefore(t,s)}(window, document,'script',*/}
        {/*    'https://connect.facebook.net/en_US/fbevents.js');*/}
        {/*    fbq('init', '691462736338304');*/}
        {/*    fbq('track', 'PageView');*/}
        {/*    if(location.pathname.includes('success')) {*/}
        {/*        fbq('track', 'Purchase', {*/}
        {/*            value: 0.00,*/}
        {/*            currency: 'USD'*/}
        {/*        });*/}
        {/*    }*/}
        {/*`}*/}
        {/*  </Script>*/}
      </head>
        <body className={mulish.className}>
        {children}
        <noscript>
            <img height="1" width="1" className="hidden"
                 src="https://www.facebook.com/tr?id=691462736338304&ev=PageView&noscript=1"
            />
        </noscript>
        </body>
      </html>
  )
}
