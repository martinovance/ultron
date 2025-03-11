import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "@/shared/Loader/Loader"
import "@/App.css"
import { LikedItemsProvider } from "./context/likedItemsContext"
import DrawerContextProvider from "./context/drawerContext"
import CartDrawer from "./modules/Cart/Cart"
import StripeProvider from "./context/stripeContext"

const Home = lazy(() => import("@/modules/Home/Home"))
const Wishlist = lazy(() => import("@/modules/Wishlist/Wishlist"))
const Payment = lazy(() => import("@/modules/Payment/Payment"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <StripeProvider>
        <DrawerContextProvider>
          <LikedItemsProvider>
            <BrowserRouter>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  <Route path="checkout" element={<Payment />} />
                </Routes>
                <CartDrawer />
              </Box>
            </BrowserRouter>
          </LikedItemsProvider>
        </DrawerContextProvider>
      </StripeProvider>
    </Suspense>
  )
}

export default App
