import { z } from 'zod'

export default z.object({
  name: z.string().max(1024),
  email: z.string().email().max(1024),
  subject: z.string().max(1024),
  message: z.string().max(1024),
})
