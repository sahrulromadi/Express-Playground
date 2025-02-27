# best practice express

## penjelasan folder

### 1. `config/` -> konfigurasi global aplikasi

- seperti database connection, konfigurasi JWT
- **contoh file:** `database.js`

### 2. `controllers/` -> logika bisnis utama

- berisi handler untuk request HTTP
- **contoh file:** `userController.js`

### 3. `middleware/` -> kustom middleware

- untuk logging, error handling
- **contoh file:** `errorHandler.js`

### 4. `models/` -> definisi model database

- berisi struktur data untuk database
- **contoh file:** `User.js`

### 5. `routes/` -> definisi route aplikasi

- mengatur rute dan menghubungkan dengan controller
- **contoh file:** `userRoutes.js`

### 6. `services/` -> business logic / service layer

- memisahkan logika berat dari controller
- **contoh file:** `userService.js`

### 7. `utils/` -> helper & fungsi umum

- berisi fungsi yang sering digunakan, seperti hashing password atau format tanggal
- **contoh file:** `hashPassword.js`

### 8. `validations/` -> validasi input request

- digunakan untuk validasi input, misalnya dengan express-validator
- **contoh file:** `userValidation.js`
