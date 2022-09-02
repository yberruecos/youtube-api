import React from "react";
import { Span } from "../tagsFilter/tagsFilter";
import './videoCard.css'

export type thumbail= {
    url: string,
    width: number,
    height: number
}

export type snippet = {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
        default: thumbail,
        medium: thumbail,
        high: thumbail
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
        title: string,
        description: string
    },
    defaultAudioLanguage: string
}


export type videoInfo={
    kind: string,
    etag: string,
    id: string,
    snippet: snippet,
    statistics?: {
        viewCount: string,
        likeCount: string,
        favoriteCount: string,
        commentCount: string
    },
    player?: {
        embedHtml: string
    }
}

type idVideo={
    kind:string,
    videoId:string
}

export type videoSearch={
    kind: string,
    etag: string,
    id: idVideo,
    snippet: snippet,
    statistics?: {
        viewCount: string,
        likeCount: string,
        favoriteCount: string,
        commentCount: string
    },
}

const VideoCard=({info,type}:{info:any,type:string})=>{
    return (
        <article>
            <a href={`https://www.youtube.com/watch?v=${type==='default'?info.id:info.id.videoId}`} target='_blank'>
                <img src={info.snippet.thumbnails.high.url} />
                <h3>{info.snippet.title}</h3>
                <div>
                    <p>{info.snippet.description}</p>
                    <div>
                        <span>{info.snippet.channelTitle}</span><br/>
                        {info.statistics?
                        <Span primary className="video-card-views">{info.statistics.viewCount} views</Span>:<></>
                        }
                    </div>
                </div>
            </a>
        </article>
    )
}

export default VideoCard