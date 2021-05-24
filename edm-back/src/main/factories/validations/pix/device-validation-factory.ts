import { ValidationSchema } from '@/main/validations'
import { IValidationSchema } from '@/shared/presentation/interfaces'

export const makeDeviceValidation = (): IValidationSchema => {
  const schema = new ValidationSchema()
  return schema
}
