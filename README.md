# Instrukcja obsługi aplikacji Crypto-App

## Instrukcje instalacji
Aby zainstalować aplikację Crypto-App, wykonaj następujące kroki:
1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/f1bbs2929/crypto-app-f1bbs.git
   cd crypto-app-f1bbs
   ```
2. Zainstaluj zależności:
   ```bash
   npm install
   ```

## Szybki start
Aby uruchomić aplikację, użyj poniższego polecenia:
```bash
npm start
```

## Instrukcje użytkowania
Po uruchomieniu aplikacji, przejdź do przeglądarki i otwórz `http://localhost:3000`. 
Tutaj znajdziesz wszystkie dostępne funkcje aplikacji, które umożliwiają:
- Śledzenie cen kryptowalut
- Wyświetlanie informacji o rynku
- Analizowanie danych historycznych

## Funkcje zabezpieczeń
Aplikacja wykorzystuje następujące funkcje zabezpieczeń:
- Ochrona przed atakami XSS (Cross-Site Scripting)
- Szyfrowanie danych użytkownika
- Regularne aktualizacje w celu eliminacji znanych luk w zabezpieczeniach

## Funkcje dostępności
Aplikacja jest zgodna z zasadami projektowania dostępności:
- Alternatywne teksty dla obrazów
- Wsparcie dla nawigacji za pomocą klawiatury
- Możliwość zmiany rozmiaru czcionki

## Komendy do budowy
Aby zbudować aplikację do użycia w produkcji, uruchom:
```bash
npm run build
```
