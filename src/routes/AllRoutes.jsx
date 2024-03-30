import { Route, Routes } from "react-router-dom"
import { Home } from "../pages"

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-700">
    <Routes>
        <Route path="/" exact element={<Home />} />
    </Routes>
    </div>
  )
}
