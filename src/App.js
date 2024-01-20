import Home from './pages/home/Home';
import Users  from './pages/users/Users';
import Products from './pages/products/Products'
import './App.css';
import { createRoot } from "react-dom/client";
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  
  const Layout=({ isSidebarOpen, toggleSidebar })=>{
    return (
      <div className='main'>
      <Navbar/>
      <div className='container'>
        <div className='menuContainer'><Menu isOpen={isSidebarOpen} />
        <button onClick={handleToggleSidebar}>T</button>
</div>
        <div className='contentContainer'>
        <Outlet/>
        </div>
      </div>
      {/* <Footer/> */}
      </div>
    )
  } 

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/users',
          element:<Users/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        // {
        //   path:'/footer',
        //   element:<Footer/>
        // }
      ]
    }
  ]);

  return (
    
      <RouterProvider router={router}/>
    
  );
}

export default App;
