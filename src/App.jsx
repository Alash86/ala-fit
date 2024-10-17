
import './App.css'
import Header from './assets/components/header'
import { Route, Routes } from 'react-router-dom'
import About from './assets/pages/about'
import Home from './assets/pages/home'
import Workouts from "./assets/pages/workouts"
import Nutrition from './assets/pages/nutrition'
import Shop from './assets/pages/shop'
import Login from './assets/pages/login'
import Signup from './assets/pages/sign-up'
import Footer from './assets/components/footer'



function App() {


  return (
    <div className="app min-vh-100 d-flex flex-column ">
      <Header />
      <main className="flex-fill">

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Workouts' element={<Workouts />} />
          <Route path='/Nutrition' element={<Nutrition />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Sign-up' element={<Signup />} />


        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
