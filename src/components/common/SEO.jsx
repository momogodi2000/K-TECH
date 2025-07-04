import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG } from '@/utils/constants';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  article = false,
  noindex = false 
}) => {
  const location = useLocation();
  const currentUrl = `${SEO_CONFIG.siteUrl}${location.pathname}`;
  
  const seoTitle = title 
    ? `${title} | ${SEO_CONFIG.defaultTitle}`
    : SEO_CONFIG.defaultTitle;
    
  const seoDescription = description || SEO_CONFIG.defaultDescription;
  const seoKeywords = keywords 
    ? [...SEO_CONFIG.keywords, ...keywords].join(', ')
    : SEO_CONFIG.keywords.join(', ');
  const seoImage = image || SEO_CONFIG.defaultImage;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": article ? "Article" : "WebPage",
    "headline": seoTitle,
    "description": seoDescription,
    "image": seoImage,
    "url": currentUrl,
    "author": {
      "@type": "Organization",
      "name": "K-TECH MULTI SERVICES"
    },
    "publisher": {
      "@type": "Organization",
      "name": "K-TECH MULTI SERVICES",
      "logo": {
        "@type": "ImageObject",
        "url": `${SEO_CONFIG.siteUrl}/logo.svg`
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots Meta Tag */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${SEO_CONFIG.siteUrl}${seoImage}`} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="K-TECH MULTI SERVICES" />
      <meta property="og:locale" content="fr_CM" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${SEO_CONFIG.siteUrl}${seoImage}`} />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Thierry TANGUETSOP" />
      <meta name="generator" content="React + Vite" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;