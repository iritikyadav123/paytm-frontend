 import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
 import Save from "./pages/Save"
 import SignIn from "./pages/SignIn"
 import Signup from "./pages/SignUp"


 export default function App() {
  return <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Save' element={<Save />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
  </div>
 }