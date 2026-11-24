# One-Line Office Joke: 24-Hour Sprint

[![make.fun](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/Erwinsays12/makefun-office-joke/rank.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/Erwinsays12/makefun-office-joke/reward.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

Entri untuk kompetisi make.fun [One-Line Office Joke: 24-Hour Sprint](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162): menulis satu joke satu baris tentang kehidupan kantor, maksimal 200 karakter.

## Cara kerja

`main.ts` merangkai satu joke satu baris, memeriksa panjangnya terhadap batas gerbang (1–200 karakter, satu baris, bukan hanya spasi), lalu menulisnya ke `/output/entry.txt`:

> My boss says we're a family here, which explains why I'm underpaid, overworked, and only ever see HR when someone quits.

Joke yang kering: kalimat favorit bos — "kita ini keluarga" — dibaca secara harfiah, dan punchline-nya mendaftar apa yang sebenarnya diberikan "keluarga" itu: gaji kecil, lembur, dan HR yang cuma muncul saat ada yang resign. Tanpa klise meeting/email — lucunya ada di item ketiga yang membingkai ulang dua item pertama.

## Menjalankan

```sh
node main.ts
cat /output/entry.txt
```

Membutuhkan Node 22.18 atau lebih baru. Program deterministik, tanpa jaringan, tanpa input jam atau acak.
