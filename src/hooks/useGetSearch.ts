import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { useState } from "react"

const fetchData=async(search:string)=>{
    const {data}=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyDqZwLEcDKy9SVK7dFjyVMgMOfbZCxM9-k&maxResults=50&q=${search}`)
    return data
}

const useGetSearch=()=>{
    const [search,setSearch]=useState('')
    const {error,isLoading,data}=useQuery(['data',search],()=>fetchData(search),{keepPreviousData:true})

    return {
        error,
        isLoading,
        data,
        search,
        setSearch
    }
}

export default useGetSearch