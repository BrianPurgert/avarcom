# Frontend
Приложения написан на Nuxt 3. Менеджер пакетов - pnpm. Версия ноды 18.

## Стек
- ***Nuxt 3*** SSR (версия ^3.2.0) - [документация](https://nuxt.com/docs)
- ***Vue 3*** (версия связана с nuxt) - [документация](https://vuejs.org/guide/introduction.html) 
- ***Typescript*** (версия ^4.9.5) - [документация TS](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) и [vue + TS](https://vuejs.org/guide/typescript/overview.html) 
- ***Vuetify*** (версия ^3.1.2) - [документация](https://vuetifyjs.com/en/introduction/why-vuetify/)
- ***Jest*** (версия ^29.5.0) - [документация](https://jestjs.io/ru/docs/getting-started) и [vue test](https://vuejs.org/guide/scaling-up/testing.html) и [nuxt test](https://nuxt.com/docs/getting-started/testing)

Для codestyle используется eslint и prettier


## Для локального запуска
Для полной информации [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)

1. находясь в папке ***frontend***
```bash
pnpm install
```
2. для запуска проекта
```bash
pnpm run dev
```

3. для проверки прода и сборки
```bash
pnpm run build
```

4. предпросмотр локально:

```bash
npm run preview
```

## Docker

### Dependencies

Для локального запуска с докерром установить зависимости

```bash
# docker
sudo docker build . -t root/frontend
```

## Start

После завершения сборки вы можете запустить контейнер, используя образ локально, чтобы убедиться, что все работает должным образом:

```bash
# docker
sudo docker run -p 3000:3000 root/frontend
```

## Тестирование

Для тестирования используется jest nuxt/test-utils vue/test-utils

### Для запуска теста

```bash
pnpm jest
```

### Путь к тестам
```bash
@/test-utils/tests
```
### Добавление нового теста

Необходимо создать файл с разрешением ___*.test.ts___. 

Например ***TheTitle.test.ts***

![GS Delta App](public/favicon.ico)
