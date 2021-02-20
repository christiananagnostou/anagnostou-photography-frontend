export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_53129C8CAC85DCC9";

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK ||
  "pk_test_51IInetHmySWsXQX7apevHyciARKkfciTMvJWXiIoPtchuKhNYaYunyGiMpWOQWpBNOFLsIVsQfMsowRcMxPfwXqn00ZAmDJRGK";

export const EMAILJS_SERVICE_KEY = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY;

export const EMAILJS_USER_KEY = process.env.NEXT_PUBLIC_EMAILJS_USER_KEY;

/**
 * Given an image, return the url
 * Works for local and deployed strapis
 * @param {any} Image
 */
export const fromImageToUrl = (Image) => {
  if (!Image) {
    return "/vercel.svg";
  }

  if (Image.url.indexOf("/") === 0) {
    return `${API_URL}${Image.url}`;
  }

  return Image.url;
};
