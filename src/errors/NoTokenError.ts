import { AppError } from "./AppError";

export class NoTokenError extends AppError {
  constructor(message: string = "no token exists") {
    super(message);
  }
}
