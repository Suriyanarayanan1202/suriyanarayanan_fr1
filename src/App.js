
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './bautique/Home.jsx';
import { Register } from './bautique/Register.jsx';
import {Sarees} from './bautique/Sarees.jsx';
import { Salwars } from './bautique/Salwars.jsx';
import { Lehangas } from './bautique/Lehangas.jsx';
import { ReadyMade } from './bautique/ReadyMade.jsx';
import { Cart } from './bautique/Cart.jsx';
import { Kurthis } from './bautique/Kurthis.jsx';
import Navbar from './bautique/Navbar.jsx';
import { Admin } from './bautique/Admin.jsx';
import Login from './bautique/Login.jsx';
import AdminDetails from './bautique/AdminDetails.jsx';
import { AddProduct } from './bautique/Addproduct.jsx';
import Addcategory   from './bautique/Addcategory.jsx';
import ShowProducts from './bautique/ShowProducts.jsx';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />

        <Route path='/product/:category' element={<ShowProducts/>} />
        <Route path='/Sarees' element={<Sarees/>} />
        <Route path='/Salwars' element={<Salwars/>} />
        <Route path='/Lehangas' element={<Lehangas/>} />
        <Route path='/ReadyMade' element={<ReadyMade/>} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Kurthis' element={<Kurthis/>} />
        <Route path='/Admin' element={<Admin/>}/> 
        <Route path='/admindetails' element={<AdminDetails/>}/>
        <Route path='/Addproduct' element={<AddProduct/>} />
        <Route path='/Addcategory' element={<Addcategory/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
