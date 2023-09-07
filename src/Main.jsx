import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Main.css'
import Footer from './Components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Footer>
      <App />
    </Footer>
  </React.StrictMode>
)
