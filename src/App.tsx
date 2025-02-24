import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "@/shared/Loader/Loader"
import "@/App.css"
import { LikedItemsProvider } from "./context/likedItemsContext"
import DrawerContextProvider from "./context/drawerContext"
import CartDrawer from "./modules/Cart/Cart"

const Home = lazy(() => import("@/modules/Home/Home"))
const Wishlist = lazy(() => import("@/modules/Wishlist/Wishlist"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <DrawerContextProvider>
        <LikedItemsProvider>
          <BrowserRouter>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="wishlist" element={<Wishlist />} />
              </Routes>
              <CartDrawer />
            </Box>
          </BrowserRouter>
        </LikedItemsProvider>
      </DrawerContextProvider>
    </Suspense>
  )
}

export default App
