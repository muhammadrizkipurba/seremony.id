import { escapeHTML } from "@/lib/escapeHtml";
import Head from "next/head";
import React from "react";

const HtmlHead = ({
  metatitle = "Seremony",
  metadescription = "",
  ogtype = "website",
  canonicalUrl = process.env.NEXT_PUBLIC_BASE_URL,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <title>{metatitle}</title>
      <meta
        name="description"
        content={escapeHTML(metadescription, {
          ALLOWED_TAGS: [],
        })}
      />
      <link rel="icon" type="image/png" href="/favicon.ico" />

      {/* For SEO */}
      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="id" />
      <meta property="og:type" content={ogtype} />
      <meta property="og:title" content={metatitle} />
      <meta
        property="og:description"
        content={escapeHTML(metadescription, {
          ALLOWED_TAGS: [],
        })}
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="PT. Kalimantan Prima Persada" />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/susicateringmedan/"
      />
      <meta
        property="article:modified_time"
        content="2021-10-19T002:20:00+00:00"
      />
      <meta
        property="og:image"
        content="https://susicateringmedan.com/images/logo-color.svg"
      />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1280" />
      <meta name="twitter:card" content="summary" />
      {/* For SEO end */}
    </Head>
  );
};

export default HtmlHead;
