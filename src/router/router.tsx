import React from "react";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Header from "../components/header/header";
import Layout from '../containers/layout/layout'
import LayoutResults from "../containers/layoutResults/layoutResults";

const Router=()=>{
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Layout></Layout>}></Route>
                <Route path="/search" element={<LayoutResults></LayoutResults>}></Route>
            </Routes>
      </BrowserRouter>
    )
}

export default Router