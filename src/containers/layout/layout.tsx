import React, { useState } from "react";
import styled from "styled-components";
import TagsFilter from "../../components/tagsFilter/tagsFilter";
import VideoCard, { videoInfo } from "../../components/videoCard/videoCard";
import useGetData from "../../hooks/useGetData";
import "./layout.css"


const Wapper=styled.section`
    background:${({theme}:{theme:any})=>theme['dark']},
    margin-top:20px;
`

const Layout = ()=>{
    const {error,data}:any=useGetData()
    const [tag,setTag]:any=useState('all')
    
    if(error)
        return (
            <h1>An error was found</h1>
        )

    if(data){
        let dataTag=!tag || tag!='all'?data.items.filter((i:videoInfo)=>i.snippet.tags?.find((j)=>j.toLowerCase()===tag)):data.items
        return (
            <Wapper>
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
            </Wapper>
        )
    }

    return (<></>)
}

export default Layout