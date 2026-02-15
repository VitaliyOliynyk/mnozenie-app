## Kontekst

Aplikacja jest napisana w Angular i posiada architekturę dynamicznych modułów ćwiczeń.

Istnieje już moduł:

Subject: język polski  
Exercise: U oraz ó w wyrazach

Moduł istnieje jako placeholder i musi zostać w pełni zaimplementowany.

Ćwiczenie jest przeznaczone dla ucznia klasy 2 szkoły podstawowej.

---

## Cel ćwiczenia

Uczeń widzi słowo zawierające literę "u" lub "ó".

Zadaniem ucznia jest wybranie poprawnej litery:

U  
lub  
Ó

---

## Lista słów (alfabetycznie, oddzielone przecinkiem)

autobus, burak, but, buda, buk, bułka, burza, chmura, cukier, córka, cud, cuda, cudowny, czuły, czułość, czubek, czub, czujnik, czujny, człowiek, długi, dłuto, domówka, dumy, duży, duch, dziupla, dziura, dziurka, futro, furman, góra, góry, górka, górnik, jaskółka, jutro, jutrzenka, jupiter, kura, kurczak, kurka, kubek, kubraczek, kula, kulka, kultura, kupić, kupiec, kupka, kupować, kupon, kurier, kurz, kuźnia, lód, lody, lódka, ludzki, lud, lustro, lut, łuk, łódka, łóżko, łóżeczko, łódź, mrówka, mur, murek, murarz, mucha, muszla, muszka, mundur, muzyka, nudny, nuda, nóg, nóż, nóżka, ogród, ogródek, ogórek, okulary, oko, opór, orzeł, ośmiornica, pióro, piórnik, półka, pół, północ, północny, półwysep, półmisek, półbuty, półki, półeczka, półka, pokój, pokój, pomoc, pomógł, pomóż, powód, powrót, próba, próbka, próg, próżnia, próżny, pudło, pudel, pudełko, pulpit, punkt, pusty, puszka, puch, puchar, puchaty, ruch, rurka, rura, róża, różowy, różnica, różny, różdżka, różaniec, różek, równy, równanie, równowaga, równina, równoległy, rój, skóra, skórka, słup, słupek, słuch, słuchać, słuchawka, słuchacz, służyć, stół, stołek, stółek, stróż, stróżka, stróżówka, studnia, stukać, stuk, sztuka, szuflada, szukać, szum, szumi, szumieć, szufelka, sufit, sukienka, suknia, suma, supeł, super, suszyć, suszarka, suchy, słońce, sól, sólka, sówka, sowa, wóz, wózek, wózki, wódka, wódz, wódka, wódz, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wódka, wróbel, wróżka, wróżbita, wrócić, wrócił, wróciła, wróciło, wrócić, wzór, wzorek, wzór, wzór, wzór, wzór, zupa, zupka, zuch, zuchwały, żółw, żółty, żółtko

(Uwaga: zachowaj tę listę jako stałą w kodzie, np. polishUoWords.ts)

---

## Wymagania UI

Ekran ćwiczenia musi zawierać:

### 1. Wyświetlane słowo

- wyśrodkowane
- bardzo duża czcionka
- np. 64px lub większa
- przykład:

wr_bel

(litera może być ukryta lub całe słowo pokazane — wybierz najlepsze pedagogicznie rozwiązanie)

---

### 2. Przyciski odpowiedzi

Pod słowem dwa duże przyciski w poziomie:

[ U ]   [ Ó ]

Wymagania:

- duże (minimum 120px wysokości)
- styl podobny do przycisków w ćwiczeniu matematycznym
- wyraźne
- przystosowane dla dzieci

---

### 3. Banner feedback

Banner pokazujący:

Dobrze  
lub  
Źle

Banner musi być:

- duży
- kolor zielony dla "Dobrze"
- kolor czerwony dla "Źle"
- pokazywany przez krótki czas (np. 1–2 sekundy)

---

## Refactoring wymagany

Jeśli banner już istnieje w module matematyki:

przenieś go do:

common/components/feedback-banner/

Utwórz:

common/components/feedback-banner/

feedback-banner.component.ts  
feedback-banner.component.html  
feedback-banner.component.scss

Banner musi być wielokrotnego użytku.

---

## Statystyki

Na dole ekranu pokaż sekcję statystyk:

Poprawne: X  
Błędne: Y  
Razem: Z  
Skuteczność: N%

---

## Logika ćwiczenia

Algorytm:

1. Wybierz losowe słowo z listy
2. Poczekaj na kliknięcie U lub Ó
3. Sprawdź poprawność
4. Pokaż banner
5. Zaktualizuj statystyki
6. Załaduj następne słowo

---

## Struktura Angular

features/exercises/polish-u-o/

polish-u-o.component.ts  
polish-u-o.component.html  
polish-u-o.component.scss  
polish-u-o.module.ts  
polish-u-o.words.ts

---

## Wymagania techniczne Angular

Użyj:

- standalone components lub modules (zgodnie z projektem)
- Angular best practices
- clean architecture
- brak duplikacji kodu
- reusable components

---

## Oczekiwany rezultat

W pełni działające ćwiczenie:

- losowe słowa
- wybór U / Ó
- banner feedback
- statystyki
- poprawna integracja z ExerciseRegistryService
