# Prompt dla Antigravity --- Refactoring aplikacji edukacyjnej (Angular)

## Kontekst

Projekt jest aplikacją edukacyjną napisaną w Angular.

Aktualne wymagania funkcjonalne znajdują się w pliku:

prompt/SPEC.md

Obecnie aplikacja zawiera jedno ćwiczenie:

-   Subject: matematyka
-   Exercise: mnożenie

Ćwiczenie jest obecnie częścią kodu statycznego i musi zostać
przeniesione do architektury modułowej.

------------------------------------------------------------------------

## Główny cel

Przeprowadzić refactoring aplikacji Angular w celu wprowadzenia systemu
dynamicznych modułów ćwiczeń.

Każdy:

-   subject (np. matematyka, język polski)
-   exercise (np. mnożenie, U oraz ó w wyrazach)

musi być obsługiwany jako dynamiczny moduł ładowany w runtime.

------------------------------------------------------------------------

## Wymagania architektoniczne Angular

Zastosuj Angular best practices.

### Utwórz strukturę:

core/ - exercise-registry.service.ts - exercise.interface.ts

features/ - exercises/ - math-multiplication/ -
math-multiplication.module.ts - math-multiplication.component.ts -
polish-u-o/ - polish-u-o.module.ts - polish-u-o.component.ts

layout/ - header/ - header.component.ts - header.component.html -
exercise-sidebar/ - exercise-sidebar.component.ts -
exercise-sidebar.component.html

------------------------------------------------------------------------

## Exercise Interface

Zdefiniuj interface:

``` ts
export interface ExerciseModuleDefinition {
  subjectId: string;
  exerciseId: string;
  displayName: string;
  subjectDisplayName: string;
  loadComponent: () => Promise<any>;
}
```

------------------------------------------------------------------------

## ExerciseRegistryService

Service odpowiedzialny za:

-   rejestrację modułów
-   zwracanie listy subject
-   zwracanie listy exercise dla subject
-   ładowanie wybranego exercise
-   zwracanie default exercise

------------------------------------------------------------------------

## Refactoring istniejącego ćwiczenia

Aktualne ćwiczenie:

matematyka --- mnożenie

musi zostać przeniesione do:

features/exercises/math-multiplication/

oraz zarejestrowane w ExerciseRegistryService jako default module.

------------------------------------------------------------------------

## Nowy subject i exercise

Dodaj:

Subject: język polski

Exercise: U oraz ó w wyrazach

Utwórz moduł:

features/exercises/polish-u-o/

Komponent ma być placeholderem:

"Ćwiczenie jeszcze nie zostało zaimplementowane"

------------------------------------------------------------------------

## Header Component

Header musi zawierać:

-   subjectDisplayName
-   exerciseDisplayName
-   przycisk otwierający sidebar

Przykład:

matematyka --- mnożenie \[ikona\]

------------------------------------------------------------------------

## Sidebar Component

Sidebar musi:

-   wysuwać się z lewej strony
-   mieć animację Angular animations
-   zawierać listę subject
-   zawierać listę exercise dla wybranego subject

Po kliknięciu exercise:

-   sidebar zamyka się
-   ładowany jest dynamicznie komponent exercise

------------------------------------------------------------------------

## Dynamic loading

Użyj Angular dynamic component loading:

-   ViewContainerRef
-   loadComponent()
-   lazy loading

------------------------------------------------------------------------

## Default behaviour

Po starcie aplikacji:

automatycznie załaduj:

matematyka --- mnożenie

------------------------------------------------------------------------

## Wymagania jakościowe

Kod musi być:

-   modularny
-   rozszerzalny
-   zgodny z Angular best practices
-   zgodny z prompt/SPEC.md
-   gotowy do dodania nowych subject i exercise bez refaktoryzacji core

------------------------------------------------------------------------

## Oczekiwany rezultat

W pełni działająca aplikacja Angular z:

-   dynamicznym systemem ćwiczeń
-   header
-   sidebar
-   lazy loading exercise modules
-   placeholder exercise dla języka polskiego
