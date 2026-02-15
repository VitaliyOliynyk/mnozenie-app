# Aplikacja do nauki tabliczki mnożenia

Aplikacja webowa stworzona w Angularze, służąca do nauki tabliczki mnożenia dla dzieci (zakres do 50).

## Funkcjonalności

- Losowanie zadań (Mnożnik 1-5, Mnożna 1-10).
- Dwa tryby odpowiedzi:
  - Wybór jednej z czterech opcji.
  - Ręczne wpisywanie wyniku za pomocą klawiatury ekranowej.
- Statystyki sesji (poprawne odpowiedzi, skuteczność).
- Konfigurowalne zakresy liczb.
- Responsywny design (Mobile First) z obsługą motywu ciemnego.

## Technologie

- Angular 18+ (Standalone Components, Signals)
- TypeScript
- SCSS
- Elegant Objects (DDD)

## Uruchomienie

Aby uruchomić aplikację lokalnie:

1. Zainstaluj zależności:
   ```bash
   npm install
   ```
2. Uruchom serwer developerski:
   ```bash
   ng serve
   ```
3. Otwórz przeglądarkę pod adresem `http://localhost:4200`.

## Testy

Uruchomienie testów jednostkowych:
```bash
ng test
```
## Publikacja aplikacji Angular na GitHub Pages
1. Instalacja gh-pages
   ```bash
   npm install -g gh-pages
   ```
2. Budowanie projektu
   ```bash
   ng build --base-href /mnozenie-app/
   ```
3. Publikacja
   ```bash
   npx gh-pages -d dist/mnozenie-app/browser
   ```

   
