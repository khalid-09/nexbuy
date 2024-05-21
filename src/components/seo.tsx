import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  type: string;
}

const Seo = ({ title, description, type }: SeoProps) => {
  return (
    <Helmet>
      <title>{title} | NEXBUY.</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content="Khalid Ansari" />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
