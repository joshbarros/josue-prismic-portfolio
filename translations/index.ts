import { en } from './en';
import { pt } from './pt';
import { es } from './es';

// Add future languages here
// import { es } from './es'; // Spanish (coming soon)

export const translations = {
  en,
  pt,
  es,
  // es, // Uncomment when Spanish is ready
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = keyof typeof en;

// Helper type for nested translation paths
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationPath = NestedKeyOf<typeof en>;

// Utility function to get nested translation value
export function getNestedTranslation(
  obj: any,
  path: string,
  fallback?: string
): string {
  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return fallback || path;
    }
  }

  return typeof result === 'string' ? result : fallback || path;
}

export default translations;
