// import { useEffect } from "react";

// const useSEO = ({
//   title,
//   description,
//   keywords,
//   image,
//   url,
//   type = "website",
// }) => {
//   useEffect(() => {
//     // Title
//     if (title) document.title = title;

//     const updateMeta = (attr, key, content) => {
//       if (!content) return;

//       let element = document.querySelector(`meta[${attr}="${key}"]`);

//       if (!element) {
//         element = document.createElement("meta");
//         element.setAttribute(attr, key);
//         document.head.appendChild(element);
//       }

//       element.setAttribute("content", content);
//     };

//     // Basic SEO
//     updateMeta("name", "description", description);
//     updateMeta("name", "keywords", keywords);

//     // Open Graph
//     updateMeta("property", "og:type", type);
//     updateMeta("property", "og:title", title);
//     updateMeta("property", "og:description", description);
//     updateMeta("property", "og:url", url);
//     updateMeta("property", "og:image", image);
//     updateMeta("property", "og:image:secure_url", image);
//     updateMeta("property", "og:site_name", "Imara kileleni Safaris");
//     updateMeta("property", "og:image:width", "1200");
//     updateMeta("property", "og:image:height", "630");

//     // Twitter
//     updateMeta("name", "twitter:card", "summary_large_image");
//     updateMeta("name", "twitter:title", title);
//     updateMeta("name", "twitter:description", description);
//     updateMeta("name", "twitter:image", image);

//     /* ================= CANONICAL FIX ================= */
//     if (url) {
//       let canonical = document.querySelector("link[rel='canonical']");

//       if (!canonical) {
//         canonical = document.createElement("link");
//         canonical.setAttribute("rel", "canonical");
//         document.head.appendChild(canonical);
//       }

//       canonical.setAttribute("href", url);
//     }

//   }, [title, description, keywords, image, url, type]);
// };

// export default useSEO;


import { useEffect } from "react";

const SITE_NAME = "Imara Kileleni Safaris";

const useSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}) => {
  useEffect(() => {
    /* ================= TITLE ================= */
    if (title) {
      document.title = title;
    }

    /* ================= FORMAT IMAGE ================= */
    const formattedImage = image
      ? image.includes("res.cloudinary.com")
        ? image.replace("/upload/", "/upload/f_jpg,q_auto/")
        : image
      : null;

    /* ================= META HELPER ================= */
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

    /* ================= BASIC SEO ================= */
    updateMeta("name", "description", description);
    updateMeta("name", "keywords", keywords);

    /* ================= OPEN GRAPH ================= */
    updateMeta("property", "og:type", type);
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", url);
    updateMeta("property", "og:site_name", SITE_NAME);

    if (formattedImage) {
      updateMeta("property", "og:image", formattedImage);
      updateMeta("property", "og:image:secure_url", formattedImage);
      updateMeta("property", "og:image:width", "1200");
      updateMeta("property", "og:image:height", "630");
    }

    /* ================= TWITTER ================= */
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);

    if (formattedImage) {
      updateMeta("name", "twitter:image", formattedImage);
    }

    /* ================= CANONICAL ================= */
    if (url) {
      let canonical = document.querySelector("link[rel='canonical']");

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }

      canonical.setAttribute("href", url);
    }

  }, [title, description, keywords, image, url, type]);
};

export default useSEO;

