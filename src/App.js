

import React,{useState} from "react";
import ImageSearch from "./components/ImageSearch";
import ImageList from "./components/ImageList";
import NavBar from "./components/NavBar";


const App=()=> {

  const [images, setImages] = useState([])


  return (
    <div>
      <div className="topBar">
        <NavBar/>
        <ImageSearch setImages={setImages} images ={images}/>
      </div> 
      <ImageList images={images}/>

      
      
    </div>
  )
}

export default App;
