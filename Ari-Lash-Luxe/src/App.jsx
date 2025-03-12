import './App.css'
import Navbar from './components/header/navbar'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import Booking from './components/Booking'

function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <Landing />
      <Gallery />
      <Booking />
    </div>
  )
}

export default App
