import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './pages/Home.jsx';
import AuthProvider from './FirebaseAuth/AuthProvider.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AllArtsCrafts from './pages/AllArtsCrafts.jsx';
import AddArtsCrafts from './pages/AddArtsCrafts.jsx';
import MyArtsCrafts from './pages/MyArtsCrafts.jsx';
import ArtDetails from './pages/ArtDetails.jsx';
import ArtUpdatePage from './pages/ArtUpdatePage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('http://localhost:5000/all-arts')

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:"/all-arts-craft",
        element:<AllArtsCrafts></AllArtsCrafts>,
        loader: ()=>fetch('http://localhost:5000/all-arts')
      },
      {
        path:"/add-arts-craft",
        element:<AddArtsCrafts></AddArtsCrafts>
      },
      {
        path:"/my-arts-craft-list",
        element:<MyArtsCrafts></MyArtsCrafts>,
         //loader: ({params})=>fetch(`http://localhost:5000/all-arts/${params.id}`),
        
        
      },
      {
        path:'/art/:id',
        element:<ArtDetails></ArtDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/all-arts/${params.id}`)
      },
      {
        path:"/art-update/:id",
        element:<ArtUpdatePage></ArtUpdatePage>,
        loader: ({params})=>fetch(`http://localhost:5000/all-arts/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
