# Internationalization (i18n) System

This directory contains the translation files and configuration for the multi-language support in the Golden Glow IT Solutions website.

## 🌍 Supported Languages

- **English (en)** - Default language
- **Portuguese (pt)** - Portuguese (Brazil) - MANDATORY
- **Spanish (es)** - Coming soon (template ready)

## 📁 File Structure

```
translations/
├── README.md           # This documentation
├── index.ts           # Main exports and utilities
├── en.ts              # English translations (complete)
├── pt.ts              # Portuguese translations (complete)
└── es.ts              # Spanish translations (template)
```

## 🚀 How to Use

### In Components

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

function MyComponent() {
  const { t, language } = useLanguage();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

### Available Functions

- `t(key)` - Get translation for a key
- `language` - Current language ('en', 'pt', 'es')
- `setLanguage(lang)` - Change language
- `showLanguageModal` - Show/hide language selection modal

## 🔧 How to Add New Languages

### Step 1: Create Translation File

1. Copy `en.ts` as a template
2. Create new file (e.g., `fr.ts` for French)
3. Translate all values while keeping the keys identical

```typescript
// translations/fr.ts
export const fr = {
  company: {
    name: 'Golden Glow IT Solutions',
    tagline: 'Solutions Numériques Qui Génèrent Des Résultats',
  },
  nav: {
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    contact: 'Contact',
    getStarted: 'Commencer',
  },
  // ... rest of translations
};
```

### Step 2: Update Index File

```typescript
// translations/index.ts
import { en } from './en';
import { pt } from './pt';
import { fr } from './fr'; // Add import

export const translations = {
  en,
  pt,
  fr, // Add to exports
} as const;
```

### Step 3: Update Language Selector

Add the new language option to components that need it:

```tsx
// In LanguageModal.tsx or LanguageSelector.tsx
<button onClick={() => setLanguage('fr')}>
  <span>🇫🇷</span>
  <span>Français</span>
</button>
```

## 📝 Translation Guidelines

### 1. **Keep Keys Consistent**
- Never change translation keys
- Keep the same nested structure across all languages
- Always use English as the reference structure

### 2. **Professional Tone**
- Use formal business language
- Maintain consistent terminology
- Consider cultural context for each market

### 3. **Technical Terms**
- Keep brand names unchanged: "Golden Glow IT Solutions"
- Technology names stay in English: "React", "Next.js", "AWS"
- Service names can be translated but keep consistency

### 4. **Variable Interpolation**
- Use `{variable}` format for dynamic content
- Example: `'footer.copyright': '© {year} {company}'`

## 🎯 Current Status

### ✅ Completed
- [x] English translations (complete)
- [x] Portuguese translations (complete)
- [x] Navigation system
- [x] Homepage Hero section
- [x] About section
- [x] Language selection modal
- [x] Context and utilities

### 🔄 In Progress
- [ ] Solutions section
- [ ] Services page
- [ ] About page
- [ ] Contact page
- [ ] Footer

### 📋 Todo
- [ ] Complete all remaining sections
- [ ] Add Spanish support (when needed)
- [ ] Add proper fallback handling
- [ ] Add browser language detection
- [ ] Add URL-based language routing (/pt/, /es/)

## 🛠 Technical Details

### TypeScript Support
- Full type safety with `TranslationPath` type
- Nested key autocomplete in IDE
- Compile-time checking for missing translations

### Performance
- Tree-shakeable imports
- Only loads current language
- Minimal bundle impact

### Fallback Strategy
- Falls back to English if translation missing
- Graceful degradation for incomplete translations
- Console warnings in development for missing keys

## 🔍 Debug Mode

To debug translation issues:

```typescript
// Add to any component
console.log('Current language:', language);
console.log('Available translations:', Object.keys(translations));
console.log('Translation result:', t('some.key'));
```

## 📈 Best Practices

1. **Always use the `t()` function** - Never hardcode text
2. **Test both languages** - Ensure layouts work in both EN/PT
3. **Keep translations short** - Some languages are more verbose
4. **Consider context** - Business culture varies by region
5. **Update all languages together** - Don't leave translations incomplete

## 🌐 Market Focus

### Primary Markets
- **Brazil** 🇧🇷 - Portuguese is mandatory for Rio de Janeiro market
- **International** 🌍 - English for global reach

### Future Markets
- **Spain/Latin America** 🇪🇸 - Spanish template ready
- **Other markets** - Easy to add following the same pattern

---

**Need help?** Check the existing translation files for examples or create an issue for missing translations.