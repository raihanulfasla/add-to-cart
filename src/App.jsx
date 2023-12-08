import { createContext, useState } from 'react'
import Products from './components/Products'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Ourstory from './components/Ourstory';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const AppContext=createContext()

function App() {
  
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Header/><Products/></div> ,
    },
   
    
    {
      path: "/our_story",
      element: <Ourstory/>,
    },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
    // <div className='first'>
    //   <Container>
    //     <Header/>
    //   </Container>
    //   <Container>

    //   </Container>

      
    //   <Container>

    // <Products/>

    // </Container>
    // </div>
  )
}

export default App
