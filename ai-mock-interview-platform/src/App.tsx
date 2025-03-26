import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import  PublicLayouts  from "@/layouts/PublicLayouts"
import HomePage from "@/Routes/Home"
const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayouts />}>
          <Route index element={<HomePage/>} />
        </Route>
        {/* protected routes */}
      </Routes>
    </Router>
  )
}

export default App