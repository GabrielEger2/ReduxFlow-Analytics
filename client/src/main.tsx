import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'

import './index.css'
import { store } from './app/store.ts'

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
