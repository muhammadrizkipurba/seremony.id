import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const rupiahFormat = (value: number) => {
  if (isNaN(value)) return 0;
  const reverse = value.toString().split("").reverse().join("");
  const rupiah = reverse.match(/\d{1,3}/g);

  if(rupiah) return rupiah.join(".").split("").reverse().join("");

  return null;
};

export const isEmptyObject = (obj: object | null | undefined): boolean => {
  // Check for null or undefined before proceeding
  if (obj === null || typeof obj !== 'object') {
    return true; 
  }
  
  // For actual objects, check the number of own enumerable properties
  return Object.keys(obj).length === 0;
}