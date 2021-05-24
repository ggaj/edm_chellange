import { IValidationSchema } from '@/shared/presentation/interfaces'

export class ValidationSpy implements IValidationSchema {
  schema: any
  payload: any
  error: any = null

  validate (schema: any, payload: any): Promise<any> {
    this.schema = schema
    this.payload = payload
    return this.error
  }
}
