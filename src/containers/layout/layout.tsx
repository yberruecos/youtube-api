import React, { useState } from "react";
import TagsFilter from "../../components/tagsFilter/tagsFilter";
import VideoCard, { videoInfo } from "../../components/videoCard/videoCard";
import useGetData from "../../hooks/useGetData";
import "./layout.css"

const Layout = ()=>{
    const {error,isLoading,data}:any=useGetData()
    const [tag,setTag]:any=useState('all')
    
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
        let dataTag=!tag || tag!='all'?data.items.filter((i:videoInfo)=>i.snippet.tags?.find((j)=>j===tag)):data.items
        return (
            <section>
                <TagsFilter tag={tag} setTag={setTag}></TagsFilter>
                <div className="grid-data">
                    {
                        dataTag.map((item:videoInfo,index:number)=>{
                            return (
                                <VideoCard key={`default-${index}`} info={item} type='default'></VideoCard>
                            )
                        })
                    }
                </div>
            </section>
        )

    return (<></>)
}

export default Layout