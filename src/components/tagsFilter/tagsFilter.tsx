import React from "react";
import './tagsFilter.css'
import styled from 'styled-components'

const tags=['All','Music','Hip Hop','Minecraft','Youtube','Colombia','Comedy','Playstation','Salsa','J balvin','Google','Apple']

export const Span=styled.span`
background: ${(props:{primary:boolean})=>props.primary?'white':'red'};
cursor: pointer;
width: 110px;
border-radius: 51px;
margin-right: 25px;
`;

const SpanActive=styled(Span)`
background: gray;
`;

const TagsFilter=({tag,setTag}:{tag:string,setTag:any})=>{
    return (
        <div className="tags">
            <div className="tags-container">
                {
                    tags.map((item:string,index:number)=>{
                        return (
                            tag!=item.toLowerCase()?
                                <Span key={`tags-${index}`} onClick={()=>setTag(item.toLowerCase())} primary>{item}</Span>:<SpanActive key={`tags-${index}`} onClick={()=>setTag(item.toLowerCase())} primary>{item}</SpanActive>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TagsFilter