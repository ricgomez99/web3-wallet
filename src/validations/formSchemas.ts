import * as z from 'zod'

const LoginSchema = z.object({
  email: z.email({
    error: (issue) =>
      issue.input === '' ? 'Email field is required' : 'Invalid email format',
  }),
  password: z
    .string()
    .trim()
    .min(1, 'Password field is required')
    .min(5, {
      error: (issue) =>
        `The password should have at least ${issue.minimum} characters`,
    }),
})

export { LoginSchema }
