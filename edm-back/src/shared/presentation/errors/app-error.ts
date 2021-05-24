import { IAppError } from '../interfaces/app-error'

export class AppError {
  constructor (
    private readonly message: string,
    private readonly errors: IAppError[] = []
  ) {}
}
