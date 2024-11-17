import NotificationError from "./components/NotificationError";
import { NoTokenError } from "./errors/NoTokenError";
import { API_TOKEN_KEY } from "./store/AuthStore";

export default function ErrorHandler(error: Error) {
  if (error instanceof NoTokenError) {
    noTokenErrorHandler();
    return;
  }

  NotificationError({
    title: "Error",
    message: `welcome ${error.message}`,
  });
  const audio = new Audio("/error2.mp3"); // ضع مسار ملف الصوت هنا
  audio.play().catch((err) => console.error("Error playing sound:", err));

  defaultErrorHandler();
}

function noTokenErrorHandler() {
  localStorage.removeItem(API_TOKEN_KEY);
}

function defaultErrorHandler() {
  console.log("unhabdled expection occur");
}
