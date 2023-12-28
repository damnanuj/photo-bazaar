




import React,{useEffect, useState} from "react";
import axios from "axios";

// console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);

const ImageSearch = ({images, setImages, setFetchImg}) => {
    const [searchItem , setSearchItem] = useState("")
    const [page, setPage] = useState(1);

    useEffect (()=>{
        
        fetchImages()   //first param null to =>e
    },[])

    useEffect(()=>{
        setPage(1)
    },[searchItem])    //making the page 1 again if new search

    async function fetchImages(e , flag){
        console.log(e)
        console.log(flag);
        // console.log(initialInput);
        if(e){
            e.preventDefault()
        }
        try{
                const response = await axios.get("https://api.unsplash.com/search/photos", {
                headers :{
                    "Accept-Version": "v1",
                    "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                },
                params:{
                    query: searchItem, //|| "cats",
                    per_page : 4,
                    page : page
                }
            })
            // console.log(response.data.results);
            if(flag ==="submit"){
                setImages(response.data.results)
                // setPage(page+1)
            }
            else{
            // setImages(response.data.results)
                setImages([...images , ...response.data.results])
                // setPage(page+1)
            }
            setPage(page+1)
        }


        catch(error){
            console.log(error);
        }    
    }
    return (
        
        <div className="searchForm">

            <form onSubmit={(e)=>fetchImages(e, "submit")}>
                <input className="inputBox" type="text" placeholder="Search your image..."
                onChange={(e)=>setSearchItem(e.target.value)}
                value={searchItem}
                />
                <button className="srchBtn" type="submit">Search</button>
            </form>

            <div className="pagesBtn">
                {/* <button className="back">Previous</button> */}
                <button className="next"
                   onClick={fetchImages}>Next</button>
            </div>
        </div>

        
    )
}

export default ImageSearch