# 🚀 Best Practice Express.js

## 📂 Struktur Folder & Penjelasannya

### 🔧 1. `config/` → Konfigurasi Global Aplikasi
📌 Berisi pengaturan seperti **database connection**, **konfigurasi JWT**, dan konfigurasi lainnya.
✅ **Contoh file:** `database.js`

---

### 🎯 2. `controllers/` → Logika Bisnis Utama
📌 Berisi handler untuk menangani request **HTTP** dari user.
✅ **Contoh file:** `userController.js`

---

### 🛠 3. `middleware/` → Middleware Kustom
📌 Berisi middleware untuk **logging**, **error handling**, atau fungsi middleware lainnya.
✅ **Contoh file:** `errorHandler.js`

---

### 🏗 4. `models/` → Definisi Model Database
📌 Berisi skema database menggunakan ORM seperti **Mongoose** atau lainnya.
✅ **Contoh file:** `User.js`

---

### 🌐 5. `routes/` → Definisi Route Aplikasi
📌 Berisi daftar rute aplikasi dan menghubungkannya ke controller.
✅ **Contoh file:** `userRoutes.js`

---

### 🔍 6. `services/` → Business Logic / Service Layer
📌 Berisi logika bisnis utama yang memisahkan **controller dari logika berat**.
✅ **Contoh file:** `userService.js`

---

### ⚙ 7. `utils/` → Helper & Fungsi Umum
📌 Berisi fungsi umum seperti **hashing password, format tanggal**, dll.
✅ **Contoh file:** `hashPassword.js`

---

### ✅ 8. `validations/` → Validasi Input Request
📌 Menggunakan **express-validator** untuk memvalidasi data dari request.
✅ **Contoh file:** `userValidation.js`

---

## 💡 Mengapa Menggunakan Struktur Ini?
✅ **Lebih terorganisir** → Mudah dipahami dan dikembangkan  
✅ **Memisahkan logika bisnis** → Controller tetap bersih & modular  
✅ **Scalable** → Memudahkan pengelolaan proyek dal