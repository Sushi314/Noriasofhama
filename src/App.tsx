import './css/App.css'
import Introduction from "./components/Introduction";
import TheNoria from "./components/The Noria";

import Norias from "./components/Norias";
import Conclusion from "./components/Conclusion";
import References from './components/WorkCited';
import Title from './components/Title';
import PhotoAlbum from './components/PhotoAlbum';
import NoriasTransform from './components/NoriasTransfrom';


function App() {

  return (
    <>
      <Title />
      <Introduction />
      <TheNoria />
      <NoriasTransform />
      <Norias />
      <Conclusion />
      <PhotoAlbum />
      <References />
    </>
  )
}

export default App
