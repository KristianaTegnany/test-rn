import * as yup from 'yup';

export const loginSchemaValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});

export const newGuestSchemaValidation = yup.object({
  lastname: yup.string().required(),
  firstname: yup.string().required()
});
