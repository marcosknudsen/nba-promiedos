import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix:"REACT_APP_",
  plugins: [react()],
  base:"https://marcosknudsen.github.io/nba-promiedos/"
})
