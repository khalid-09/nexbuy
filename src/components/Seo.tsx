import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  type: string;
  image: string;
  url: string;
}

const Seo = ({ title, description, type, image, url }: SeoProps) => {
  return (
    <Helmet>
      <title>{title} | NEXBUY.</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="description" content={description} />
      {/* <meta property="og:type" content={type} />// */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      <meta name="twitter:creator" content="Khalid Ansari" />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Your Page Title" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
};

export default Seo;
