import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Dashboard} from './pages/Dashboard'
import {Send} from './pages/Send'
import { Landing } from "./pages/Landing"

function App() {
  return (
    <>
      <div>
          <BrowserRouter>
              <Routes>
                <Route path ='/' element = {<Landing></Landing>}> </Route>
                <Route path = '/signup' element = {<Signup></Signup>}></Route>
                <Route path = '/signin' element = {<Signin></Signin>}></Route>
                <Route path = '/dashboard' element = {<Dashboard></Dashboard>}></Route>
                <Route path = '/send' element = {<Send></Send>}></Route>
              </Routes>
          </BrowserRouter>          
      </div>
    </>
  )
}
export default App
