# 🔐 Google Sheets Yandex-Style Password Generator

## 🇬🇧 English

A Google Sheets automation script that generates random passwords in the **Yandex format** (`XxX-XxX-XxX-XxX`) and adds checkboxes to track password usage.

### ✅ Features

- Adds a menu to the sheet: `🔐 Password Tools → Generate Passwords`
- Creates passwords with:
  - 12 random characters (letters and numbers)
  - 3 dashes separating 4 chunks
- Fills passwords only for rows with a username but no password
- Adds checkboxes for tracking which ones are copied or used

### 📋 How to Use

1. Open your Google Sheet
2. Go to `Extensions → Apps Script`
3. Paste the script
4. Save and reload the sheet
5. Click the menu: `🔐 Password Tools → Generate Passwords`

### 🧪 Example Output

| Username | Password         | Copied? |
|----------|------------------|---------|
| alice    | aZ3-Kl9-xP2-BqM  | ☑️      |
| bob      | M2n-FvX-xk4-Jz8  | ⬜       |

---

## 🇷🇺 Русский

Скрипт для автоматизации Google Таблицы, который генерирует случайные пароли в стиле **Яндекс** (`XxX-XxX-XxX-XxX`) и добавляет чекбоксы для отслеживания использования.

### ✅ Возможности

- Добавляет меню: `🔐 Password Tools → Generate Passwords`
- Создает пароли из:
  - 12 случайных символов (буквы и цифры)
  - 3 тире, разделяющих 4 блока
- Заполняет только те строки, где есть имя пользователя, но нет пароля
- Добавляет чекбоксы для отслеживания использования пароля

### 📋 Как использовать

1. Откройте Google Таблицу
2. Перейдите в `Расширения → Apps Script`
3. Вставьте скрипт
4. Сохраните и перезагрузите таблицу
5. Нажмите меню: `🔐 Password Tools → Generate Passwords`

### 🧪 Пример результата

| Пользователь | Пароль          | Скопировано? |
|--------------|------------------|--------------|
| alice        | aZ3-Kl9-xP2-BqM  | ☑️           |
| bob          | M2n-FvX-xk4-Jz8  | ⬜            |


## 🎥 Demo

[![Watch the demo](https://img.shields.io/badge/Watch-Video-blue?logo=googlechrome)](demo/Demo.mp4)
