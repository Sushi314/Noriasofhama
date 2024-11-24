import './css/App.css'
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import History from "./components/History";
import Design from "./components/Design";
import Preservation from "./components/Preservation";
import OtherNorias from "./components/OtherNorias";
import Conclusion from "./components/Conclusion";
import References from './components/References';

function App() {

  return (
    <>
    <NavBar />
    <div className='Body'>
      <h1>Ancient Waterworks of the Orontes</h1>
      <p>The evolution of hydraulic technology featuring the Norias of Hama, Syria.</p>
      <Introduction />
      <History />
      <Design />
      <Preservation />
      <OtherNorias />
      <Conclusion />
      <References />
    </div>
    </>
  )
}

export default App
