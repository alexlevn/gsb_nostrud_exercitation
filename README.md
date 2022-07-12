# README

[published link](https://gsbnostrudexercitationmaster.gtsb.io/)

- install tailwindcs

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

_./src/styles/global.css_

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```
create _gatsby-browser.js_

```js
```