import React, { useState } from "react";
import ImageSearch from "./components/ImageSearch";
import ImageList from "./components/ImageList";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";

const App = () => {
  const [images, setImages] = useState([]);
  // const [fetchimg, setFetchImg] = useState("")

  return (
    <div>
      <div className="topBar">
        <NavBar />
        <ImageSearch setImages={setImages} images={images} />
      </div>
      <ImageList images={images} />

      <Pagination />
    </div>
  );
};

export default App;
