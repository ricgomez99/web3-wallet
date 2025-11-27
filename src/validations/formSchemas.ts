import * as z from 'zod'

const LogginSchema = z.object({
  username: z.string().trim().min(5, { error: 'Username is required' }),
  email: z.email().min(8, { error: 'Email is required' }),
})

export { LogginSchema }
