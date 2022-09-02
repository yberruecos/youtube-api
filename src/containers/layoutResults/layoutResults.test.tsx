import {describe,expect,test,beforeEach,vi} from 'vitest'
import {screen,render} from '@testing-library/react'
import LayoutResults from './layoutResults';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import mockSearchData from '../../mocks/mockSearchData.json'

describe('LayoutResult test',()=>{
    test('Render data from endpoint mock',()=>{
        beforeEach(() => {
            vi.mock('../../hooks/useGetSearch', () => {
                return {
                    default: ()=> {
                        return {
                            error:null,
                            loading:null,
                            data:mockSearchData,
                            search:'',
                            setSearch:(val:string)=>val
                        }
                    }
                }
            })
        });

        const {container} = render(<BrowserRouter><Routes><Route path='/' element={<LayoutResults></LayoutResults>}></Route></Routes></BrowserRouter>)
        const videoCard=container.getElementsByTagName('article');
        expect(videoCard.length).toBe(5)
    })
})