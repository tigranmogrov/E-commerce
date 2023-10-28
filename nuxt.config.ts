// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/eslint-module'],
  eslint: {
    lintOnStart: false,
    exclude: ['**/node_modules/**'],
  },
  devtools: { enabled: false },
  srcDir: './client',
  serverDir: './server',
  imports: {
    dirs: ['stores', '~stores', '~node_modules', '~server', '~public'],
  },
});
