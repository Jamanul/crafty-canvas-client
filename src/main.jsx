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
import ErrorPage from './pages/ErrorPage.jsx';
import ProtectedRoute from './Routes/ProtectedRoute.jsx';
import SubCategoryPage from './pages/SubCategoryPage.jsx';
import AddSubCategory from './pages/AddSubCategory.jsx';
import SubCategoryDetailsPage from './pages/SubCategoryDetailsPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('https://crafty-canvas-server.vercel.app/all-arts')

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
        loader: ()=>fetch('https://crafty-canvas-server.vercel.app/all-arts')
      },
      {
        path:"/add-arts-craft",
        element:<ProtectedRoute><AddArtsCrafts></AddArtsCrafts></ProtectedRoute> 
      },
      {
        path:"/my-arts-craft-list",
        element:<ProtectedRoute><MyArtsCrafts></MyArtsCrafts></ProtectedRoute>,
         //loader: ({params})=>fetch(`https://crafty-canvas-server.vercel.app/all-arts/${params.id}`),
        
        
      },
      {
        path:'/art/:id',
        element:<ProtectedRoute><ArtDetails></ArtDetails></ProtectedRoute> ,
        loader: ({params})=>fetch(`https://crafty-canvas-server.vercel.app/all-arts/${params.id}`)
      },
      {
        path:"/art-update/:id",
        element:<ProtectedRoute><ArtUpdatePage></ArtUpdatePage></ProtectedRoute> ,
        loader: ({params})=>fetch(`https://crafty-canvas-server.vercel.app/all-arts/${params.id}`)
      },
      {
        path:"/subCategory/:id",
        element:<SubCategoryPage></SubCategoryPage>,
      },
      {
        path:'add-subCategory',
        element:<AddSubCategory></AddSubCategory>
      },
      {
        path:"/sub-category-art/:id",
        element:<ProtectedRoute><SubCategoryDetailsPage></SubCategoryDetailsPage></ProtectedRoute>,
        loader: ({params})=>fetch(`https://crafty-canvas-server.vercel.app/all-sub-category/${params.id}`)
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
