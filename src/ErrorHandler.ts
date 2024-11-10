import { NoTokenError } from "./errors/NoTokenError";
import { API_TOKEN_KEY } from "./store/AuthStore";

export default function ErrorHandler(error: Error) {
  if (error instanceof NoTokenError) {
    noTokenErrorHandler();
    return;
  }

  defaultErrorHandler();
}

function noTokenErrorHandler() {
  localStorage.removeItem(API_TOKEN_KEY);
}

function defaultErrorHandler() {
  console.log("unhabdled expection occur");
}
