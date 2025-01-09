import { z } from 'zod'
import { EUserRole } from '../enums/user_role.js'

export const createUserValidator = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.nativeEnum(EUserRole),
})

export type ICreateUserData = z.infer<typeof createUserValidator>