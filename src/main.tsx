import { Amplify } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom/client'

import outputs from '../amplify_outputs.json'
import App from './App.tsx'
import './style/global.css'
import '@stackflow/plugin-basic-ui/index.css'

// ignore for controlling auth config using cdk 
// @ts-ignore
Amplify.configure(outputs)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
