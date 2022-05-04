const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    process.env.NODE_ENV === 'production' &&
    purgecss({
      content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
      ],
      whitelist: ['link-active', 'link-exact-active'],
    })
  ],
}