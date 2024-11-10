export class AppError extends Error {
  constructor(message: string = "App Level Error ") {
    super(message);
  }
}
