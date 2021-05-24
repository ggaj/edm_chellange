// import { AppError } from '@/shared/presentation/errors'
import { AppError } from '@/shared/presentation/errors'
import { IAppError, IValidationSchema } from '@/shared/presentation/interfaces'
import * as Yup from 'yup'

export class ValidationSchema implements IValidationSchema {
  async validate (schema: Yup.AnyObjectSchema, payload: any): Promise<any> {
    try {
      await schema.validate(payload, {
        abortEarly: false
      })
      return
    } catch (error) {
      const erros = error.inner.map(
        (err: Yup.ValidationError): IAppError => ({
          name: err.path,
          message: err.message
        })
      )
      return new AppError('Validation fails', erros)
    }
  }
}
