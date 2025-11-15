import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Const } from "@/utils/Constant";
import WebPageSchema from "./WebPageSchema";
import NewsMediaOrganizationSchema from "./NewsMediaOrganizationSchema";
import SiteNavigationSchema from "./SiteNavigationSchema";

const SeoHeader = ({ meta }) => {
  const router = useRouter();
  const canonical = `${Const.ClientLink}/${router.asPath?.slice(1)}`;

  return (
    <Head>
      <title>{meta?.title ?? ""}</title>

      <meta name="description" content={meta?.description ?? ""} />
      <meta name="keywords" content={meta?.keywords ?? ""} />
      <meta
        name="author"
        content={meta?.author ?? "Kesar Petroproducts Ltd."}
      />
      <meta
        name="robots"
        content={
          `${meta?.robots}, max-image-preview:large` ??
          "index,follow, max-image-preview:large"
        }
      />

      {/* Canonical */}
      <link rel="canonical" href={meta?.canonical ?? canonical} />

      {/* OG Tags */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta?.og?.title ?? meta?.title} />
      <meta
        property="og:description"
        content={meta?.og?.description ?? meta?.description}
      />
      <meta property="og:url" content={meta?.canonical ?? canonical} />
      <meta property="og:site_name" content="Kesar Petroproducts Ltd." />
      <meta property="og:image" content={meta?.og?.image ?? "/kesar-og.jpg"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Tags */}
      <meta
        name="twitter:card"
        content={meta?.twitter?.card ?? "summary_large_image"}
      />
      <meta
        name="twitter:title"
        content={meta?.twitter?.title ?? meta?.title}
      />
      <meta
        name="twitter:description"
        content={meta?.twitter?.description ?? meta?.description}
      />
      <meta name="twitter:site" content="@KesarPetro" />
      <meta
        name="twitter:image"
        content={meta?.twitter?.image ?? "/kesar-og.jpg"}
      />
      <meta name="twitter:creator" content="@KesarPetro" />

      {/* General */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Hreflang */}
      <link
        rel="alternate"
        hreflang="en-in"
        href={meta?.canonical ?? canonical}
      />

      {/* Schema Markup */}
      <WebPageSchema
        name={meta?.title ?? ""}
        description={meta?.description ?? ""}
        url={meta?.canonical ?? canonical}
      />

      <NewsMediaOrganizationSchema
        name="Kesar Petroproducts Ltd."
        clientLink={`${Const.ClientLink}/`}
        logoUrl={`${Const.ClientLink}/favicon.png`}
        address={{
          streetAddress:
            "D 7/1, MIDC Industrial Area, Lote Parshuram, Taluka Khed",
          addressLocality: "Ratnagiri",
          addressRegion: "Maharashtra",
          postalCode: "415722",
          addressCountry: "IN",
        }}
        contact={{
          telephone: "+91 2356 272339",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: "English",
          hoursAvailable: {
            opens: "09:00",
            closes: "18:00",
          },
          email: "info@kesarpetroproducts.com",
        }}
        sameAs={[
          "https://www.kesarpetroproducts.com/",
          "https://www.bseindia.com/stock-share-price/kesar-petroproducts-ltd/",
        ]}
      />

      <SiteNavigationSchema />
    </Head>
  );
};

export default SeoHeader;
