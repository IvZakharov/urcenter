import "../styles/globals.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import Page from "../components/Page/Page";
import AboutServices from "../components/AboutServices/AboutServices";
import NoteSection from "../components/NoteSection/NoteSection";
import SituationsSection from "../components/SituationsSection/SituationsSection";
import PriceSection from "../components/PriceSection/PriceSection";
import GuaranteesSection from "../components/GuaranteesSection/GuaranteesSection";
import ResultSection from "../components/ResultSection/ResultSection";
import WhatNeedsSection from "../components/WhatNeedsSection/WhatNeedsSection";
import BenefitSection from "../components/BenefitSection/BenefitSection";
import TablePrice from "../components/TablePrice/TablePrice";

const components = {
  page: Page,
  aboutService: AboutServices,
  note: NoteSection,
  price: PriceSection,
  benefits: BenefitSection,
  guarantee: GuaranteesSection,
  result: ResultSection,
  whatNeed: WhatNeedsSection,
  sectionWithList: SituationsSection,
  priceTable: TablePrice,
};

storyblokInit({
  accessToken: "RoxgST4n0lWQXrvSEyfVVQtt",
  apiOptions: {
    region: "ap",
  },
  use: [apiPlugin],
  components,
});

const myApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color="#5A37BD"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Script
        id={"calltouch"}
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === 'function',n=m?"init-min.js":"init.js";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","3anfrf6i");`,
        }}
      />
      <Script
        src={
          "//api.venyoo.ru/wnew.js?wc=venyoo/default/science&widget_id=6299632177119232"
        }
      />
      <Component {...pageProps} />;
    </>
  );
};

export default myApp;
