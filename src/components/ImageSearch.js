

import React,{useEffect, useState} from "react";
import axios from "axios";
import logo from "../imgs/logo.png"

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
                    "Authorization": "Client-ID 2FYAOaJE5N6fCwgL5proDgq2NgqoZ0R2LaBmCiRRJEM"
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
        <div className="homepage">

            <img className="logo" src={logo} alt="logo"/>

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