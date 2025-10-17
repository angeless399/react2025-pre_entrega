
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./componentes/Nav/Nav"
import { Footer } from "./componentes/Footer/Footer"
import { Header } from "./componentes/Header/Header"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/CartContext/CartProvider'

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Header />
        <Nav />
        <main>
          
         
            <Routes>
              <Route path="/" element={<ItemListContainer titulo={'Nuestros Productos'} />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              {/* <ItemListContainer  titulo={'Nuestros Productos'} /> */}
            </Routes>
         
        </main>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
