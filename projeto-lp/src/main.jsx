import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './components/Header/Header.jsx'
import { sobre } from './components/sobre/sobre.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <sobre categoria="sobreMim" />
  </React.StrictMode>,
)
