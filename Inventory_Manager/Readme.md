# 📦 Inventory Manager

## 🇬🇧 English

A Google Sheets automation using Google Apps Script to manage product inventory.  
Users can add products, check stock levels, and email a PDF restock report with one click.

---

### ✅ Features

- Dropdown list for selecting product categories  
- Button to add new product rows  
- Checks current stock against restock threshold  
- Automatically highlights low-stock items  
- Generates and emails PDF report directly from the sheet  
- Built-in user interaction with email prompt and alerts  
- Custom menu in the spreadsheet interface

---

### 📋 How to Use

1. Open your Google Sheet  
2. Go to `Extensions → Apps Script`  
3. Paste the script into `main.gs`  
4. Save and reload the spreadsheet  
5. A new menu **📦Inventory Menu** will appear  
6. Use the menu to:  
   - Add product rows  
   - Check stock levels  
   - Generate and send report

---

### 📂 Example Categories

- Gears  
- Bolts  
- Nails  
- Screws  

---

## 🔧 To-Do List (Planned Improvements)

- [ ] Check validity of email
- [ ] Rearrange "add row" function to automatically add one if no item selected in previous one  
- [ ] Add "Delete row" option with options to delete by item or selected
- [ ] Add more options to "add row" function. With autocomplete and amount of rows (by 2, 5, 10)
- [ ] Save email recipients history for quick reuse
- [ ] Interactive menu to make custom dropdown menus
- [ ] Integrate third party functions to convert and export in XLXS format directly


## 🎥 Demo
[▶️ Watch the demo on YouTube](https://youtu.be/2PjjL1_eSjk)

---

## 🇷🇺 Русский

Автоматизация Google Таблицы через Google Apps Script для управления складскими запасами.  
Позволяет добавлять товары, проверять уровень запасов и отправлять PDF-отчёт по электронной почте в один клик.

---

### ✅ Возможности

- Выпадающий список с категориями товаров  
- Кнопка для добавления новых строк товаров  
- Сравнение текущего запаса с порогом пополнения  
- Подсветка строк с низким запасом  
- Генерация и отправка отчёта в формате PDF по e-mail  
- Взаимодействие с пользователем (ввод e-mail, алерты)  
- Кастомное меню в интерфейсе таблицы

---

### 📋 Как использовать

1. Откройте Google Таблицу  
2. Перейдите в `Расширения → Apps Script`  
3. Вставьте код в `main.gs`  
4. Сохраните и обновите таблицу  
5. Появится новое меню **📦Inventory Menu**  
6. Используйте его для:  
   - Добавления новых товаров  
   - Проверки текущего запаса  
   - Генерации и отправки отчёта

---

### 📂 Примеры категорий

- Шестерёнки  
- Болты  
- Гвозди  
- Винты  

---

## 🔧 Планы на будущее

- [ ] Добавить проверку валидности e-mail 
- [ ] "добавить строку" c авто-заполнением при пустом выборе выпадающего меню на пред. строчки
- [ ] Добавить функционал по удалению строк с опциами удаления по категории/количеству/последнюю строку
- [ ] Добавить функционал по добавлению строк по категории/количеству (2, 5, 10)
- [ ] Хранить историю e-mail адресов для повторной отправки
- [ ] Поддержка нескольких листов или категорий
- [ ] Интегрировать новый функционал по преобразованию и экспорта в XLSX напрямую из таблиц


## 🎥 Demo
[▶️ Посмотреть демо-ролик на YouTube](https://youtu.be/2PjjL1_eSjk)
