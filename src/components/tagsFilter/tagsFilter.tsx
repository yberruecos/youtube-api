import React from "react";
import './tagsFilter.css'

const tags=['All','Music','Drake','Minecraft','Youtube','Colombia','Comedy','Playstation','Salsa','J balvin','Google','Apple']

const TagsFilter=({tag,setTag}:{tag:string,setTag:any})=>{
    return (
        <div className="tags">
            <div className="tags-container">
                {
                    tags.map((item:string,index:number)=>{
                        return (<span className={tag===item.toLowerCase()?'tag active':'tag'} key={`tags-${index}`} onClick={()=>setTag(item.toLowerCase())}>{item}</span>)
                    })
                }
            </div>
        </div>
    )
}

export default TagsFilter