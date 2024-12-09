import './css/App.css'
import Introduction from "./components/Introduction";
import TheNoria from "./components/The Noria";

import Norias from "./components/Norias";
import Conclusion from "./components/Conclusion";
import Title from './components/Title';
import PhotoAlbum from './components/PhotoAlbum';
import NoriasTransform from './components/NoriasTransfrom';
import WorkCited from './components/WorkCited';


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
      <WorkCited />
    </>
  )
}

export default App
