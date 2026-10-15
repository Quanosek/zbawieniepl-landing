import Script from "next/script";

const trackerUrl = process.env.NEXT_PUBLIC_ECOMAIL_TRACKER_URL;
const collectorHost = process.env.NEXT_PUBLIC_ECOMAIL_COLLECTOR_HOST;
const appId = process.env.NEXT_PUBLIC_ECOMAIL_APP_ID;

export default function EcomailTracker() {
  return (
    <Script
      id="ecomail-tracker"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: /* js */ `
          ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
          p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
          };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
          n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script",${JSON.stringify(trackerUrl)},"ecotrack"));
          window.ecotrack('newTracker', 'cf', ${JSON.stringify(collectorHost)}, { /* Initialise a tracker */
          appId: ${JSON.stringify(appId)}
          });
          window.ecotrack('setUserIdFromLocation', 'ecmid');
          window.ecotrack('trackPageView');
        `,
      }}
    />
  );
}
