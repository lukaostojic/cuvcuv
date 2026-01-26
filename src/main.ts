import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './router'
import './styles/main.scss'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    // plugins later
  }
)

