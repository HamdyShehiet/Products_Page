import Header from "./components/layouts/Header"
import Product from "./components/Product"
import Products from "./components/Products"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
