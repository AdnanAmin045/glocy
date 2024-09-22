import './App.css';
import Navbar from './Components/navbar';
import Menu from './Components/menu';
import Home from './Components/home';
import Footer from './Components/footer';
import FruitVegetables from './Components/productsMenu/furitsVegetables'
import MeatAndSeafood from './Components/productsMenu/meatAndSeafood'
import BreakfastDairy from './Components/productsMenu/breakfastDairy';
import Beverages from './Components/productsMenu/beverages';
import BreadsBakery from './Components/productsMenu/breadsBakery';
import FrozenFood from './Components/productsMenu/frozenFood';
import BiscuitsSnack from './Components/productsMenu/biscuitsSnack';
import GroceryStaples from './Components/productsMenu/groceryStaples';
import Contact from './Components/contact';
import LogIn from './Components/logIn';
import SignUp from './Components/signUp';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LogIn />
    },
    {
      path: '/signUp',
      element: <SignUp/>
    },
    {
      path: '/home',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <Home />
        </div>
        <Footer />
      </>
    },
    {
      path: '/fruitVegetables',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <FruitVegetables />
        </div>
        <Footer />
      </>
    },
    {
      path: '/meatAndSeafood',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <MeatAndSeafood />
        </div>
        <Footer />
      </>
    },
    {
      path: '/breakfastDairy',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <BreakfastDairy />
        </div>
        <Footer />
      </>
    },
    {
      path: '/beverages',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <Beverages />
        </div>
        <Footer />
      </>
    },
    {
      path: '/breadsBakery',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <BreadsBakery />
        </div>
        <Footer />
      </>
    },
    {
      path: '/frozenFood',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <FrozenFood />
        </div>
        <Footer />
      </>
    },
    {
      path: '/biscuitsSnack',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <BiscuitsSnack />
        </div>
        <Footer />
      </>
    },
    {
      path: '/groceryStaples',
      element: <>
        <Navbar />
        <div className='flex'>
          <Menu />
          <GroceryStaples />
        </div>
        <Footer />
      </>
    },
    {
      path: '/contact',
      element: <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
