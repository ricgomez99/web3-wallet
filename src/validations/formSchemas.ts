import * as z from 'zod'

const LoginSchema = z
  .object({
    email: z
      .email()
      .min(8, { error: 'The email address should have at least 8 characters' }),
    password: z
      .string()
      .trim()
      .min(5, { error: 'The password should have at least 5 characters' }),
  })
  .required()

export { LoginSchema }
