import { useEffect } from "react";

const useSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}) => {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    const updateMeta = (attr, key, content) => {
      if (!content) return;

      let element = document.querySelector(`meta[${attr}="${key}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic SEO
    updateMeta("name", "description", description);
    updateMeta("name", "keywords", keywords);

    // Open Graph
    updateMeta("property", "og:type", type);
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", url);
    updateMeta("property", "og:image", image);
    updateMeta("property", "og:image:secure_url", image);
    updateMeta("property", "og:site_name", "Imaraki Leleni Safaris");
    updateMeta("property", "og:image:width", "1200");
    updateMeta("property", "og:image:height", "630");

    // Twitter
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", image);

  }, [title, description, keywords, image, url, type]);
};

export default useSEO;
