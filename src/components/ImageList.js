



import React from "react";

const ImageList = ({images}) => {
  return (
    <div className="imagesList">
      {
      images.map((item) => (
        <img src={item.urls.regular} alt={item.alt_description} />
      ))
      }
    </div>
  );
};

export default ImageList;
