// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: './client',
  serverDir: './server',
  imports: {
    dirs: ['stores', '~stores', '~node_modules', '~server', '~public'],
  },
})
