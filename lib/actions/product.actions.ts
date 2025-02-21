'use server';
import {prisma} from '@/db/prisma'
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
 //Get lat4st products
 export async function getLatestProducts(){
  const data = await prisma.product.findMany({ //los 4 últimos
    take:LATEST_PRODUCTS_LIMIT,
    orderBy:{createdAt:'desc'}
  })
  return convertToPlainObject(data);
 }

 //Get a single product by it's slug
export async function getProductBySlug(slug:string) {
  return await prisma.product.findFirst({where:{slug:slug}})
}
