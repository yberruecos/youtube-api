import {describe,test,expect} from 'vitest'
import {screen,render} from '@testing-library/react'
import VideoCard, { videoInfo } from './videoCard'


const videoTest:videoInfo= {
    "kind": "youtube#video",
    "etag": "kvETENABYUsAgOytxr6AJrw_tXE",
    "id": "GaHcnPDcUOE",
    "snippet": {
      "publishedAt": "2022-08-24T16:02:24Z",
      "channelId": "UCiYcA0gJzg855iSKMrX3oHg",
      "title": "YouTube: Racism and Favoritism",
      "description": "Never in a million years did I think I would upload a video like this but here we are.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/GaHcnPDcUOE/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/GaHcnPDcUOE/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/GaHcnPDcUOE/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "CoryxKenshin",
      "tags": [
        "youtube",
        "favoritism",
        "and",
        "racism",
        "coryxkenshin",
        "cory",
        "kenshin",
        "black",
        "youtube black",
        "unfair",
        "discrimination",
        "age",
        "restriction",
        "2022"
      ],
      "categoryId": "20",
      "liveBroadcastContent": "none",
      "localized": {
        "title": "YouTube: Racism and Favoritism",
        "description": "Never in a million years did I think I would upload a video like this but here we are."
      },
      "defaultAudioLanguage": "en-US"
    },
    "statistics": {
        "viewCount": "803277",
        "likeCount": "28829",
        "favoriteCount": "0",
        "commentCount": "2205"
    },
    "player": {
      "embedHtml": "\u003ciframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/GaHcnPDcUOE\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
    }
  }

  
describe('Test videoCard',()=>{
    test('Render info correctly',()=>{
        const {container} = render(<VideoCard info={videoTest} type='default'></VideoCard>)
        expect(screen.getByText(/YouTube: Racism and Favoritism/i)).toBeDefined()
        expect(screen.getByText(/CoryxKenshin/i)).toBeDefined()
        expect(screen.getByText(/Never in a million years did I think I would upload a video like this but here we are./i)).toBeDefined()
        expect(screen.getByText(/803277 views/i)).toBeDefined()

        const imgElement=container.getElementsByTagName('img');
        expect(imgElement[0].src).toBe('https://i.ytimg.com/vi/GaHcnPDcUOE/hqdefault.jpg')

        const link=container.getElementsByTagName('a');
        expect(link[0].href).toBe('https://www.youtube.com/watch?v=GaHcnPDcUOE')
    })
})