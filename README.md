# Bookshelf API

Bookshelf API menggunakan Node.js dan Hapi Framework untuk mengelola koleksi buku.

## Instalasi

```bash
npm install
```

## Menjalankan Aplikasi

### Mode Produksi
```bash
npm run start
```

### Mode Development
```bash
npm run start-dev
```

### Lint Code
```bash
npm run lint
```

Server akan berjalan di `http://localhost:9000`

## API Endpoints

### 1. POST /books
Menambahkan buku baru ke dalam koleksi.

**Request Body:**
```json
{
  "name": "string (required)",
  "year": "number",
  "author": "string", 
  "summary": "string",
  "publisher": "string",
  "pageCount": "number",
  "readPage": "number",
  "reading": "boolean"
}
```

### 2. GET /books
Mendapatkan daftar semua buku (hanya id, name, publisher).

**Query Parameters (Optional):**
- `name`: Filter buku berdasarkan nama (case-insensitive)
- `reading`: Filter berdasarkan status baca (0 = tidak sedang dibaca, 1 = sedang dibaca)
- `finished`: Filter berdasarkan status selesai (0 = belum selesai, 1 = sudah selesai)

**Contoh:**
```
GET /books?name=dicoding
GET /books?reading=1
GET /books?finished=0
GET /books?name=harry&reading=1&finished=0
```

### 3. GET /books/{bookId}
Mendapatkan detail buku berdasarkan ID.

### 4. PUT /books/{bookId}
Memperbarui data buku berdasarkan ID.

### 5. DELETE /books/{bookId}
Menghapus buku dari koleksi berdasarkan ID.

## Struktur Data Buku

```json
{
  "id": "string",
  "name": "string",
  "year": "number",
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": "number",
  "readPage": "number",
  "finished": "boolean",
  "reading": "boolean",
  "insertedAt": "string",
  "updatedAt": "string"
}
```
