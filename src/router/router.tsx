import React from "react";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import Header from "../components/header/header";
import Layout from '../containers/layout/layout'
import LayoutResults from "../containers/layoutResults/layoutResults";

const Router=()=>{
    const theme={
        clear:'#f2f2f2',
        dark:'#2a2a2a'
    }

    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<ThemeProvider theme={theme}><Layout></Layout></ThemeProvider>}></Route>
                <Route path="/search" element={<LayoutResults></LayoutResults>}></Route>
            </Routes>
      </BrowserRouter>
    )
}

export default Router