
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./componentes/Nav/Nav"
import { Footer } from "./componentes/Footer/Footer"
import { Header } from "./componentes/Header/Header"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from "./componentes/Cart/Cart"
import { ProductFormContainer } from "./componentes/adminComponents/ProductFormContainer/ProductFormContainer"
import { MainLayout } from './layouts/MainLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { RutaProtegida } from './componentes/RutaProtegida/RutaProtegida'
import { Login } from './componentes/Login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          {/* <Nav /> */}
          <main>


            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<ItemListContainer titulo={'Nuestros Productos'} />} />
                <Route path="/category/:category" element={<ItemListContainer titulo={'Bienvenidos'} />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />} />

                <Route
                  path="alta-productos"
                  element={
                    <RutaProtegida>
                      <ProductFormContainer />
                    </RutaProtegida>
                  }
                />
              </Route>
              {/* <Route path="/admin" element={<ProductFormContainer />} />      */}
            </Routes>

          </main>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
