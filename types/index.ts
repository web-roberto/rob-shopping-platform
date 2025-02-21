import {z} from 'zod'
import {insertProductSchema} from '@/lib/validators'

export type Product=z.infer<typeof insertProductSchema> & {
  is:string; //este campo no lo importo
  rating: string;
  createdAt: Date;
}