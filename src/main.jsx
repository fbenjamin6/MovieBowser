import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageContextProvider } from './context/languageContext.jsx'
import { VideoModalContextProvider } from './context/videoModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <LanguageContextProvider>
        <VideoModalContextProvider>
            <App />
        </VideoModalContextProvider>
    </LanguageContextProvider>

)
