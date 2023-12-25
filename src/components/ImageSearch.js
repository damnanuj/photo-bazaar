

import React,{useEffect, useState} from "react";
import axios from "axios";

// console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);

const ImageSearch = ({setImages}) => {
    const [searchItem , setSearchItem] = useState("")

    useEffect (()=>{
        fetchImages(null , "random")   //first param null to =>e
    },[])

    async function fetchImages(e , initialInput){
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
                    query: searchItem //|| initialInput
                }
            })
            console.log(response.data.results);
            setImages(response.data.results)
        }
        catch(error){
            console.log(error);
        }    
    }
    return (
        <div className="searchForm">

            <form onSubmit={fetchImages}>
                <input className="inputBox" type="text" placeholder="Search your image..."
                onChange={(e)=>setSearchItem(e.target.value)}
                value={searchItem}
                />
                <button className="srchBtn" type="submit">Search</button>
            </form>

        </div>
    )
}

export default ImageSearch