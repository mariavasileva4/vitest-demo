// Einstellungen für die App UND für die Tests (nur eine Datei!)
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    // jsdom = ein nachgeahmter Browser, damit wir Komponenten testen können
    environment: 'jsdom',
    coverage: {
      include: ['src/**'],
      exclude: ['src/main.js', 'src/App.vue']
    }
  }
})
