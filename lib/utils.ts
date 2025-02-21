import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//use:   await delay(2000);
export const delay =(ms:number) => new Promise((resolve) => setTimeout(resolve, ms))

//Convert prisma objec into a regular JS object
export function convertToPlainObject<T>(value:T):T {
 return JSON.parse(JSON.stringify(value))
}

//Format number with decimal places to String
export function formatNumberWithDecimal(num:number): string {
  const [int,decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2,'0')}` : `${int}.00`
}

