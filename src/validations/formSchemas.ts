import * as z from 'zod'

const LoginSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input === undefined
        ? 'Email field is required'
        : 'Invalid email format',
  }),
  password: z
    .string()
    .trim()
    .min(1, 'Password field is required')
    .min(5, {
      error: (iss) =>
        `The password should have at least ${iss.minimum} characters`,
    }),
})

export { LoginSchema }
