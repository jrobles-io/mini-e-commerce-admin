
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import List from './components/List'

const App = () => {
  return (
    <body>

      <div className="App">
        <Navbar />
        <Sidebar /> 
        <div className="list">
          <List />
        </div>
        <Footer /> 
      </div>

    </body>

  )
}

export default App