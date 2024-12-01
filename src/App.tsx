import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./layouts/Layout"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { Success } from "./pages/Success"
import { GlobalStyles } from "./styledComponents/GlobalStyles.styles"

function App() {


  return (
    <>
      <GlobalStyles/>
      <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/success" element={<Success/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
