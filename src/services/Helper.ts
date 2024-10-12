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
  } catch (error) {
    return false; // If an error is thrown, the URL is not valid
  }
}
