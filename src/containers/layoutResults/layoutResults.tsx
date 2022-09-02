import React, { useEffect } from "react";
import VideoCard, { videoSearch } from "../../components/videoCard/videoCard";
import useGetSearch from "../../hooks/useGetSearch";
import './layoutResults.css'
import {useSearchParams} from 'react-router-dom'


const LayoutResults = ()=>{
    const {error,isLoading,data,search,setSearch}:any=useGetSearch()
    const [searchParams] = useSearchParams();


    useEffect(()=>{
        setSearch(searchParams.get('q'))
        //console.log(searchParams.get('q'))
    },[searchParams.get('q')])

    if(error)
        return (
            <h1>An error was found</h1>
        )

    if(isLoading)
        return (
            <h1>Loading...</h1>
        )

    if(data)
    console.log(data)
        return (
            <section>
                <div className="grid-results">
                    {
                        data.items.map((info:videoSearch,index:number)=>{
                            return (
                                <VideoCard key={`default-${index}`} type="results" info={info}></VideoCard>
                            )
                        })
                    }
                </div>
            </section>
        )

    return (<></>)
}

export default LayoutResults