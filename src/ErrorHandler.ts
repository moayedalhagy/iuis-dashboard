import NotificationError from "./components/NotificationError";
import { NoTokenError } from "./errors/NoTokenError";
import { API_TOKEN_KEY } from "./store/AuthStore";

export default function ErrorHandler(error: Error) {
  if (error instanceof NoTokenError) {
    noTokenErrorHandler();
    return;
  }

  NotificationError({
    title: "خــطــا",
    // message: `welcome ${error.message}`,
    message: `خطا غير متوقع`,
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
