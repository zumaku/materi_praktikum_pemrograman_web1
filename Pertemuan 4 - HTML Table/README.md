# Properti HTML untuk Tabel

Di HTML, tabel memiliki berbagai atribut bawaan untuk mengatur tampilannya tanpa menggunakan CSS. Meskipun banyak dari atribut ini sudah usang (deprecated), pemahaman ini masih berguna untuk memahami dasar struktur HTML.

## 1. Atribut pada `<table>`

- **`border`**: Menentukan ketebalan garis tepi tabel.
  - Contoh: `<table border="1">`
- **`cellpadding`**: Menentukan ruang antara konten dalam sel dengan batas sel.
  - Contoh: `<table cellpadding="10">`
- **`cellspacing`**: Menentukan jarak antar sel dalam tabel.
  - Contoh: `<table cellspacing="5">`
- **`width` dan `height`**: Menentukan lebar dan tinggi tabel (dalam piksel atau persentase).
  - Contoh: `<table width="100%">`
- **`align`** (deprecated): Menentukan posisi tabel secara horizontal (kiri, tengah, atau kanan).
  - Contoh: `<table align="center">`
- **`bgcolor`** (deprecated): Menentukan warna latar belakang tabel.
  - Contoh: `<table bgcolor="#f0f0f0">`
- **`frame`**: Menentukan sisi tabel yang memiliki garis tepi.
  - Nilai: `void`, `above`, `below`, `hsides`, `lhs`, `rhs`, `vsides`, `box`, `border`.
  - Contoh: `<table frame="box">`
- **`rules`**: Menentukan bagian dalam tabel yang diberi garis.
  - Nilai: `none`, `groups`, `rows`, `cols`.
  - Contoh: `<table rules="rows">`
- **`summary`** (deprecated): Memberikan deskripsi singkat tentang tabel untuk kebutuhan aksesibilitas.
  - Contoh: `<table summary="Tabel ini menampilkan data siswa">`
- **`bordercolor`** (deprecated): Menentukan warna garis tepi tabel.
  - Contoh: `<table border="1" bordercolor="blue">`

## 2. Atribut pada `<tr>` (Table Row)

- **`align`**: Menentukan perataan teks dalam baris.
  - Nilai: `left`, `right`, `center`.
- **`bgcolor`**: Menentukan warna latar belakang untuk baris tertentu.
  - Contoh: `<tr bgcolor="#e0e0e0">`
- **`valign`**: Menentukan perataan vertikal konten dalam sel.
  - Nilai: `top`, `middle`, `bottom`.

## 3. Atribut pada `<th>` dan `<td>` (Table Header dan Table Data)

- **`colspan`**: Menentukan jumlah kolom yang harus digabungkan oleh sel tersebut.
  - Contoh: `<td colspan="2">`
- **`rowspan`**: Menentukan jumlah baris yang harus digabungkan oleh sel tersebut.
  - Contoh: `<td rowspan="3">`
- **`align`**: Menentukan perataan horizontal teks dalam sel.
  - Nilai: `left`, `right`, `center`.
- **`valign`**: Menentukan perataan vertikal teks dalam sel.
  - Nilai: `top`, `middle`, `bottom`.
- **`bgcolor`**: Menentukan warna latar belakang untuk sel tertentu.
- **`nowrap`**: Mencegah konten di dalam sel untuk turun ke baris berikutnya (deprecated).
- **`abbr`**: Menyediakan singkatan untuk judul kolom, sering digunakan untuk membantu aksesibilitas.
- **`scope`**: Menentukan cakupan sel `<th>` dalam tabel.
  - Nilai: `col`, `row`, `colgroup`, `rowgroup`.

## 4. Atribut pada `<col>` dan `<colgroup>`

- **`span`**: Menentukan berapa banyak kolom yang dicakup oleh elemen `<col>` atau `<colgroup>`.
- **`width`**: Menentukan lebar kolom.

## 5. Atribut pada `<caption>`

- **`align`** (deprecated): Menentukan posisi teks judul tabel, baik `top` (di atas tabel) atau `bottom` (di bawah tabel).

## Contoh Penggunaan Atribut Tabel HTML

Berikut adalah contoh penggunaan beberapa atribut pada tabel HTML:

```html
<table border="1" cellpadding="5" cellspacing="2" width="80%" bgcolor="#f9f9f9">
  <caption align="top">Data Siswa</caption>
  <tr bgcolor="#d9d9d9">
    <th align="left">Nama</th>
    <th align="center">Kelas</th>
    <th align="right">Nilai</th>
  </tr>
  <tr>
    <td rowspan="2">Andi</td>
    <td>10</td>
    <td align="right">85</td>
  </tr>
  <tr>
    <td>11</td>
    <td align="right">88</td>
  </tr>
  <tr>
    <td colspan="3" align="center">Data Tambahan</td>
  </tr>
</table>
```