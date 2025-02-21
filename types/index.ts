import {z} from 'zod'
import {insertProductSchema} from '@/lib/validators'

export type Product=z.infer<typeof insertProductSchema> & {
  id:string; //este campo no lo importo
  rating: string;
  createdAt: Date;
}