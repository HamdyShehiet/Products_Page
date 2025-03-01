import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./components/Product"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
