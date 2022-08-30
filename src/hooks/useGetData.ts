import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { videoInfo } from '../components/videoCard/videoCard'
const API_URL='https://www.googleapis.com/youtube/v3/videos?part=id,snippet,player,statistics&key=AIzaSyDqZwLEcDKy9SVK7dFjyVMgMOfbZCxM9-k&chart=mostPopular&maxResults=50'


export type ytData={
  kind: string,
  etag: string,
  items: videoInfo[],
  nextPageToken: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  }
} 

const fetchData=async()=>{
    const {data}:{data:ytData}=await axios.get(`${API_URL}`)

    return data
}

const useGetData=()=>{
    const {error,isLoading,data}=useQuery(['data'],()=>fetchData(),{ keepPreviousData : true })

    return {
        error,
        isLoading,
        data
    }
}


export default useGetData