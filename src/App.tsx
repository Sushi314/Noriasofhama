import './css/App.css'
import Introduction from "./components/Introduction";
import History from "./components/History";
import Design from "./components/Design";
import Preservation from "./components/Preservation";
import Norias from "./components/Norias";
import Conclusion from "./components/Conclusion";
import References from './components/References';
import Title from './components/Title';
import PhotoAlbum from './components/PhotoAlbum';


function App() {

  return (
    <>
      <Title />
      
      <Introduction />
      <History />
      <Design />
      <Preservation />
      <Norias />
      <Conclusion />
      <PhotoAlbum />
      <References />
    </>
  )
}

export default App
