/**
 * ini adalah file untuk menjalankan server
 * @requires ./app - file konfigurasi utama
 * @requires dotenv - modul untuk membaca file .env
 */

const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
