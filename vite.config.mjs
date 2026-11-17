import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portfolio/',
  build: {
    rolldownOptions: {
      onwarn(warning, defaultHandler) {
        const isLucideClientDirective =
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.id?.includes('node_modules/lucide-react/')

        if (isLucideClientDirective) return
        defaultHandler(warning)
      },
    },
  },
})
