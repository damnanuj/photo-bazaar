

import React,{useState} from "react";
import axios from "axios";

const ImageSearch = ()=>{

    const [searchItem , setSearchItem] = useState("")
    const [images, setImages] = useState([])

    async function fetchImages(e){
        e.preventDefault();
        try{
                const response = await axios.get("https://api.unsplash.com/search/photos", {
                headers :{
                    "Accept-Version": "v1",
                    "Authorization": "Client-ID 2FYAOaJE5N6fCwgL5proDgq2NgqoZ0R2LaBmCiRRJEM"
        
                },
                params:{
                    query: searchItem
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
        <div>
            <form onSubmit={fetchImages}>
                <input type="text" placeholder="Search your image..."
                onChange={(e)=>setSearchItem(e.target.value)}
                value={searchItem}
                />
                <button type="submit">Search</button>
            </form>

        </div>
    )
}

export default ImageSearch