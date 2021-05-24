import * as Yup from 'yup'

export const deviceSchema = Yup.object().shape({
  categoryId: Yup.number().required('Code category is mandatory').max(16,'Max length is 16'),
  color: Yup.string().required('Code category is mandatory'),
  partNumber: Yup.number().required('Code category is mandatory').positive('Value must be more than the zero')
})
