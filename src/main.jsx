import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux"
import Bag from './components/Bag.jsx'
import Card from './components/Card.jsx'
import Container from './components/Container.jsx'
import store from './store/index.js'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Container/>
      },
      {
        path:'/bag',
        element:<Bag/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}><RouterProvider router={router}></RouterProvider></Provider>
  </StrictMode>
)
