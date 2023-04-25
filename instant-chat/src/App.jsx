import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import ChatRoom from "./pages/ChatRoom"
import  {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <div>
     
      <Navbar/>
      <Login/>
      <ChatRoom/>
    
     
  
    </div>
  )
}

export default App
