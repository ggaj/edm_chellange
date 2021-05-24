import * as Yup from 'yup'

export const categorySchema = Yup.object().shape({
  name: Yup.string().required('The name is mandatory').max(128, 'Max lenght is 128')
})
