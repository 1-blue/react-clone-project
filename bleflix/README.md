# ๐ bleflix ๐
`React` + `Typescript` + `recoil` + `styled-components` + `react-query` + `framer-motion`์ผ๋ก ๋ง๋  ๊ฐ๋จํ [netflix](https://www.netflix.com) ํด๋ก  ์ฌ์ดํธ

+ ์ฐธ๊ณ 
  1. [๋ธ๋ง๋ ์ฝ๋ ๊ฐ์](https://nomadcoders.co/react-masterclass)
  2. [boiler-plate](https://github.com/1-blue/boiler-plate-react-typescript)
  3. [movieDB( movie api ์ป์ด์จ ์นํ์ด์ง )](https://www.themoviedb.org/?language=ko)

## ๐ผ๏ธ ์ด๋ฏธ์ง ๐ผ๏ธ
0. ๋ฉ์ธํ์ด์ง ์ด๋ฏธ์ง

|black ๋ชจ๋|white๋ชจ๋|
|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/63289318/157345592-4d69fd1e-0236-4b35-8d5d-6c154b1a7023.jpg" width="100%" />|<img src="https://user-images.githubusercontent.com/63289318/157345599-2191764d-0bd3-4c80-ac87-0c47c7f7eaf3.jpg" width="100%" />|

1. ํ์ด์ง ์ด๋ ์คํ
<img src="https://user-images.githubusercontent.com/63289318/157345003-aa36de72-2a14-405f-ae1b-c2a273ff5612.gif" width="100%" alt="ํ์ด์ง ์ด๋ gif" />

2. `carousel` ์คํ
<img src="https://user-images.githubusercontent.com/63289318/157345082-26bb913e-2b47-4817-b912-468e85ccfaaa.gif" width="100%" alt="carousel ์คํ gif" />

3. ๋ฐ์ํ ์คํ
<img src="https://user-images.githubusercontent.com/63289318/157345090-40867d0c-d31a-4a52-8ad8-0f140387b70c.gif" width="100%" alt="๋ฐ์ํ ์คํ gif" />

4. ๊ฒ์ ์คํ
<img src="https://user-images.githubusercontent.com/63289318/157345097-8772285a-ca90-4ed6-a7c6-0747b4d82983.gif" width="100%" alt="๊ฒ์ ์คํ gif" />

## ๐ ๊ฐ์ด๋ ๋ผ์ธ ๐
```bash
cd blello

# ํจํค์ง ์ค์น
npm install

# ๊ฐ๋ฐ ๋ชจ๋ ์คํ
npm run dev

# ๋น๋
npm run build

# GitHub Pages๋ก ๋ฐฐํฌ
# ์ด ๋ถ๋ถ์ ์ ์์ ์ผ๋ก ์คํํ๋ ค๋ฉด package.json์์ homepage์ webpack.config.ts์ PUBLIC_URL์ ๋ํ ํ๊ฒฝ๋ณ์๊ฐ์ ์๋ง๊ฒ ๋ณ๊ฒฝ์์ผ์ค์ผํจ
npm run deploy
```

> `.env.development`, `.env.production` ์์ฑ ํ `API_KEY`๋ฅผ ๋ฃ์ด์ค์ผํจ

## ๐ ๋ฐฐํฌ ๐
๋ฐฑ์๋ ๋ถ๋ถ์ด ์๊ณ  ๊ฐ๋จํ ํ๋ก์ ํธ์ด๊ธฐ ๋๋ฌธ์ `GitHub-Pages`๋ฅผ ์ด์ฉํด์ ๋ฐฐํฌํจ

[belflix]](https://1-blue.github.io/react-clone-project/)

> ์ฃผ์) ํ๋์ ๋ ํฌ์งํ ๋ฆฌ์ ๋ชจ๋  ๊ฒฐ๊ณผ๋ฌผ์ ์ฌ๋ฆด ์์ ์ด๋ผ ๋ค๋ฅธ ์ฌ์ดํธ๊ฐ ๋์ฌ ์ ์์

## ๐ ๋ถ์กฑํ ์  ๐
1. ๊ฒ์์ฐฝ์ด์ธ ํด๋ฆญ ์ ๊ฒ์์ฐฝ ๋ซ๊ธฐ ๊ธฐ๋ฅ ์์
2. `api-key`๋ฅผ `.env`๋ก ์ฝ๋์์์๋ ์จ๊ฒผ์ง๋ง ๋คํธ์ํฌํญ์์ ํ์ธํ๋ฉด ๋ณด์
3. white theme๋ ์กฐ๊ธ ์ด์ํด๋ณด์