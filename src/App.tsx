import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "@/shared/Loader/Loader"
import "@/App.css"
import { LikedItemsProvider } from "./context/likedItemsContext"
import DrawerContextProvider from "./context/drawerContext"
import CartDrawer from "./modules/Cart/Cart"
import StripeProvider from "./context/stripeContext"
import { CartProvider } from "./context/addToCartContext"
import Appbar from "./modules/Home/components/Appbar"
import Navbar from "./modules/Home/components/Navbar"
import Footer from "./modules/Home/components/Footer"
import MobileNav from "./modules/Home/components/MobileNav"

const Home = lazy(() => import("@/modules/Home/Home"))
const Wishlist = lazy(() => import("@/modules/Wishlist/Wishlist"))
const Payment = lazy(() => import("@/modules/Payment/Payment"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <StripeProvider>
        <CartProvider>
          <DrawerContextProvider>
            <LikedItemsProvider>
              <BrowserRouter>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                  }}
                >
                  <MobileNav />
                  <Appbar />
                  <Navbar />
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="checkout" element={<Payment />} />
                  </Routes>
                  <Box sx={{ mt: "auto" }}>
                    <Footer />
                  </Box>
                  <CartDrawer />
                </Box>
              </BrowserRouter>
            </LikedItemsProvider>
          </DrawerContextProvider>
        </CartProvider>
      </StripeProvider>
    </Suspense>
  )
}

export default App
