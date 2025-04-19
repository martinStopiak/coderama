# Movie Search App

Jednoduchá aplikácia na vyhľadávanie filmov cez OMDB API postavená na modernom React stacku.

---

## 🔧 Build skripty

- **Build**: Zostavenie projektu pre produkciu.
- **Preview**: Náhľad produkčnej zostavy.
- **Lint**: Spustenie ESLint pre kontrolu problémov v kóde.
- **Lint CSS**: Spustenie Stylelint pre kontrolu štýlov.

---

## 🧪 Technológie použité v projekte

- **React** – frontendová knižnica pre tvorbu používateľských rozhraní.
- **Vite** – moderný a rýchly build nástroj.
- **TypeScript** – typovaný JavaScript pre lepšiu stabilitu.
- **Zustand** – jednoduché globálne stavové riadenie.
- **React Query** – efektívne získavanie a cachovanie dát.
- **Emotion** – CSS-in-JS riešenie pre štýlovanie.
- **Material-UI** – komponentová knižnica pre UI.
- **Stylelint** – linter pre CSS/Emotion štýly.
- **ESLint** – linter pre JavaScript/TypeScript.

---

## 📁 Struktúra projektu

### `src/api/`

- `fetchMovieSearch.ts`: Získava výsledky vyhľadávania filmov.
- `fetchMovieDetails.ts`: Získava detailné informácie o filme.

### `src/components/`

- `SearchInput`: Komponent pre vyhľadávanie.
- `MovieCard`: Zobrazenie detailov filmu v kartičke.
- `Loading`: Spinner počas načítavania.
- `LoadMoreButton`: Tlačidlo pre načítanie ďalších výsledkov.

### `src/pages/`

- `Home`: Hlavná stránka s vyhľadávaním filmov.
- `Details`: Detailné informácie o vybranom filme.
- `Favorite`: Zoznam obľúbených filmov používateľa.
- `Error`: Stránka pre obsluhu chýb.

### `src/store/`

- `useFavoritesStore.ts`: Stav obľúbených filmov.
- `useLastSearch.ts`: Ukladanie posledného vyhľadávania.

### `src/styles/`

- `colors.ts`: Centrálne definície farieb.

---

## 🔐 Environment variables

> ⚠️ **Upozornenie:** Nikdy neukladajte API kľúče priamo do zdrojového kódu. V produkcii používajte bezpečné úložiská ako `.env` súbor (nevkladajte do repozitára).

```env
API_URL=https://omdbapi.com/
API_KEY=your_api_key

VITE_API_SEARCH_FULL=${API_URL}?apikey=${API_KEY}&s=
VITE_API_DETAIL_FULL=${API_URL}?apikey=${API_KEY}&i=
```
