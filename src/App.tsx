import { AppRoutes } from "./app/routes"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"



function App() {

  return (
    <>
    <Header />
    <div className='container'>
      <AppRoutes />    
    </div>
    <Footer />
    </>
   )
}

export default App
