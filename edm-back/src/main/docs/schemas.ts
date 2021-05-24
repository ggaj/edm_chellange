import {
  errorSchema,
  missingFieldsSchema,
  createPixSchemaRequest,
  createPixSchemaResponse,
  getUpdatePixStatusSchemaRequest
} from './schemas/'

export default {
  error: errorSchema,
  missingFields: missingFieldsSchema,
  pixCreate: createPixSchemaRequest,
  pixCreateResult: createPixSchemaResponse,
  getUpdatePixStatus: getUpdatePixStatusSchemaRequest
}
