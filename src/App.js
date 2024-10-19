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
import About from './Components/about';
import Blog from './Components/blog';
import MyAccountMenuBar from "./Components/MyAccount/accountMenuBar"
import PersonalInfo from './Components/MyAccount/personalInfo';
import Wishlist from './Components/wishlist';
import AddtoCart from './Components/addtoCart';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <div className='flex items-center justify-center min-h-screen'>
          <LogIn />
        </div>
      </>
    },
    {
      path: '/signUp',
      element:
        <>
          <div className='flex items-center justify-center min-h-screen'>
            <SignUp />
          </div>
        </>
    },
    {
      path: '/about',
      element: <>
        <Navbar />
        <About />
        <Footer />
      </>
    },
    {
      path: '/wishlist',
      element: <>
        <Navbar />
        <Wishlist />
        <Footer />
      </>
    },
    {
      path: '/accountMenuBar',
      element:
        <>
          <Navbar />
          <div className='w-full flex justify-center'>
            <div className='p-[4vw] w-[80%] bg-[#f5f5f7] py-[5vw] my-5 flex justify-between'>
              <div className='w-[20%]'>
                <MyAccountMenuBar/>
              </div>
              <div className='w-[80%]'>
                <PersonalInfo />
              </div>
            </div>
          </div>
          <Footer />
        </>
    },
    {
      path: '/blog',
      element: <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    },
    {
      path: '/addtoCart',
      element: <>
        <Navbar />
        <AddtoCart />
        <Footer />
      </>
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
