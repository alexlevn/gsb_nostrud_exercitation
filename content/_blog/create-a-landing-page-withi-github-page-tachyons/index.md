---
title: Create a landing page with tailwind and github page
date: '2022-08-02T07:09:00.284Z'
description: 'Steps how to create a landing page with tailwind and github page'
---

## Init

- create new gatsby project

```bash
npm install -g gatsby-cli
gatsby new my-gatsby-project
cd my-gatsby-project
```

or

```bash
npm init gatsby
```

- name the project, example: my-gatsby-project
- create blank project, so we don't need to install plugins, just select none for the questions

```bash
 cd gsb_landingpage
```

Start the local development server with

```bash
npm run develop
```

Clean the content index.js by replacing it with the following

```js
import * as React from 'react'

const IndexPage = () => {
  return <main>Hello Landing Page</main>
}

export default IndexPage
```

## Install tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss
npx tailwindcss init -p
```

_gatsby-config.js_

```js
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // ...
  ],
}
```

_tailwind.config.js_

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

_global.css_

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

_gatsby-browser.js_

```js
import './src/styles/global.css'
```

- test with index.js

```js
<h1 className="text-3xl font-bold underline">Hello world!</h1>
```

## Deploy to github pages

## Create menu, header, footer
