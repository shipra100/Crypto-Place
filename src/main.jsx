import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Coin from './pages/Home/Coin/Coin.jsx'
import CoinContextProvider from './context/CoinContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CoinContextProvider >
    <App />
    </CoinContextProvider >
    </BrowserRouter>
   
  </React.StrictMode>,
)
