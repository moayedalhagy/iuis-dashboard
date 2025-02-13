export function urlHandler(url: string) {
  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("/watch?v=", "/embed/");
  }
  return url;
}

export function isValidUrl(url: string) {
  try {
    new URL(url); // Try creating a URL object
    return true; // If no error is thrown, the URL is valid
    /* eslint-disable @typescript-eslint/no-unused-vars */
  } catch (error) {
    return false; // If an error is thrown, the URL is not valid
  }
}

export function removeHtmlTags(input: string) {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}

// Files\\PagesImage\\2025_02_12_141912_obj.png --> Files/PagesImage/2025_02_12_141912_obj.png.
export const convertBackslashesToSlashes = (path: string) => {
  return path.replace(/\\/g, "/");
};

export const asset = (path: string) => {
  return `https://api.iuis.university/${convertBackslashesToSlashes(path)}`;
};
