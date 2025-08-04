# 📬 (WIP) Feedback Sorter

## 🇬🇧 English

A lightweight Google Sheets automation using Google Apps Script to organize feedback by category.  
It creates new sheets per feedback category (e.g. Bug Report, Suggestion), with manual confirmation before creating a new one.

---

### ✅ Features

- Adds a custom menu called **🗣Sort feedback**
- Automatically categorizes responses from "Form Responses" sheet
- Creates new category sheets only after user confirmation
- Tracks which categories were accepted or ignored to avoid duplicate prompts
- Appends each feedback row (timestamp, name, message) to the correct sheet

---

### 📋 How to Use

1. Open your Google Sheet  
2. Go to `Extensions → Apps Script`  
3. Paste the script into `main.gs`  
4. Save and reload the spreadsheet  
5. A new menu called **Sort feedback** will appear  
6. Click **1. Sort feedback** to begin sorting form entries  

---

### 🧪 Example Categories

- Suggestion  
- Bug Report  
- Praise  

---

## 🔧 To-Do List (Planned Improvements)

- [ ] Append headers automatically when a sheet is created  
- [ ] Add export options (e.g. email selected sheets)  
- [ ] Make feedback sorter fully autonomous (e.g. run weekly)  
- [ ] Add options to delete old data after processing  
- [ ] Simplify code and optimize data checks  
- [ ] Allow custom trigger setup via UI (e.g. "Sort every Friday at 9AM")  

---

## 🇷🇺 Русский

Небольшая автоматизация для Google Таблиц с использованием Google Apps Script для сортировки обратной связи по категориям.  
Создаёт отдельные листы для каждой категории (например, Жалоба, Предложение) после подтверждения пользователя.

---

### ✅ Возможности

- Добавляет новое меню **🗣Sort feedback**  
- Автоматически сортирует отклики из листа "Form Responses"  
- Создаёт новые листы по категориям только после согласия пользователя  
- Запоминает категории, чтобы не спрашивать повторно  
- Добавляет каждую строку (время, имя, сообщение) в нужный лист  

---

### 📋 Как использовать

1. Открой Google Таблицу  
2. Перейди в `Расширения → Apps Script`  
3. Вставь код в `main.gs`  
4. Сохрани и перезагрузи таблицу  
5. Появится новое меню **Sort feedback**  
6. Нажми **1. Sort feedback**, чтобы начать сортировку  

---

### 🧪 Примеры категорий

- Предложение  
- Сообщение об ошибке  
- Благодарность  

---

## 🔧 Планы на будущее

- [ ] Автоматическое добавление заголовков при создании листа  
- [ ] Возможность экспорта данных (например, на email)  
- [ ] Сделать сортировку автономной (например, раз в неделю)  
- [ ] Добавить опции очистки старых данных  
- [ ] Упростить и оптимизировать код  
- [ ] Настройка пользовательских триггеров из интерфейса  
