# 📚 Aplikacja do nauki tabliczki mnożenia – Angular

Zbuduj responsywną aplikację webową do nauki tabliczki mnożenia dla dzieci w Angular.

---

## 🎯 Cel aplikacji

Aplikacja służy do nauki tabliczki mnożenia liczb:
- zakres mnożników: od **1 do 5**
- zakres drugiej liczby: od **1 do 10**  
(czyli maksymalnie do 50)

---

## 🧩 Widok główny – zadania

- Wyświetla jedno losowe działanie typu:  
  `3 × 7 = ?`
- Po udzieleniu odpowiedzi pokazuje informację:  
  ✅ dobrze / ❌ źle
- Automatycznie przechodzi do kolejnego zadania

---

## 🔁 Tryby odpowiedzi

### Tryb 1: Wybór odpowiedzi
- Pokazuje **4 przyciski** z wariantami odpowiedzi  
  (1 poprawna + 3 losowe błędne)

### Tryb 2: Wpisywanie odpowiedzi
- Pokazuje pole tekstowe
- Użytkownik wpisuje wynik za pomocą **klawiatury ekranowej**

---

## ⌨️ Klawiatura ekranowa

- Przyciski: **0–9 + kasowanie**
- Duże, dotykowe przyciski
- Dostosowana do telefonu i tabletu

---

## ⚙️ Ustawienia

Ekran ustawień zawiera:
- Zakres mnożonych liczb (np. 1–5, 1–10 – edytowalne w przyszłości)
- Tryb odpowiedzi:
  - ☐ Wybór odpowiedzi  
  - ☐ Ręczne wpisywanie  
- Przycisk: **Zapisz**

---

## 📊 Statystyki

- Liczba:
  - wszystkich odpowiedzi
  - poprawnych odpowiedzi
  - procent skuteczności
- Przycisk: **Resetuj statystyki**
  - resetuje bieżącą sesję
  - stare statystyki są zapisywane w historii

---

## 💾 Local Storage

- Ustawienia i statystyki zapisane w `localStorage`
- Dane pozostają po odświeżeniu strony

---

## 📱 Responsywność

- Widok mobile-first
- Całość mieści się na ekranie:
  - telefonu
  - tabletu
- Duże przyciski, czytelne czcionki

---

## 🧪 Technologie

- Angular
- TypeScript
- CSS (Flexbox / Grid)
- Brak backendu – tylko frontend

---

## 🗂️ Git

- Zainicjalizuj repozytorium Git
- Utwórz:
  - `README.md` z opisem projektu
  - instrukcję uruchomienia:
    ```bash
    npm install
    ng serve
    ```

---
