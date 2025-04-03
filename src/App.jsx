

// import './App.css'
import {Header} from './components/Header';
import {Home} from './sections/Home';
import {About} from './sections/About';
import {Projects} from './sections/Projects';
import {Footer} from './components/Footer';
import {Idioma} from './components/Idioma';



function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About />
      <Projects/>
      <Footer />
      <Idioma />
    </>
  )
}

export default App
