import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { store } from './app/store.ts'
import App from './App.tsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No root element found')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
