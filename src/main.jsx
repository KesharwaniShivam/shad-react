import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import ChatBox from './components/chatbox/ChatBox.jsx'
import Check from './components/check/Check.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<ChatBox/>}>
      <Route path='chat' element ={<App/>} />,
      <Route path='/check' element ={<Check/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
