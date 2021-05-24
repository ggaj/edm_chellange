export interface IValidationSchema {
  validate: (schema: any, payload: any) => Promise<any>
}
