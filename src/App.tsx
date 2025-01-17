import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "@/shared/Loader/Loader"
import "@/App.css"

const Home = lazy(() => import("@/modules/Home/Home"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
