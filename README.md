# Aplikasi Cek Ongkos Kirim

## Deskripsi
Aplikasi Cek Ongkos Kirim adalah sebuah aplikasi web yang memungkinkan pengguna untuk menghitung biaya pengiriman barang antar kota di Indonesia. Aplikasi ini menggunakan API RajaOngkir untuk mendapatkan data provinsi, kota, dan estimasi biaya pengiriman.

## Fitur
- Pemilihan provinsi dan kota asal pengiriman
- Pemilihan provinsi dan kota tujuan pengiriman
- Input berat paket
- Pemilihan kurir (JNE, TIKI, POS Indonesia)
- Perhitungan dan tampilan estimasi biaya pengiriman
- Tampilan estimasi waktu pengiriman

## Teknologi yang Digunakan
- React.js
- Node.js
- Express.js
- Axios untuk HTTP requests
- dotenv untuk manajemen variabel lingkungan
- API RajaOngkir

## Instalasi dan Penggunaan

### Prasyarat
- Node.js (versi 12 atau lebih baru)
- NPM (biasanya terinstall bersama Node.js)
- API key RajaOngkir

### Langkah-langkah Instalasi

1. Clone repositori
   ```
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```

2. Instal dependensi untuk backend(rajaongkir-proxy) dan frontend(CekOngkir)
   ```
   cd server
   npm install
   cd ../client
   npm install
   ```

3. Konfigurasi variabel lingkungan
   - Buat file `.env` di folder `backend(rajaongkir-proxy)`
   - Tambahkan API key RajaOngkir:
     ```
     RAJAONGKIR_API_KEY=your_api_key_here
     ```

4. Jalankan server backend
   ```
   cd server
   node server.js
   ```

5. Dalam terminal terpisah, jalankan aplikasi React
   ```
   cd client
   npm run dev
   ```

6. Buka browser dan akses `http://localhost:3000`


7. Untuk login, Anda dapat menggunakan akun berikut:

   - Email: `example@gmail.com`
   - Password: `example123`

