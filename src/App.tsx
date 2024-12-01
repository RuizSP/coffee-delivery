import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { GlobalStyles } from "./styledComponents/GlobalStyles.styles";
import { ICoffee } from "./Interfaces/ICoffee";

interface ICoffeeContext
{
    coffees: ICoffee[];
    setCoffees: any;
    coffeesInCart: ICoffee[];
    setCoffeesInCart: any;
}

export const CoffeeContext = createContext<ICoffeeContext>({} as ICoffeeContext);


function App() {
  const [coffees, setCoffees] = useState<ICoffee[]>([]);
  const [coffeesInCart, setCoffeesInCart] = useState<ICoffee[]>([]);

  return (
    <>
      <GlobalStyles/>
      <Router>
      <CoffeeContext.Provider value={{coffees, setCoffees, coffeesInCart, setCoffeesInCart}}>
      <Routes>
       
          <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/success" element={<Success/>}/>
          </Route>
      </Routes>
      </CoffeeContext.Provider>
    </Router>
    </>
  )
}

export default App
