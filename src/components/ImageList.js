







const ImageList = ({images}) => {
    return (
        <div className="imagesList">
            {
                images.map(item => (
                   <img 
                   src={item.urls.thumb} alt={item.alt_description}
                   /> 
                ))
            }
        </div>
    )
}

export default ImageList