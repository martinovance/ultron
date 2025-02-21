import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "@/shared/Loader/Loader"
import "@/App.css"
import { LikedItemsProvider } from "./context/likedItemsContext"

const Home = lazy(() => import("@/modules/Home/Home"))
const Wishlist = lazy(() => import("@/modules/Wishlist/Wishlist"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <LikedItemsProvider>
        <BrowserRouter>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="wishlist" element={<Wishlist />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </LikedItemsProvider>
    </Suspense>
  )
}

export default App
